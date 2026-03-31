import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { leadSchema, FormErrors, FormData } from './form-schema';

export const useLeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpa o erro ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11);
    setFormData((prev) => ({ ...prev, telefone: value }));
    
    if (errors.telefone) setErrors((prev) => ({ ...prev, telefone: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSubmitError(null);

    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        nome: fieldErrors.nome?.[0],
        email: fieldErrors.email?.[0],
        telefone: fieldErrors.telefone?.[0],
        tipo_imovel: fieldErrors.tipo_imovel?.[0],
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          nome: result.data.nome,
          email: result.data.email,
          telefone: result.data.telefone,
          tipo_imovel: result.data.tipo_imovel
        }]);

      if (error) throw error;
      
      navigate('/obrigado');
    } catch (err: any) {
      console.error('Supabase Error:', err);
      setSubmitError(err.message || 'Erro ao enviar dados. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    submitError,
    handleInputChange,
    handlePhoneChange,
    handleSubmit
  };
};

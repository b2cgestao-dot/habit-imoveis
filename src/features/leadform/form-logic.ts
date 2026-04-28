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
    const value = e.target.value.replace(/\D/g, '').slice(0, 20);
    setFormData((prev) => ({ ...prev, numero: value }));
    
    if (errors.numero) setErrors((prev) => ({ ...prev, numero: undefined }));
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
        numero: fieldErrors.numero?.[0],
        imovel_interesse: fieldErrors.imovel_interesse?.[0],
      });
      setIsLoading(false);
      return;
    }

    try {
      const sanitizedData = {
        nome: result.data.nome.trim(),
        email: result.data.email.trim().toLowerCase(),
        numero: result.data.numero.replace(/\D/g, ''),
        imovel_interesse: result.data.imovel_interesse.trim()
      };

      const { error } = await supabase
        .from('leads_lp_habit')
        .insert([sanitizedData]);

      if (error) {
        if (error.code === '23505') {
          throw new Error('Você já demonstrou interesse, em breve entraremos em contato.');
        }
        throw new Error('Erro ao enviar. Tente novamente em instantes.');
      }
      
      navigate('/obrigado');
    } catch (err: any) {
      setSubmitError(err.message || 'Erro ao enviar. Tente novamente em instantes.');
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

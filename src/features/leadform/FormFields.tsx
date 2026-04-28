import React, { useState } from 'react';
import mailcheck from 'mailcheck';
import { X } from 'lucide-react';
import { FormErrors, FormData } from './form-schema';

interface FormFieldsProps {
  formData: Partial<FormData>;
  errors: FormErrors;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  errors,
  isLoading,
  onChange,
  onPhoneChange,
}) => {
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailSuggestion) {
      setEmailSuggestion(null);
    }
    onChange(e);
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email) return;

    mailcheck.run({
      email: email,
      domains: [
        'gmail.com', 'hotmail.com', 'outlook.com', 'live.com',
        'yahoo.com', 'yahoo.com.br', 'icloud.com', 'me.com',
        'uol.com.br', 'bol.com.br', 'terra.com.br', 'ig.com.br',
        'globo.com', 'globomail.com', 'r7.com', 'oi.com.br',
        'hotmail.com.br', 'outlook.com.br'
      ],
      topLevelDomains: ['com', 'com.br', 'net', 'net.br', 'org', 'org.br'],
      suggested: function(suggestion: any) {
        setEmailSuggestion(suggestion.full);
      },
      empty: function() {
        setEmailSuggestion(null);
      }
    });
  };

  const acceptSuggestion = () => {
    if (emailSuggestion) {
      onChange({
        target: { name: 'email', value: emailSuggestion }
      } as React.ChangeEvent<HTMLInputElement>);
      setEmailSuggestion(null);
    }
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
        <input
          type="text"
          name="nome"
          value={formData.nome || ''}
          onChange={onChange}
          disabled={isLoading}
          className={`w-full bg-slate-900/50 border ${errors.nome ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
          placeholder="Ex: João da Silva Santos"
        />
        {errors.nome && <p className="text-red-500 text-sm mt-1 font-medium">{errors.nome}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Seu melhor E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            disabled={isLoading}
            className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
            placeholder="exemplo@gmail.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
          
          {emailSuggestion && (
            <div className="mt-2 flex items-center justify-between bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
              <p className="text-sm text-amber-200">
                Você quis dizer{' '}
                <button
                  type="button"
                  onClick={acceptSuggestion}
                  className="font-semibold underline decoration-amber-500/50 hover:decoration-amber-500 transition-colors"
                  aria-label={`Substituir por ${emailSuggestion}`}
                >
                  {emailSuggestion}
                </button>
                ?
              </p>
              <button
                type="button"
                onClick={() => setEmailSuggestion(null)}
                className="text-amber-500/70 hover:text-amber-500 transition-colors p-1"
                aria-label="Ignorar sugestão"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
          <input
            type="tel"
            name="numero"
            value={formData.numero || ''}
            onChange={onPhoneChange}
            disabled={isLoading}
            className={`w-full bg-slate-900/50 border ${errors.numero ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
            placeholder="Apenas números (Ex: 75999999999)"
          />
          {errors.numero && <p className="text-red-500 text-sm mt-1 font-medium">{errors.numero}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Qual o seu imóvel de interesse?</label>
        <input
          type="text"
          name="imovel_interesse"
          value={formData.imovel_interesse || ''}
          onChange={onChange}
          disabled={isLoading}
          className={`w-full bg-slate-900/50 border ${errors.imovel_interesse ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
          placeholder="Ex: Casa com 3 quartos, Apartamento na planta..."
        />
        {errors.imovel_interesse && <p className="text-red-500 text-sm mt-1 font-medium">{errors.imovel_interesse}</p>}
      </div>
    </>
  );
};

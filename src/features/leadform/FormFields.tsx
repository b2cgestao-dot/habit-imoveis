import React from 'react';
import { ChevronDown } from 'lucide-react';
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
            onChange={onChange}
            disabled={isLoading}
            className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
            placeholder="exemplo@gmail.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone || ''}
            onChange={onPhoneChange}
            disabled={isLoading}
            className={`w-full bg-slate-900/50 border ${errors.telefone ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base`}
            placeholder="Apenas números (Ex: 75999999999)"
          />
          {errors.telefone && <p className="text-red-500 text-sm mt-1 font-medium">{errors.telefone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Qual o seu imóvel de interesse?</label>
        <div className="relative">
          <select
            name="tipo_imovel"
            value={formData.tipo_imovel || ''}
            onChange={onChange}
            disabled={isLoading}
            className={`w-full bg-slate-900/50 border ${errors.tipo_imovel ? 'border-red-500/50' : 'border-slate-700/80'} rounded-xl px-5 py-4 text-white font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-slate-800 text-gray-400">Selecione uma opção</option>
            <option value="casa" className="bg-slate-800 text-white">Casa</option>
            <option value="apartamento" className="bg-slate-800 text-white">Apartamento</option>
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {errors.tipo_imovel && <p className="text-red-500 text-sm mt-1 font-medium">{errors.tipo_imovel}</p>}
      </div>
    </>
  );
};

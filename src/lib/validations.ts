import { z } from 'zod';

export const leadSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter no mínimo 3 letras.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  telefone: z.string().length(11, 'O WhatsApp deve ter exatamente 11 números (com DDD).'),
  tipo_imovel: z.enum(['Casa', 'Apartamento'], {
    message: 'Por favor, selecione o tipo de imóvel.'
  })
});

export type FormErrors = {
  nome?: string;
  email?: string;
  telefone?: string;
  tipo_imovel?: string;
};
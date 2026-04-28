import { z } from 'zod';

export const leadSchema = z.object({
  nome: z.string().min(2, "O nome deve ter no mínimo 2 letras.").max(120, "O nome deve ter no máximo 120 letras."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  numero: z.string().min(8, "O número deve ter no mínimo 8 dígitos.").max(20, "O número deve ter no máximo 20 dígitos."),
  imovel_interesse: z.string().min(1, "Por favor, informe o imóvel de interesse.").max(200, "Máximo de 200 caracteres.")
});

export type FormData = z.infer<typeof leadSchema>;

export type FormErrors = {
  nome?: string;
  email?: string;
  numero?: string;
  imovel_interesse?: string;
};

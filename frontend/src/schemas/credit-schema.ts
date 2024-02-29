import { z } from 'zod';

export type CreditForm = z.infer<typeof creditSchema>;

export const creditSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }),
  birthDate: z.string({ required_error: 'Data de nascimento é obrigatória' }),
  cpf: z.string({ required_error: 'CPF é obrigatório' }),
  income: z.preprocess(
    (value: unknown) => (value as string)?.replaceAll(/\D/g, ''),
    z.coerce.number({ required_error: 'Renda é obrigatória' }),
  ),
});

export const creditInitialValues = {
  name: undefined,
  birthDate: undefined,
  cpf: undefined,
  income: undefined,
};

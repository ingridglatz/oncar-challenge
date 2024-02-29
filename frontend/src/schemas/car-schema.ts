import { z } from 'zod';

export type CarForm = z.infer<typeof carSchema>;

export const carSchema = z.object({
  make: z.string({ required_error: 'Marca é obrigatória' }),
  model: z.string({ required_error: 'Modelo é obrigatório' }),
  color: z.string({ required_error: 'Cor é obrigatória' }),
  features: z.array(z.string()),
  price: z.string({ required_error: 'Preço é obrigatório' }),
  image: z.instanceof(File).optional(),
});

export const carInitialValues = {
  make: undefined,
  model: undefined,
  color: undefined,
  features: [],
  price: undefined,
  image: undefined,
};

import { api } from '@/lib/api';
import { Credit } from '@/models/credit';

type ApiCreateCreditPayload = {
  name: string;
  cpf: string;
  birthDate: string;
  income: number;
};

type ApiCredit = {
  id: number;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
  score: number;
  credit: string;
};

export async function createCredit(payload: ApiCreateCreditPayload): Promise<Credit> {
  const response = await api.post<ApiCredit>('/score', payload);

  return new Credit(response.data);
}

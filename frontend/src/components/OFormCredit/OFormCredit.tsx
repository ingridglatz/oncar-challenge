import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { OInput } from '../OInput';
import { OButton } from '../OButton';
import { CreditForm, creditInitialValues, creditSchema } from '@/schemas/credit-schema';
import { zodResolver } from '@hookform/resolvers/zod';

type OFormCreditProps = {
  onSubmit: (data: CreditForm) => void;
};

export function OFormCredit({ onSubmit }: OFormCreditProps) {
  const methods = useForm<CreditForm>({
    resolver: zodResolver(creditSchema),
    defaultValues: creditInitialValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2} mb={4}>
          <OInput label="Nome" name="name" />

          <Stack direction="row" spacing={2}>
            <OInput label="Data de nascimento" name="birthDate" mask="__/__/____" />
            <OInput label="CPF" name="cpf" mask="___.___.___-__" />
          </Stack>

          <OInput label="Renda" name="income" asCurrency />
        </Stack>

        <OButton type="submit">Solicitar</OButton>
      </form>
    </FormProvider>
  );
}

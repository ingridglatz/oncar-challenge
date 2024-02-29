import { Stack } from '@mui/material';
import { OModal } from '../OModal';
import { OInput } from '../OInput';
import OSelect from '../OSelect/OSelect';
import { FormProvider, useForm } from 'react-hook-form';
import { OButton } from '../OButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { CarForm, carInitialValues, carSchema } from '@/schemas/car-schema';
import { featuresOptions } from '@/constants/features-options';
import { useState } from 'react';
import { createCar } from '@/services/cars';
import { OFileInput } from '../OFIleInput';

type CarModalProps = {
  open: boolean;
  handleClose: () => void;
  onSuccess?: () => void;
};

export function OCarModal({ open, handleClose, onSuccess }: CarModalProps) {
  const methods = useForm<CarForm>({
    resolver: zodResolver(carSchema),
    defaultValues: carInitialValues,
  });

  const onSubmit = (data: CarForm) => {
    const payload = { ...data, price: Number(data.price.replaceAll(/\D/gi, '')) };

    createCar(payload).then(() => {
      onSuccess?.();
      methods.reset();
      handleClose();
    });
  };

  return (
    <OModal title="Cadastrar carro" open={open} handleClose={handleClose}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2} mb={4}>
            <OFileInput label="Foto" name="image" accept="image/*" />

            <OInput label="Marca" name="make" />

            <Stack direction="row" spacing={2}>
              <OInput label="Modelo" name="model" />
              <OInput label="Cor" name="color" />
            </Stack>

            <OSelect name="features" label="Opcionais" options={featuresOptions} />
            <OInput label="Preço" name="price" asCurrency />
          </Stack>

          <OButton type="submit">Cadastrar</OButton>
        </form>
      </FormProvider>
    </OModal>
  );
}

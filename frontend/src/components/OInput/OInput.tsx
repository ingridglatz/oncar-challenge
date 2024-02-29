import { TextField } from '@mui/material';
import React from 'react';
import { useMask } from '@react-input/mask';
import { useNumberFormat } from '@react-input/number-format';
import { Controller, useFormContext } from 'react-hook-form';

type InputProps = {
  mask?: string;
  label: string;
  name: string;
  asCurrency?: boolean;
};

export function OInput({ label, mask, asCurrency, name }: InputProps) {
  const { control } = useFormContext();
  const maskRef = useMask({ mask, replacement: '_' });
  const currencyRef = useNumberFormat({
    locales: 'pt-BR',
    currency: 'BRL',
    format: 'currency',
  });

  const inputRef = mask ? maskRef : currencyRef;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          label={label}
          inputRef={mask || asCurrency ? inputRef : null}
          sx={{ flex: 1 }}
          {...field}
        />
      )}
    />
  );
}

import { TextField } from '@mui/material';
import React from 'react';
import { useMask } from '@react-input/mask';
import { useNumberFormat } from '@react-input/number-format';

type InputProps = {
  mask?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  asCurrency?: boolean;
};

export function OInput({ label, value, onChange, mask, asCurrency }: InputProps) {
  const maskRef = useMask({ mask, replacement: '_' });
  const currencyRef = useNumberFormat({
    locales: 'pt-BR',
    currency: 'BRL',
    format: 'currency',
  });

  const inputRef = mask ? maskRef : currencyRef;

  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      inputRef={mask || asCurrency ? inputRef : null}
      sx={{ flex: 1 }}
    />
  );
}

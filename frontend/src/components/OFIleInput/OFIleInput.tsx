import { FormHelperText, Stack, Typography } from '@mui/material';
import { StyledInput, StyledTextField } from './style';
import { Controller, useFormContext } from 'react-hook-form';

type OFileInputProps = {
  label: string;
  name: string;
  accept?: string;
};

export function OFileInput({ label, name, accept }: OFileInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field }, formState }) => {
        return (
          <Stack>
            <StyledTextField component="label">
              <Typography variant="body1" color="textSecondary">
                {value ? value?.name : label}
              </Typography>

              <StyledInput
                type="file"
                accept={accept}
                {...field}
                value={value?.fileName}
                onChange={(event) => onChange(event?.target?.files?.[0])}
              />
            </StyledTextField>

            <FormHelperText error={Boolean(formState?.errors)}>
              {formState?.errors['image']?.message as string}
            </FormHelperText>
          </Stack>
        );
      }}
    />
  );
}

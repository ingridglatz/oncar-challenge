import { Stack, Typography } from '@mui/material';
import { OButton } from '../OButton';

type OCreditMessageProps = {
  score: number;
  message: string;
  onClick?: () => void;
};

export function OCreditMessage({ score, message, onClick }: OCreditMessageProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">{message}</Typography>
      <Typography variant="body1">Score: {score}</Typography>

      <OButton onClick={onClick}>Continuar</OButton>
    </Stack>
  );
}

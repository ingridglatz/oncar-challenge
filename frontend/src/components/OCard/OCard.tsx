import { Button, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { CCard } from './style';

type OCardProps = {
  image: string;
  model: string;
  price: number;
  features: string[];
  onClick: () => void;
};

export function OCard({ image, model, price, features, onClick }: OCardProps) {
  return (
    <CCard>
      <CardMedia component="img" height="140" image={image} alt={model} />
      <CardContent>
        <Typography variant="body1" fontWeight="400">
          {model}
        </Typography>
        <Stack direction="row" spacing={1} color="#666">
          {features.map((feature) => (
            <Typography key={feature} variant="caption">
              {feature}
            </Typography>
          ))}
        </Stack>
        <Typography variant="body1" fontWeight="bold">
          R$ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={onClick}
          variant="contained"
          sx={{
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            marginX: '0.5rem',
            ':hover': {
              backgroundColor: '#444',
            },
          }}
        >
          Solicitar crédito
        </Button>
      </CardActions>
    </CCard>
  );
}

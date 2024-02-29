import { CardContent, CardMedia, CardProps, Stack, Typography } from '@mui/material';

import { Car } from '@/models/car';
import { CCard } from './style';

type OCardProps = {
  car: Car;
  onClick?: () => void;
} & CardProps;

export function OCard({ car, onClick, ...props }: OCardProps) {
  return (
    <CCard {...props}>
      <CardMedia component="img" height="140" image={car.image || '/hidden-car.jpg'} alt={car.model} />
      <CardContent>
        <Typography variant="body1" fontWeight="400">
          {car.model}
        </Typography>
        <Stack direction="row" spacing={1} color="#666">
          <Typography variant="caption">{car.features}</Typography>
        </Stack>
        <Typography variant="body1" fontWeight="bold">
          {car.price}
        </Typography>
      </CardContent>
    </CCard>
  );
}

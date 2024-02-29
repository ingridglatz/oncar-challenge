import { useState } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

import { getCar } from '@/services/cars';
import { Car } from '@/models/car';
import { OCreditModal } from '@/components/OCreditModal';
import { OButton } from '@/components/OButton';

type CarProps = {
  car: Record<string, any> | Car;
};

export default function CarPage({ car }: CarProps) {
  car = new Car(car);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = () => {
    handleOpen();
  };

  return (
    <>
      <Stack height="90vh" alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Box position="relative" width={500} height={500} overflow="hidden" borderRadius={8}>
            <Image objectFit="cover" fill src={car.image || '/hidden-car.jpg'} alt={car.model} />
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3">{`${car.make} ${car.model}`}</Typography>
              <Typography variant="subtitle1">{car.color}</Typography>
              <Typography variant="subtitle1">{car.features}</Typography>
            </Stack>

            <Typography my={4} fontWeight={700} variant="h3">
              {car.price}
            </Typography>
            <OButton onClick={onClick}>Solicitar análise de crédito</OButton>
          </Box>
        </Stack>
      </Stack>

      <OCreditModal open={open} handleClose={handleClose} />
    </>
  );
}

type ContextProps = {
  params: {
    id: string;
  };
};

export const getServerSideProps = async ({ params }: ContextProps) => {
  const car = await getCar(params.id);

  return {
    props: { car: car.toJSON() },
  };
};

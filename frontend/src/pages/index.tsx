import React, { useEffect, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';

import { OCard } from '@/components/OCard';
import { OCreditModal } from '@/components/OCreditModal';
import { getCars } from '@/services/cars';
import { Car } from '@/models/car';
import Link from 'next/link';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getCars().then((cars) => {
      setCars(cars);
    });
  }, []);

  return (
    <>
      <Container>
        <Typography variant="body1" mt={4} sx={{ color: '#666', fontSize: '1rem', fontWeight: 'bold' }}>
          {cars?.length || 0} carros encontrados
        </Typography>
        <Stack paddingBottom={10} mt={4} direction="row" flexWrap="wrap" alignItems="flex-start" gap={2}>
          {cars.map((car) => (
            <Link href={`cars/${car.id}`} key={car.id}>
              <OCard onClick={handleOpen} car={car} />
            </Link>
          ))}
        </Stack>
      </Container>

      <OCreditModal open={open} handleClose={handleClose} />
    </>
  );
}

import OBar from '@/components/OBar/OBar';
import { OCard } from '@/components/OCard';
import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { OInput } from '@/components/OInput';
import { OModal } from '@/components/OModal';
import { ODatePicker } from '@/components/ODatePicker/ODatePicker';

const cars = [
  {
    id: 1,
    make: 'Fiat',
    model: 'Fiat Argo',
    color: 'branco',
    features: ['1.0', 'FLEX', 'AUTOMÁTICO'],
    price: 70000,
    image: './argo.jpeg',
  },
  {
    id: 2,
    make: 'Volkswagen',
    model: 'Fox',
    color: 'branco',
    features: ['1.4', 'GASOLINA', 'MANUAL'],
    price: 65000,
    image: './fox.jpg',
  },
  {
    id: 3,
    make: 'Volkswagen',
    model: 'Gol',
    color: 'verde',
    features: ['1.0', 'GASOLINA', 'MANUAL'],
    price: 8000,
    image: './gol.jpg',
  },
  {
    id: 4,
    make: 'Hyundai',
    model: 'Hyundai Hb20',
    color: 'prata',
    features: ['1.6', 'FLEX', 'AUTOMÁTICO', 'HATCH'],
    price: 90000,
    image: './hb20.jpg',
  },
  {
    id: 5,
    make: 'Ford',
    model: 'Ford Ka',
    color: 'branco',
    features: ['1.4', 'FLEX', 'MANUAL', 'HATCH'],
    price: 70000,
    image: './ka.jpg',
  },
  {
    id: 6,
    make: 'Reanult',
    model: 'Renault Kwid',
    color: 'laranja',
    features: ['1.0', 'FLEX', 'MANUAL'],
    price: 85000,
    image: './kwid.webp',
  },
  {
    id: 7,
    make: 'Fiat',
    model: 'Fiat Mobi',
    color: 'branco',
    features: ['1.0', 'FLEX', 'MANUAL'],
    price: 78000,
    image: './mobi.jpeg',
  },
  {
    id: 8,
    make: 'Volkswagen',
    model: 'T-cross',
    color: 'vermelho',
    features: ['2.0', 'FLEX', 'AUTOMÁTICO', 'SUV'],
    price: 120000,
    image: './t-cross.jpg',
  },
  {
    id: 9,
    make: 'Fiat',
    model: 'Fiat Topolino',
    color: 'verde claro',
    features: ['1.0', 'FLEX', 'AUTOMÁTICO'],
    price: 95000,
    image: './topolino.jpg',
  },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <OBar></OBar>
      <Container>
        <Typography variant="body1" mt={4} sx={{ color: '#666', fontSize: '1rem', fontWeight: 'bold' }}>
          2.000 carros encontrados
        </Typography>
        <Stack
          paddingBottom={10}
          mt={4}
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={2}
        >
          {cars.map((car) => (
            <OCard
              onClick={handleOpen}
              key={car.id}
              image={car.image}
              model={car.model}
              price={car.price}
              features={car.features}
            />
          ))}
        </Stack>
      </Container>

      <OModal title="Solicitar Análise de Crédito" open={open} handleClose={handleClose}>
        <Stack spacing={2}>
          <OInput label="Nome" name="name" />

          <Stack direction="row" spacing={2}>
            <ODatePicker label="Data de nascimento" name="birthDate" />
            <OInput label="CPF" name="cpf" mask="___.___.___-__" />
          </Stack>

          <OInput label="Renda" name="income" asCurrency />
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#333',
            color: '#fff',
            mt: 4,
            ':hover': {
              backgroundColor: '#444',
            },
          }}
        >
          Solicitar
        </Button>
      </OModal>
    </>
  );
}

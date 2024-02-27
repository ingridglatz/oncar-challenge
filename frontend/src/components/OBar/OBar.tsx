import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { StyledAppBar, StyledButton, StyledTypography } from './style';
import { OModal } from '../OModal';
import { Button, Stack } from '@mui/material';
import { OInput } from '../OInput';
import OSelect from '../OSelect/OSelect';

const pages = ['Comprar', 'Vender', 'Serviços', 'Contato'];

function OBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledAppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <StyledTypography variant="h6">Carros</StyledTypography>

            <StyledButton onClick={handleOpen}>Vender carro</StyledButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <OModal title="Cadastrar carro" open={open} handleClose={handleClose}>
        <Stack spacing={2}>
          <OInput label="Marca" name="marca" />

          <Stack direction="row" spacing={2}>
            <OInput label="Modelo" name="modelo" />
            <OInput label="Cor" name="cor" />
          </Stack>

          <OSelect label="Opcionais" items={['Automático', 'Manual', 'Airbag', 'ABS', 'Direção hidraulica']} />
          <OInput label="Preço" name="preço" asCurrency />
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
          Cadastrar
        </Button>
      </OModal>
    </>
  );
}

export default OBar;

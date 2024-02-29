import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { StyledAppBar, StyledButton, StyledTypography } from './style';
import { OCarModal } from '../OCarModal';
import OSnackbar from '../OSnackbar/OSnackbar';
import Link from 'next/link';

export function OAppBar() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSuccess = () => {
    setSuccess(true);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <StyledTypography variant="h6">
              <Link href="/">Carros</Link>
            </StyledTypography>

            <StyledButton onClick={handleOpen}>Vender carro</StyledButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <OSnackbar
        open={success}
        onClose={() => {
          setSuccess(false);
          handleClose();
        }}
      >
        Carro cadastrado com sucesso!
      </OSnackbar>
      <OCarModal onSuccess={handleSuccess} open={open} handleClose={handleClose} />
    </>
  );
}

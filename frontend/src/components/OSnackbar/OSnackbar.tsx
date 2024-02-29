import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type SnackbarProps = {
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  children?: React.ReactNode;
};

export default function OSnackbar({ open, onClose, children }: SnackbarProps) {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose(event, reason);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
}

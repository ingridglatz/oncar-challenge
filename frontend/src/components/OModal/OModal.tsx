import { IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StyledPaper } from './style';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode | React.ReactNode[];
  title?: string;
};

export function OModal({ open, handleClose, title, children }: ModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <StyledPaper>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {children}
      </StyledPaper>
    </Modal>
  );
}

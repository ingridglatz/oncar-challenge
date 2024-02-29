import { Box, styled } from '@mui/material';

export const StyledTextField = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    border-color: #000;
  }
`;

export const StyledInput = styled('input')`
  display: none;
`;

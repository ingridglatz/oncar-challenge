import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
`;

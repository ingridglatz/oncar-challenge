import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

export const StyledAppBar = styled(AppBar)`
  background-color: #333;
  color: white;
  padding: 0 16px;
`;

export const StyledTypography = styled(Typography)`
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  flex-grow: 1;
  font-size: 1.5rem;
`;

export const StyledButton = styled(Button)`
  display: block;
  background-color: #fff;
  color: #333;
  margin: 8px 0;
  font-weight: bold;

  &:hover {
    background-color: #ddd;
  }
`;

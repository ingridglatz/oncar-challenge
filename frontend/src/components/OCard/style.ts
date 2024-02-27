import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const CCard = styled(Card)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .MuiCardMedia-root {
    width: 100%;
    height: 180px;
  }

  .MuiCardContent-root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .MuiTypography-root {
    margin-bottom: 0.5rem;
    margin-left: 1rem;
  }
`;

import { StyledButton } from './style';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function OButton({ children, onClick, type }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} variant="contained" fullWidth>
      {children}
    </StyledButton>
  );
}

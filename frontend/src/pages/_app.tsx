import '@/styles/globals.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import type { AppProps } from 'next/app';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

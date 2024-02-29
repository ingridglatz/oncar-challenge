import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { OAppBar } from '@/components/OAppBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <OAppBar />
      <Component {...pageProps} />
    </>
  );
}

// pages/_app.tsx
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import '../styles/globals.css'; // pastikan memiliki global stylesheet

// Definisikan font lokal
const belgiano = localFont({
  src: [
    {
      path: '../public/font/Opensans/Belgiano_Serif.ttf', // gunakan path absolut
    },
  ],
  variable: '--font-belgiano',
  display: 'swap', // opsional
});

const abigail = localFont({
  src: [
    {
      path: '../public/font/Opensans/Abigail.ttf', // gunakan path absolut
    },
  ],
  variable: '--font-abigail',
  display: 'swap', // opsional
});

const edensor = localFont({
  src: [
    {
      path: '../public/font/Opensans/Edensor-FREE.otf', // gunakan path absolut
    },
  ],
  variable: '--font-edensor',
  display: 'swap', // opsional
});

const oldscientific = localFont({
  src: [
    {
      path: '../public/font/Opensans/OldScientificIllustration.ttf', // gunakan path absolut
    },
  ],
  variable: '--font-oldscientific',
  display: 'swap', // opsional
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${belgiano.variable} ${abigail.variable} ${edensor.variable} ${oldscientific.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

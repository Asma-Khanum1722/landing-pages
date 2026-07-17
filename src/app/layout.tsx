import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: {
    template: '%s | SVR Aesthetics Milton Keynes',
    default: 'SVR Aesthetics Milton Keynes',
  },
  description: 'Fast, accurate blood tests in Milton Keynes. No GP required. Get clear results and clinical guidance to take control of your health.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

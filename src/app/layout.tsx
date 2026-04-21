import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Global Education Council | Your Gateway to World-Class Education',
  description:
    'Access 100+ European universities from India. No hidden fees. Personalized guidance from inquiry to graduation. 10,000+ dreams supported.',
  keywords: 'global education, study abroad, European universities, overseas education, India',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="text-white antialiased">{children}</body>
    </html>
  );
}

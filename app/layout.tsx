import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: 'Aprendendo Next.JS',
    template: '%s | Aprendendo Next.JS'
  },
  description: 'Este site é sobre aprender a usar o Next.JS'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>Cabeçalho da Aplicação</header>
        {children}
        <footer>Rodapé da Aplicação</footer>
      </body>
    </html>
  );
}

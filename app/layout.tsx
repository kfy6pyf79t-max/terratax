import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import YandexMetrika from './components/YandexMetrika';

export const metadata: Metadata = {
  title: 'Terre.Agency — Налоговая безопасность бизнеса',
  description: 'Двойной периметр защиты активов и репутации вашего бизнеса.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
     <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
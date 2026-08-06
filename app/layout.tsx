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
      <head>
        {/* 👇 ВСТАВЬТЕ СЮДА КОД ИЗ ЯНДЕКС.ВЕБМАСТЕРА 👇 */}
        <meta name="yandex-verification" content="2dd97544e54a5ff7" />
      </head>
     <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
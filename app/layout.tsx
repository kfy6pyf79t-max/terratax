import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import YandexMetrika from './components/YandexMetrika';

export const metadata: Metadata = {
  title: 'TerreTax.Agency — Налоговая безопасность бизнеса',
  description: 'Двойной периметр защиты активов и репутации вашего бизнеса.',
  verification: {
    yandex: '2dd97544e54a5ff7',
  },
  icons: {
    icon: '/favicon.ico',
  },
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
        {/* 👇 ДОБАВЬТЕ ЭТОТ БЛОК 👇 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname === 'kfy6pyf79t-max.github.io') {
                window.location.replace('https://terratax.ru' + window.location.pathname + window.location.search);
              }
            `,
          }}
        />
        {/* 👆 КОНЕЦ БЛОКА 👆 */}
      </head>
     <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
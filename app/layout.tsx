import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Резиденты — лаборатория Глеба Кудрявцева",
  description:
    "Закрытая лаборатория для практиков, которые строят с ИИ. Дипломный проект среди равных, вход по интервью.",
  openGraph: {
    title: "Резиденты — лаборатория Глеба Кудрявцева",
    description:
      "Закрытый круг практиков: дипломный проект среди равных, доступ к фронтиру, вход по интервью.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/* Шрифт Inter — тот же CDN-источник, что и в статической версии (пиксельная идентичность) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

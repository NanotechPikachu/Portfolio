import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | NanotechPikachu",
  description: "Portfolio of NanotechPikachu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | NanotechPikachu",
  description: "Portfolio of NanotechPikachu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-black bg-slate-50 ${inter.className}`}>{children}</body>
    </html>
  );
}
// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "საფეხბურთო აკადემია",
  description: "ახალგაზრდული გუნდის გვერდი",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body 
        className={`${inter.className} bg-gray-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import React from "react";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./../styles/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Modular",
  description: "Modular",
  icons: {
    icon: "./assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="container antialiased bg-main text-dark relative">
        <main>{children}</main>
      </body>
    </html>
  );
}

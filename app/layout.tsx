import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheelz",
  description: "Discover world's best car rental application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className=" relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

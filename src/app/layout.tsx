import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components/custom/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Correia",
  description: "Matheus Correia's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-black flex w-screen h-screen")}
      >
        <div className="flex flex-col w-full h-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

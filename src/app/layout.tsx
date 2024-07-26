import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from "@/context/Web3Modal";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAO",
  description: "App to cast your vote through Ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Modal>
          <div className=" flex flex-col justify-between items-stretch h-screen">
            <Header/>
            {children}
            <Footer/>
          </div>
        </Web3Modal>
      </body>
    </html>
  );
}

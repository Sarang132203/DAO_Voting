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
  icons: {
    icon: "/images/logo.webp", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#8a3aee] to-[#240046] min-h-screen`}>
        <Web3Modal>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col justify-center items-center w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Web3Modal>
      </body>
    </html>
  );
}

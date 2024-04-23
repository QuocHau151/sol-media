"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Nav from "@/components/Nav";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <PrimeReactProvider>
      <html lang="vi">
        <body className={`relative  bg-black ${inter.className}`}>
          <AnimatePresence mode="wait">
            <motion.div key={pathname} className="h-full">
              <Transition />
              <TopNav />
              <Nav />
              {children}
            </motion.div>
          </AnimatePresence>
        </body>
      </html>
    </PrimeReactProvider>
  );
}

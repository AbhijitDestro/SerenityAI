import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { Providers } from "@/components/providers";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Serenity AI",
  description: "Your Personal AI Therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

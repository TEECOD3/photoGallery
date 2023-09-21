import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Gallery ",
  description: "image gallery to search for your favourite images",
  icons: {
    icon: "/photo-camera-tools-symbol-svgrepo-com.svg",
  },
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}

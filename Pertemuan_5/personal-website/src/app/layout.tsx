import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from '../components/Layout';
import "./globals.css";

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "Website Pribadi",
  description: "Website Pribadi untuk menampilkan proyek dan esai",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}

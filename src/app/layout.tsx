import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Kim",
  description: "Portfolio of Samuel Kim, showcasing projects, skills, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

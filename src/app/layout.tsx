import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzfizz - Scroll Hero Animation",
  description: "Scroll-driven hero section animation for Itzfizz Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

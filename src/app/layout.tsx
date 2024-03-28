import type { Metadata } from "next";
import clsx from "clsx";
import { outfit } from "@/constants/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BerryLabs.io",
  description: "This is BerryLabs.io website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(outfit.className, "text-black bg-white")}>{children}</body>
    </html>
  );
}

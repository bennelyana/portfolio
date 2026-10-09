import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yana Buisan",
  description:
    "Personal portfolio of Yana Buisan — digital marketing, creative design, content, and web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

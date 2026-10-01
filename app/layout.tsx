import type { Metadata } from "next";
import "./globals.css";
import { BagProvider } from "@/components/BagProvider";

export const metadata: Metadata = {
  title: "Pink Static — Oversized streetwear concept",
  description:
    "Concept demo: oversized t-shirts and shirts for Gen Z. Campaign-led storefront with a demo shopping bag — no payment.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BagProvider>{children}</BagProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { CartProvider } from "@/Context/store";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Audiophile",
    default: "Audiophile",
  },
  description: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

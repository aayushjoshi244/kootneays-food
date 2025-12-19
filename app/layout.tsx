import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kootenays Food Service Delivery | Cranbrook, BC",
  description:
    "Local delivery of food-service goods across the Kootenays. Partnered with Sysco Canada. Based in Cranbrook, British Columbia.",
  openGraph: {
    title: "Kootenays Food Service Delivery",
    description:
      "Local delivery of food-service goods across the Kootenays. Partnered with Sysco Canada. Based in Cranbrook, British Columbia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

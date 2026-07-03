import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://springletour.com"),
  title: "Spring Le Tour | Premium Turn-Key Mobile Solutions",
  description:
    "Spring Le Tour is a California-based design and manufacturing firm specializing in premium Sprinter Van conversions and turn-key mobile solutions for dealers and businesses.",
  keywords: [
    "Sprinter Van conversion",
    "mobile solutions",
    "camper van",
    "turn-key builds",
    "California",
    "Spring Le Tour",
  ],
  openGraph: {
    title: "Spring Le Tour | Premium Turn-Key Mobile Solutions",
    description:
      "Mobilizing Your Vision. Empowering Your Business. Premium mobile solutions engineered in California.",
    type: "website",
    url: "https://springletour.com",
    images: [
      {
        url: "/images/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Spring Le Tour mobile grooming van product render",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

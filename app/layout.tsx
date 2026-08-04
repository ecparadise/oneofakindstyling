import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./ui/menu";
import Footer from "./ui/footer";
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "One of a Kind Styling",
    template: '%s | One of a Kind Styling'
  },
  description: "Personalized styling services to elevate your wardrobe and confidence.",
  keywords: ['personal stylist Connecticut', 'styling services CT', 'wardrobe consultation'],
  openGraph: {
    title: 'One of a Kind Styling',
    description: 'Personalized styling services to elevate your wardrobe and confidence.',
    url: 'https://oneofakindstyling.vercel.app/',
    siteName: 'One of a Kind Styling',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="4d13a95b-b435-4eb7-887f-223750de7be9" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fbf8f3] dark:bg-black`}
      >
       <Analytics />
        <Menu />
        <div className="flex min-h-screen items-center justify-center font-body">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 xs:items-start">
            <div className="pb-12 md:pb-0">
              {children}
            </div>
          </main>
        </div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

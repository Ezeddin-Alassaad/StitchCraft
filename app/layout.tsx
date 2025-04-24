import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'StitchCraft | Master Sewing Workshops',
  description: 'Learn the art of sewing with our expert-led workshops for all skill levels.',
  keywords: 'sewing, workshops, tailoring, fashion, sewing classes, crafts',
  openGraph: {
    title: 'StitchCraft | Master Sewing Workshops',
    description: 'Learn the art of sewing with our expert-led workshops for all skill levels.',
    images: [
      {
        url: 'https://images.pexels.com/photos/4620624/pexels-photo-4620624.jpeg',
        width: 1200,
        height: 630,
        alt: 'StitchCraft Sewing Workshops',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="QkH_5OHsGxRk4B09p0mgV-w5c0gYwDnJfJsiYZYCIi8" />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} font-poppins`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
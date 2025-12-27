import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Never Miss a Date Again - Manage Dates & Discover Gifts',
    template: '%s | Never Miss a Date Again',
  },
  description: 'Never miss an important date again. Manage birthdays, anniversaries, and special occasions with smart gift recommendations from local florists and gift shops.',
  keywords: ['gifts', 'bouquets', 'florist', 'birthdays', 'anniversaries', 'date management', 'gift recommendations'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nevermissadateagain.com',
    siteName: 'Never Miss a Date Again',
    title: 'Never Miss a Date Again - Manage Dates & Discover Gifts',
    description: 'Never miss an important date again. Manage birthdays, anniversaries, and special occasions with smart gift recommendations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Never Miss a Date Again - Date Management & Gift Discovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Never Miss a Date Again - Manage Dates & Discover Gifts',
    description: 'Never miss an important date again. Smart gift recommendations from local florists.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

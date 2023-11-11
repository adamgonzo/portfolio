import './globals.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Sidebar from '@/app/components/topbarnav'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://adamgonzo.com'),
  title: {
    default: 'Adam Gonzalez',
    template: '%s | Adam Gonzalez'
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Adam Gonzalez',
    description: 'Developer, writer, and creator.',
    url: 'https://adamgonzo.com',
    siteName: 'Adam Gonzalez',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'TOCNeUIB3Ip8igD0P4qA4u3JUw6VqzqcIje6lA0Bq2c'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mt-8 lg:mx-auto mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}

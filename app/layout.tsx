import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ilim - Books That Understand How You Feel',
  description: 'Discover books through AI that understands your emotions, mood, and voice. Join gentle, safe communities and begin wellness-oriented reading journeys designed with care.',
  keywords: 'books, AI, recommendations, mood-based, voice, wellness, mental health, reading, safe communities, emotional intelligence',
  authors: [{ name: 'Ilim' }],
  openGraph: {
    title: 'Ilim - Books That Understand How You Feel',
    description: 'AI-powered book recommendations designed with emotional intelligence and care.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

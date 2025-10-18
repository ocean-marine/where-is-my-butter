import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dosanko.example'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: '道産子乳業株式会社 - 北海道十勝の小規模乳業メーカー',
    template: '%s | 道産子乳業'
  },
  description:  '北海道十勝の生乳にこだわる小規模ロット乳業メーカー。毎朝の集乳から低温殺菌、充填までを一貫管理。',
  openGraph: {
    title: '道産子乳業株式会社',
    description: '北海道十勝の生乳にこだわる小規模ロット乳業メーカー。',
    type: 'website',
    locale: 'ja_JP',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': '道産子乳業株式会社',
              'address': {
                '@type': 'PostalAddress',
                'addressRegion': '北海道',
                'addressLocality': '河西郡大正村',
                'streetAddress': '新通114-51',
              },
              'url': 'https://www.dosanko.example',
              'sameAs': ['https://example.com/diary'],
            }),
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

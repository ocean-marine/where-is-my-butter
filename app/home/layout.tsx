'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Header } from '../header'
import { Footer } from '../footer'
import '../globals.css'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white tracking-tight antialiased dark:bg-zinc-950">
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="mx-auto w-full max-w-screen-sm flex-1 px-4 py-8 sm:px-6 md:px-8">
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

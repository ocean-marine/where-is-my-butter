'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-semibold text-lg tracking-tight text-black dark:text-white">
          DOSANKO DAIRY
        </Link>
      </div>
      <nav>
        <a
          href="#contact"
          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          お問い合わせ
        </a>
      </nav>
    </header>
  )
}

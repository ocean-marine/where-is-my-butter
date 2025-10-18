'use client'
import Link from 'next/link'

export function Header() {
  const navItems = [
    { href: '#about', label: '企業情報' },
    { href: '#features', label: '特徴' },
    { href: '#products', label: '製品' },
    { href: '#contact', label: 'お問い合わせ' },
  ]

  return (
    <header className="mb-8 border-b border-zinc-200 pb-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
            DOSANKO DAIRY
          </Link>
        </div>
        <nav className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

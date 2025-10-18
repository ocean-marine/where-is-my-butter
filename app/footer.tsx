'use client'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-6 dark:border-zinc-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
          <p>© 道産子乳業株式会社</p>
          <p>北海道河西郡大正村新通114-51</p>
        </div>
        <nav>
          <Link
            href="/privacy"
            className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            プライバシーポリシー
          </Link>
        </nav>
      </div>
    </footer>
  )
}

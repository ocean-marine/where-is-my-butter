'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <motion.div
      className="flex flex-col min-h-[90svh] justify-between items-center px-4 py-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          道産子乳業株式会社
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-5xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="space-y-1"
        >
          <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-50">
            ページが見つかりません
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            お探しのページは見つかりませんでした。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="flex gap-2 mt-2"
        >
          <button
            onClick={() => router.back()}
            className="rounded-lg border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            ← 戻る
          </button>

          <Link
            href="/"
            className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 dark:hover:bg-blue-400"
          >
            トップページへ
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
        <p>© 道産子乳業株式会社</p>
        <p>北海道河西郡大正村新通114-51</p>
        <p className="mt-1 underline underline-offset-2">プライバシーポリシー</p>
      </footer>
    </motion.div>
  )
}

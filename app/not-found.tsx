'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          道産子乳業株式会社
        </motion.div>

        {/* 404 Error */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50 md:text-7xl">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center space-y-2"
        >
          <h2 className="text-lg md:text-2xl font-medium text-zinc-900 dark:text-zinc-50">
            ページが見つかりません
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            お探しのページは見つかりませんでした。
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col gap-3"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:border-zinc-600"
          >
            <span>←</span>
            <span>戻る</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-400"
          >
            <span>トップページへ</span>
          </Link>
        </motion.div>

      </div>
    </motion.div>
  )
}

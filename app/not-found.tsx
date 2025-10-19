'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <motion.div
      // ① full-screen中央寄せをやめ、ほどよい上下パディングに
      className="flex min-h-[80svh] flex-col items-center justify-start py-16 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        // ② 全体の縦ギャップを一段階締める（6→md:8 で応答的に）
        className="flex flex-col items-center space-y-6 md:space-y-8"
      >
        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          道産子乳業株式会社
        </motion.div>

        {/* Campaign End Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center"
        >
          {/* キャンペーン終了メッセージ */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
            本キャンペーンは<br />終了しました
          </h1>
        </motion.div>

        {/* Campaign Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center space-y-2 md:space-y-3"
        >
          <p className="text-lg md:text-xl font-semibold text-pink-600 dark:text-pink-400">
            牛乳1年分プレゼント
          </p>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            ご応募ありがとうございました。
          </p>
        </motion.div>

        {/* Back / Home Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          // ⑤ SM以上は横並び、モバイルは縦積み。ギャップも-1段階。
          className="flex flex-col sm:flex-row gap-2 sm:gap-3"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:border-zinc-600"
          >
            <span>←</span>
            <span>戻る</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-400"
          >
            <span>ホームに戻る</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

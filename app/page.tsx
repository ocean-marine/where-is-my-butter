'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {

  return (
    <motion.div
      className="flex flex-col min-h-[90svh] justify-between items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* Campaign Banner with Image */}
      <div className="relative w-full">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src="/IMG_7010.png"
            alt="Campaign"
            fill
            className="object-cover"
          />
          {/* White Fade Overlay */}
          <div className="absolute inset-0 bg-white/50" />
          {/* Campaign Ended Message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-5xl font-bold text-zinc-900"
              style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.6)' }}
            >
              本キャンペーンは<br></br>終了しました
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-5 px-4 pt-0 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="flex gap-2 -mt-3"
        >
          <Link
            href="/home"
            className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 dark:hover:bg-blue-400"
          >
            ← 戻る
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

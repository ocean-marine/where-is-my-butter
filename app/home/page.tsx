'use client'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.4,
}

export default function DosankoDairyHome() {
  return (
    <motion.main
      className="space-y-12 sm:space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        id="hero"
        role="banner"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-6"
      >
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            しぼりたての、北のまじめ。
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            十勝の朝霧からはじまる一杯を、そのまま。
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#history"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            会社の遍歴
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            所在地
          </a>
          <a
            href="https://dairyfarmerjapan.hateblo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            日記（外部）
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        aria-labelledby="about-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2
          id="about-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          道産子乳業について
        </h2>
        <div className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          <p>
            北海道十勝の生乳にこだわる小規模ロットの乳業メーカーです。
          </p>
          <p>
            毎朝の集乳から低温殺菌、充填までを一貫管理しています。
          </p>
          <p>
            地域とともに、顔が見える品質を大切にしています。
          </p>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        id="history"
        aria-labelledby="history-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2
          id="history-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          会社の遍歴
        </h2>
        <ol className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          <li>
            <time dateTime="1965" className="font-medium text-zinc-900 dark:text-zinc-50">
              1965
            </time>
            {' '}
            創業
          </li>
          <li>
            <time dateTime="1998" className="font-medium text-zinc-900 dark:text-zinc-50">
              1998
            </time>
            {' '}
            低温殺菌ライン導入
          </li>
          <li>
            <time dateTime="2010" className="font-medium text-zinc-900 dark:text-zinc-50">
              2010
            </time>
            {' '}
            HACCP準拠
          </li>
        </ol>

        {/* Expandable Details */}
        <details className="group cursor-pointer">
          <summary className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50">
            <span>もっと見る</span>
            <svg
              className="h-4 w-4 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </summary>
          <ol className="mt-3 space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            <li>
              <time dateTime="2025" className="font-medium text-zinc-900 dark:text-zinc-50">
                2025
              </time>
              {' '}
              再エネ比率30%達成
            </li>
          </ol>
        </details>
      </motion.section>

      {/* Location Section */}
      <motion.section
        id="location"
        aria-labelledby="location-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2
          id="location-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          所在地
        </h2>
        <address className="not-italic text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          北海道河西郡大正村新通114-51
        </address>
        <a
          href="https://maps.example.com/?q=北海道河西郡大正村新通114-51"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          地図で開く
        </a>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          ※工場見学は事前予約制です
        </p>
      </motion.section>
    </motion.main>
  )
}

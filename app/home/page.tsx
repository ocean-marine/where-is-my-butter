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
          href="https://maps.app.goo.gl/pM1Q2dKw1ea72QuL6?g_st=ipc"
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

      {/* Features/Values Section */}
      <motion.section
        id="features"
        aria-labelledby="features-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2
          id="features-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          当社の特徴
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              こだわりの生乳
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              十勝産の最高品質生乳のみを厳選し、朝霧の中で搾りたての新鮮さを保ちます。
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              低温殺菌
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              牛乳本来の風味と栄養を保つ低温殺菌技術で、安全性と品質を両立。
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              一貫管理
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              集乳から充填まで一貫管理で、徹底した品質管理と食品安全を実現。
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              サステナビリティ
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              再生可能エネルギー比率30%達成。環境への責任も大切にしています。
            </p>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        aria-labelledby="products-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3"
      >
        <h2
          id="products-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          主な製品
        </h2>
        <div className="space-y-2">
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              低温殺菌牛乳
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              新鮮な十勝産生乳を低温殺菌した、濃厚で香り高い牛乳。毎日の朝食に最適です。
            </p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              ヨーグルト
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              良質な生乳を使用した濃厚でまろやかなヨーグルト。健康的なおやつにもぴったり。
            </p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              チーズ・乳製品
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              十勝産生乳を使用した各種乳製品。小ロット生産で品質にこだわっています。
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        id="contact"
        aria-labelledby="contact-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-6 dark:from-blue-950 dark:to-cyan-950"
      >
        <h2
          id="contact-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          お問い合わせ
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          製品のご注文、工場見学のご予約、その他のお問い合わせはお気軽にどうぞ。
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://dairyfarmerjapan.hateblo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            ブログで最新情報をチェック
          </a>
          <a
            href="mailto:info@dosankodairy.jp"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            メールで問い合わせ
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}

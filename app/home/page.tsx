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
        className="space-y-6 pb-2"
      >
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            しぼりたての、<br />北のまじめ。
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            十勝の朝霧からはじまる一杯を、そのまま。
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600"
          >
            企業情報をチェック
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:hover:border-zinc-600"
          >
            当社の特徴
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
            <time dateTime="1967" className="font-medium text-zinc-900 dark:text-zinc-50">
              1967
            </time>
            {' '}
            道産子牛乳の直売を開始
          </li>
          <li>
            <time dateTime="1971" className="font-medium text-zinc-900 dark:text-zinc-50">
              1971
            </time>
            {' '}
            東の方角に第二牛舎を建設
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
          <li>
            <time dateTime="2014" className="font-medium text-zinc-900 dark:text-zinc-50">
              2014
            </time>
            {' '}
            北海道全土のコンビニで道産子アイスクリームの取り扱いが開始
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
              <time dateTime="2022" className="font-medium text-zinc-900 dark:text-zinc-50">
                2022
              </time>
              {' '}
              BSEにより200頭を殺処分
            </li>
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
          href="https://maps.app.goo.gl/t8myc3Gc9GEKXqgb7?g_st=ipc"
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
        className="space-y-4"
      >
        <h2
          id="features-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          当社の特徴
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Feature Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-0 p-5 transition-all hover:shadow-lg hover:border-blue-300 dark:border-blue-900 dark:from-blue-950 dark:to-blue-900 dark:hover:border-blue-700">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 transition-opacity group-hover:opacity-10 dark:from-blue-700 dark:to-cyan-700" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-lg">🥛</span>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                こだわりの生乳
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                十勝産の最高品質生乳のみを厳選し、朝霧の中で搾りたての新鮮さを保ちます。
              </p>
            </div>
          </div>
          {/* Feature Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-cyan-0 p-5 transition-all hover:shadow-lg hover:border-cyan-300 dark:border-cyan-900 dark:from-cyan-950 dark:to-cyan-900 dark:hover:border-cyan-700">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-200 to-blue-200 opacity-0 transition-opacity group-hover:opacity-10 dark:from-cyan-700 dark:to-blue-700" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900">
                <span className="text-lg">❄️</span>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                低温殺菌
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                牛乳本来の風味と栄養を保つ低温殺菌技術で、安全性と品質を両立。
              </p>
            </div>
          </div>
          {/* Feature Card 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-amber-0 p-5 transition-all hover:shadow-lg hover:border-amber-300 dark:border-amber-900 dark:from-amber-950 dark:to-amber-900 dark:hover:border-amber-700">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-amber-200 to-orange-200 opacity-0 transition-opacity group-hover:opacity-10 dark:from-amber-700 dark:to-orange-700" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900">
                <span className="text-lg">🔗</span>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                一貫管理
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                集乳から充填まで一貫管理で、徹底した品質管理と食品安全を実現。
              </p>
            </div>
          </div>
          {/* Feature Card 4 */}
          <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-green-0 p-5 transition-all hover:shadow-lg hover:border-green-300 dark:border-green-900 dark:from-green-950 dark:to-green-900 dark:hover:border-green-700">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-green-200 to-emerald-200 opacity-0 transition-opacity group-hover:opacity-10 dark:from-green-700 dark:to-emerald-700" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <span className="text-lg">🌱</span>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                サステナビリティ
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                再生可能エネルギー比率30%達成。環境への責任も大切にしています。
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        aria-labelledby="products-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-4"
      >
        <h2
          id="products-title"
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          主な製品
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {/* Product Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 transition-all hover:shadow-lg hover:border-blue-400 dark:border-blue-800 dark:from-zinc-900 dark:to-blue-950 dark:hover:border-blue-600">
            <div className="absolute top-0 right-0 h-20 w-20 -mr-10 -mt-10 rounded-full bg-blue-100 opacity-50 dark:bg-blue-900" />
            <div className="relative">
              <div className="mb-3 text-3xl">🥛</div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
                低温殺菌牛乳
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                新鮮な十勝産生乳を低温殺菌した、濃厚で香り高い牛乳。毎日の朝食に最適です。
              </p>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-purple-200 bg-gradient-to-br from-white to-purple-50 p-6 transition-all hover:shadow-lg hover:border-purple-400 dark:border-purple-800 dark:from-zinc-900 dark:to-purple-950 dark:hover:border-purple-600">
            <div className="absolute top-0 right-0 h-20 w-20 -mr-10 -mt-10 rounded-full bg-purple-100 opacity-50 dark:bg-purple-900" />
            <div className="relative">
              <div className="mb-3 text-3xl">🥣</div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
                ヨーグルト
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                良質な生乳を使用した濃厚でまろやかなヨーグルト。健康的なおやつにもぴったり。
              </p>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-yellow-200 bg-gradient-to-br from-white to-yellow-50 p-6 transition-all hover:shadow-lg hover:border-yellow-400 dark:border-yellow-800 dark:from-zinc-900 dark:to-yellow-950 dark:hover:border-yellow-600">
            <div className="absolute top-0 right-0 h-20 w-20 -mr-10 -mt-10 rounded-full bg-yellow-100 opacity-50 dark:bg-yellow-900" />
            <div className="relative">
              <div className="mb-3 text-3xl">🧀</div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
                チーズ・乳製品
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                十勝産生乳を使用した各種乳製品。小ロット生産で品質にこだわっています。
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        id="contact"
        aria-labelledby="contact-title"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 p-8 sm:p-10 dark:from-blue-700 dark:via-cyan-600 dark:to-blue-700"
      >
        {/* Background decoration */}
        <div className="absolute -inset-px opacity-20 bg-gradient-to-r from-white to-transparent rounded-2xl" />
        <div className="relative">
          <h2
            id="contact-title"
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
          >
            お問い合わせ
          </h2>
          <p className="text-sm sm:text-base text-blue-50 mb-6">
            製品のご注文、工場見学のご予約、その他のお問い合わせはお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://dairyfarmerjapan.hateblo.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 px-6 py-3 text-sm font-semibold transition-all hover:bg-blue-50 hover:shadow-lg dark:bg-zinc-900 dark:text-cyan-400 dark:hover:bg-zinc-800"
            >
              📝 ブログで最新情報をチェック
            </a>
            <a
              href="mailto:info@dosankodairy.jp"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:bg-opacity-10 dark:border-cyan-400 dark:text-cyan-50 dark:hover:bg-cyan-400 dark:hover:bg-opacity-10"
            >
              ✉️ メールで問い合わせ
            </a>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

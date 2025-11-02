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
            <time dateTime="2005" className="font-medium text-zinc-900 dark:text-zinc-50">
              2005
            </time>
            {' '}
            廃業
          </li>
        </ol>

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
          href="https://maps.app.goo.gl/4bJ61E5oaK8o7wHy8"
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
            ブログ
          </h2>
          <p className="text-sm sm:text-base text-blue-50 mb-6">
            もっと酪農がたのしくなるコンテンツです。 酪農についてテキストや動画で紹介します。
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
          </div>
        </div>
      </motion.section>
    
    </motion.main>
  )
}

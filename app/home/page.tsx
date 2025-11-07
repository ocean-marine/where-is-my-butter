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
          沿革
        </h2>
        <ol className="space-y-4">
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/12852993-4EA1-41C1-A5ED-01961829EDBE.png)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="1990" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                1990年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  創業
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  創業者・佐藤太一が、北海道十勝地方で「佐藤牧場」を創業。乳牛5頭からスタートする。
                </p>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/6F918E3F-C64A-4E60-BE4B-D031AC2AE091.png)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="1993" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                1993年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  ブランド化と瓶販売開始
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  口コミで評判が広がり、需要が増加。小規模な低温殺菌設備を導入し、「道産子牛乳」としてブランド化、瓶での販売を開始する。
                </p>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/IMG_6583.jpeg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="1997" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                1997年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  「みるく小屋」オープン
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  経営多角化のため、牧場敷地内に直売所「みるく小屋」をオープン。自家製ソフトクリームとヨーグルトが観光客の人気を博し、経営が軌道に乗る。
                </p>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/IMG_6583.jpeg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="2002" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                2002年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  BSE問題による危機
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  BSE問題が発生。深刻な風評被害に見舞われ、牛乳・乳製品の消費が全般的に落ち込み、売上が激減する。
                </p>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/IMG_6583.jpeg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="2004" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                2004年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  経営危機
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  飼料価格の高騰が続く中、大型台風が地域を直撃。牛舎と設備に大きな被害を受ける。創業者の体調不良も重なり、事業継続が困難となる。
                </p>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden rounded-lg bg-cover bg-center h-40" style={{ backgroundImage: 'url(/IMG_6583.jpeg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
            <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
              <time dateTime="2005" className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                2005年
              </time>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900" style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)' }}>
                  廃業
                </h3>
                <p className="text-sm sm:text-base text-zinc-800" style={{ textShadow: '0 0 2px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,0.5)' }}>
                  再建を断念し、廃業。15年の歴史に幕を下ろす。
                </p>
              </div>
            </div>
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

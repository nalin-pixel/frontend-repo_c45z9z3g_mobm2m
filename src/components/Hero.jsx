import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)]" />
      <div className="relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-white/60 backdrop-blur text-[12px] tracking-widest uppercase text-gray-700 border border-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
          Retro meets modern — pastel, glam and a touch of sass
        </motion.div>
        <motion.h1 initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-gray-900">
          Let’s Vibe & Design!
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
          I craft playful, high-conversion interfaces infused with 90s flair, lush gradients and buttery micro-interactions.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#work" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 text-white font-semibold shadow-[0_8px_24px_rgba(236,72,153,0.35)]">
            Explore Work
          </motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#about" className="px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-white text-gray-900 font-semibold">
            About Me
          </motion.a>
        </div>
      </div>
      {/* corner chrome accents */}
      <div className="absolute left-6 bottom-6 hidden sm:flex gap-1 opacity-70">
        <span className="h-2 w-16 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded" />
        <span className="h-2 w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded" />
      </div>
      <div className="absolute right-6 top-6 hidden sm:flex gap-1 opacity-70">
        <span className="h-2 w-20 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded" />
        <span className="h-2 w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded" />
      </div>
    </section>
  )
}

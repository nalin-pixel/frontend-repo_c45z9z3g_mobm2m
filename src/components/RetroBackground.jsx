import { motion } from 'framer-motion'

export default function RetroBackground() {
  const blobs = [
    { c: 'from-pink-300/70 to-purple-400/70', x: '-20%', y: '-10%', size: 420, delay: 0 },
    { c: 'from-cyan-300/60 to-blue-400/60', x: '60%', y: '-20%', size: 520, delay: 0.2 },
    { c: 'from-amber-200/60 to-rose-300/60', x: '10%', y: '60%', size: 560, delay: 0.4 },
    { c: 'from-violet-300/60 to-fuchsia-400/60', x: '70%', y: '50%', size: 440, delay: 0.6 },
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.1),transparent_40%)]" />
      <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{backgroundImage:'linear-gradient(120deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0) 20%,rgba(255,255,255,0.06) 40%,rgba(255,255,255,0) 60%,rgba(255,255,255,0.06) 80%)'}} />
      <div className="absolute inset-0 grain" />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: b.delay, ease: 'easeOut' }}
          className={`absolute blur-3xl rounded-full bg-gradient-to-br ${b.c}`}
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            filter: 'saturate(1.2)'
          }}
        />
      ))}
      {/* floating sparkles */}
      {[...Array(24)].map((_, i) => (
        <motion.span
          key={`sp-${i}`}
          className="absolute block h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_2px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 0], y: [0, -12, 0] }}
          transition={{ duration: 3 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.12 }}
          style={{ left: `${(i * 13) % 100}%`, top: `${(i * 7) % 100}%` }}
        />
      ))}
    </div>
  )
}

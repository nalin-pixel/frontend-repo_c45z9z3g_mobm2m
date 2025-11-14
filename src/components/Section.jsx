import { motion } from 'framer-motion'

export function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.5),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-10" >
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{eyebrow}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 drop-shadow">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export function Card({ title, subtitle, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur bg-white/50 border border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-400/30 via-rose-300/30 to-amber-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
        <div className="mt-4 text-gray-700">{children}</div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Menu, Star, Sparkles } from 'lucide-react'

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-6 w-[92%] rounded-full backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between px-6 py-3">
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-2">
            <Sparkles className="text-fuchsia-500" size={20} />
            <span className="font-extrabold tracking-widest text-[13px] uppercase text-gray-900 drop-shadow-sm">Vibe UX</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {['About', 'Work', 'Resume'].map((item, i) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-fuchsia-600 transition-colors" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }}>
                {item}
              </motion.a>
            ))}
          </div>
          <button className="md:hidden p-2 rounded-full bg-white/50 text-gray-900">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

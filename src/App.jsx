import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import NavBar from './components/NavBar'
import RetroBackground from './components/RetroBackground'
import Hero from './components/Hero'
import { Section, Card } from './components/Section'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    document.title = 'Vibe UX – Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-sky-50 text-gray-900 relative">
      <RetroBackground />
      <NavBar />
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1.5 origin-left bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 z-50" />
      <main className="relative pt-24">
        <Hero />

        <Section id="about" title="About" eyebrow="WHO I AM">
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Designer" subtitle="UX, UI, Motion">
              Crafting journeys that feel inevitable. I blend research, motion and micro-interactions for interfaces that smile back.
            </Card>
            <Card title="Technologist" subtitle="React, Framer, Figma">
              I prototype at the speed of thought and ship with precision. Accessibility and performance are my love language.
            </Card>
            <Card title="Human" subtitle="Music, retro games, art">
              Born in the 90s, raised on neon. I bring optimism, curiosity and a little drama to every pixel I touch.
            </Card>
          </div>
        </Section>

        <Section id="work" title="Selected Work" eyebrow="FEATURED CASE STUDIES">
          <div className="grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <Card key={i} title={`Project 0${i}`} subtitle="Product Design • Motion">
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-200 via-rose-200 to-amber-200" />
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="absolute inset-0 mix-blend-multiply" style={{backgroundImage:'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.9), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.8), transparent 35%)'}} />
                </div>
                <p className="mt-3">A short teaser for a case study. Motion-first UI, sharp IA and business outcomes front and center.</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="resume" title="Resume" eyebrow="EXPERIENCE">
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Senior Product Designer" subtitle="Glow Labs • 2021 — Present">
              Led design for growth surfaces; +28% activation. Built a motion system and design tokens with dev parity.
            </Card>
            <Card title="Product Designer" subtitle="Neon Co. • 2018 — 2021">
              Shipped cross-platform onboarding. Introduced research ops; reduced time-to-insight by 45%.
            </Card>
            <Card title="Education" subtitle="B.Des — Interaction Design">
              National Institute of Design. Thesis on playful motion as feedback in productivity tools.
            </Card>
            <Card title="Skills" subtitle="UX Strategy, Prototyping, Motion, Systems">
              Figma, React, Framer, After Effects, Accessibility, Analytics, Storytelling.
            </Card>
          </div>
        </Section>

        <footer className="relative py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.6),transparent_60%)]" />
          <div className="relative max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2025 Vibe UX — Designed with love, glitter and gradients.</p>
            <div className="flex items-center gap-3">
              <a href="#about" className="text-sm text-gray-700 hover:text-fuchsia-600">About</a>
              <a href="#work" className="text-sm text-gray-700 hover:text-fuchsia-600">Work</a>
              <a href="#resume" className="text-sm text-gray-700 hover:text-fuchsia-600">Resume</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

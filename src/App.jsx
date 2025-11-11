import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Sigma, Calculator, LineChart, Quote, Star } from 'lucide-react'

const GOLD = '#F9D342'
const OFF_WHITE = '#F7F7F7'

// Subtle animated background for hero
function MotionBackground() {
  const shapes = [
    { size: 140, x: 5, y: 10, delay: 0 },
    { size: 90, x: 70, y: 15, delay: 0.6 },
    { size: 110, x: 20, y: 70, delay: 1.2 },
    { size: 60, x: 80, y: 75, delay: 1.8 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((s, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{ y: [0, -10, 0], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            background: GOLD,
            filter: 'blur(24px)',
            opacity: 0.12,
          }}
        />
      ))}

      {/* Subtle animated grid lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#000" opacity="0.05" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  )
}

function NavBar() {
  const links = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Tutoring Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`w-full sticky top-0 z-40 backdrop-blur`} style={{ backgroundColor: OFF_WHITE }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-black font-serif font-bold text-xl tracking-tight flex items-center gap-2">
            <GraduationCap size={22} color="#000" />
            <span>Yogesh Prabhu</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-black text-sm md:text-base transition-colors duration-300 hover:text-[${GOLD}] ${
                  link.active ? `underline decoration-[${GOLD}] underline-offset-4 decoration-2` : ''
                }`}
                style={link.active ? { textUnderlineOffset: '6px' } : {}}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Hero() {
  return (
    <section id="home" className="relative bg-white">
      <MotionBackground />
      <div className="relative max-w-[1200px] mx-auto px-6 py-24 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            Expert Online Tutor for IB, AP & University Math
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#1E1E1E]">
            Helping students from UC Berkeley, Cornell, and top IB programs achieve academic excellence
            through personalized 1-on-1 online tutoring.
          </p>

          <motion.div className="mt-10 flex flex-wrap items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a
              href="mailto:info@yogeshprabhu.com?subject=Request%20a%20Trial%20Class&body=Hi%20Prof.%20Yogesh%2C%20I%27d%20like%20to%20request%20a%20trial%20class."
              className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-sm transition-colors duration-300`}
              style={{ backgroundColor: GOLD, color: '#000' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000'
                e.currentTarget.style.color = GOLD
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = GOLD
                e.currentTarget.style.color = '#000'
              }}
            >
              Request a Trial Class
            </a>

            <a
              href="https://wa.me/1234567890?text=Hi%20Prof.%20Yogesh%2C%20I%27d%20like%20to%20chat%20about%20tutoring."
              target="_blank" rel="noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-sm border-2 transition-colors duration-300`}
              style={{ borderColor: GOLD, color: '#000' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = GOLD
                e.currentTarget.style.backgroundColor = '#000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-[#1E1E1E] opacity-90">
            <div className="flex items-center gap-2"><Sigma size={18} color="#000" /><span>Concept-driven</span></div>
            <div className="flex items-center gap-2"><Calculator size={18} color="#000" /><span>Problem-focused</span></div>
            <div className="flex items-center gap-2"><LineChart size={18} color="#000" /><span>Outcome-oriented</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="" style={{ backgroundColor: OFF_WHITE }}>
      <div className="w-full" style={{ height: '3px', backgroundColor: GOLD }} />
      <motion.div
        className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-black tracking-[0.5px] font-medium">
          Our students have been accepted to top universities including UC Berkeley, Cornell, Imperial College London, and more.
        </p>
      </motion.div>
    </section>
  )
}

function Services() {
  const card = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } }),
  }

  return (
    <section id="services" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black inline-flex items-center gap-3">
            <Star size={22} color="#000" />
            Subjects We Tutor
          </h2>
          <div className="h-[3px] w-36 mt-2" style={{ backgroundColor: GOLD }} />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {[
            {
              title: 'IB Diploma Students',
              text: 'Focused tutoring for Math AA HL, Math AI SL, and expert IA/EE mentoring. Build confidence, strengthen fundamentals, and achieve a Level 7 in IB Mathematics.',
            },
            {
              title: 'AP Students',
              text: 'Tailored guidance for AP Calculus AB/BC and related subjects. Learn smarter, not harder — through clear explanations and practical problem-solving.',
            },
            {
              title: 'University Students',
              text: 'Advanced tutoring for Engineering Math, Applied Math, and Business Math. Designed for students pursuing excellence in competitive university programs.',
            },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={card}>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="text-[#1E1E1E]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="mailto:info@yogeshprabhu.com?subject=Request%20a%20Trial%20Class"
            className={`inline-flex items-center text-sm md:text-base font-medium transition-colors duration-300`}
            style={{ color: GOLD }}
          >
            → Request a Trial Class
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const liVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 * i, duration: 0.45 } }),
  }

  const bullets = [
    '15+ years of global teaching experience.',
    'Proven success with students from elite international schools.',
    'Personalized learning plans tailored to each student’s goals.',
    'Concept-driven, confidence-building approach.',
  ]

  return (
    <section id="about" className="" style={{ backgroundColor: OFF_WHITE }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">Why Students Trust Us</h2>
        <p className="mt-3 text-[#666666]">
          More than a tutoring service — we’re a long-term academic partner for excellence.
        </p>

        <motion.ul className="mt-8 space-y-3 text-black list-disc pl-6"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {bullets.map((b, i) => (
            <motion.li key={b} custom={i} variants={liVariants}>{b}</motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Testimonials() {
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' } }),
  }

  const quotes = [
    {
      text: '“Prof. Yogesh helped me achieve a 7 in IB Math AA HL. His clarity and patience made complex topics easy.”',
      author: '— IB Student, Singapore',
    },
    {
      text: '“I scored an A+ in University Calculus thanks to Prof. Yogesh. His method builds true understanding.”',
      author: '— Engineering Student, USA',
    },
    {
      text: '“He’s not just a tutor — he’s a mentor who genuinely cares about student growth.”',
      author: '— Parent of IB Student, UK',
    },
  ]

  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black inline-flex items-center gap-3">
            <Quote size={22} color="#000" /> Student Success Stories
          </h2>
          <div className="h-[3px] w-44 mt-2" style={{ backgroundColor: GOLD }} />
        </div>

        <div className="space-y-10 md:space-y-12">
          {quotes.map((q, i) => (
            <motion.figure key={i} className="text-center" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={i} variants={quoteVariants}>
              <blockquote className="italic text-black max-w-3xl mx-auto">{q.text}</blockquote>
              <figcaption className="mt-3 text-[#1E1E1E]">{q.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function BigCTA() {
  return (
    <section className="" style={{ backgroundColor: OFF_WHITE }}>
      <motion.div
        className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-black">Start Your Journey to Academic Excellence</h2>
        <p className="mt-3 text-[#666666]">
          Experience world-class 1-on-1 online tutoring with Prof. Yogesh Prabhu.
        </p>

        <div className="mt-8">
          <a
            href="mailto:info@yogeshprabhu.com?subject=Request%20a%20Trial%20Class"
            className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-sm transition-colors duration-300`}
            style={{ backgroundColor: GOLD, color: '#000' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000'
              e.currentTarget.style.color = GOLD
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = GOLD
              e.currentTarget.style.color = '#000'
            }}
          >
            Request a Trial Class
          </a>
          <p className="mt-4 text-[#1E1E1E]">
            or message us directly on{' '}
            <a
              className="underline"
              href="https://wa.me/1234567890?text=Hi%20Prof.%20Yogesh%2C%20I%27d%20like%20to%20chat%20about%20tutoring."
              target="_blank"
              rel="noreferrer"
              style={{ color: GOLD }}
            >
              WhatsApp
            </a>{' '}
            for instant support.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="text-sm" style={{ backgroundColor: '#000' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-14 text-[15px]" style={{ color: OFF_WHITE }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-semibold tracking-tight">Quick Links</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Tutoring Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="transition-colors underline-offset-4"
                  style={{ color: OFF_WHITE }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = GOLD
                    e.currentTarget.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = OFF_WHITE
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold tracking-tight">Contact</p>
            <div className="mt-3 space-y-2">
              <a
                href="mailto:info@yogeshprabhu.com"
                className="transition-colors"
                style={{ color: OFF_WHITE }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GOLD
                  e.currentTarget.style.textDecoration = 'underline'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = OFF_WHITE
                  e.currentTarget.style.textDecoration = 'none'
                }}
              >
                📧 info@yogeshprabhu.com
              </a>
              <br />
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="transition-colors"
                style={{ color: OFF_WHITE }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GOLD
                  e.currentTarget.style.textDecoration = 'underline'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = OFF_WHITE
                  e.currentTarget.style.textDecoration = 'none'
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-[#A0A0A0] border-t border-[#222]">
          © 2025 Yogesh Prabhu. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, Lato, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChoose />
        <Testimonials />
        <BigCTA />
      </main>
      <Footer />
    </div>
  )
}

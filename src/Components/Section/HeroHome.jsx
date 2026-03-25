import React from 'react'
import Logo from '../Assets/logo_club_circular.png'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Users, Trophy, Zap, ChevronDown } from 'lucide-react'

// Variantes reutilizables
const wordReveal = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14, delay: i * 0.12 },
  }),
}

const scaleIn = (delay = 0) => ({
  initial: { scale: 0, opacity: 0, rotate: -8 },
  animate: { scale: 1, opacity: 1, rotate: 0 },
  transition: { type: 'spring', stiffness: 200, damping: 18, delay },
})

const slideUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: 'spring', stiffness: 100, damping: 20, delay },
})

function HeroHome() {
  const statsData = [
    { icon: Users, value: '8', label: 'Categorías' },
    { icon: Zap, value: '15+', label: 'Horas/Semana' },
    { icon: Trophy, value: '4', label: 'Ligas Competitivas' },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Grid perspectiva */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 102, 193, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 102, 193, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(55deg)',
            transformOrigin: 'center 70%',
          }}
        />
      </div>

      {/* Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Partículas */}
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary pointer-events-none"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Logo watermark */}
      <motion.img
        src={Logo}
        alt=""
        className="absolute inset-0 m-auto w-[280px] sm:w-[400px] md:w-[540px] lg:w-[680px] opacity-[0.06] object-contain select-none pointer-events-none"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.06, rotate: [0, 3, 0, -3, 0] }}
        transition={{
          scale: { duration: 1.4, ease: 'easeOut' },
          opacity: { duration: 1.4 },
          rotate: { duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
        }}
      />

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6 py-28 sm:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8"
            {...scaleIn(0.3)}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-open-sans text-sm text-white font-semibold">
              Temporada 2026 · Inscripciones Abiertas
            </span>
          </motion.div>

          {/* Título — reveal por palabra con overflow hidden */}
          <h1 className="font-bebas uppercase tracking-tight mb-6">
            <div className="overflow-hidden">
              <motion.span
                className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-none"
                custom={0}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
              >
                Club Atlético
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent leading-none"
                custom={1}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
              >
                Coventry
              </motion.span>
            </div>
          </h1>

          {/* Tagline */}
          <motion.p
            className="font-open-sans text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, letterSpacing: '0em' }}
            transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
          >
            Donde cada punto cuenta
          </motion.p>

          {/* Descripción */}
          <motion.p
            className="font-open-sans text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 1.1 }}
          >
            Únete a una comunidad de deportistas apasionados. Entrenamiento profesional, ambiente
            familiar y competencias de alto nivel para{' '}
            <span className="text-primary font-semibold">todas las edades</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 1.25 } },
            }}
          >
            <motion.a
              href="#contacto"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-xl md:text-2xl px-10 py-4 rounded-full flex items-center gap-3 shadow-[0_0_35px_rgba(255,102,193,0.45)]"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 55px rgba(255,102,193,0.65)' }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="relative z-10">Pedir Clase Gratis</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-200" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>

            <motion.a
              href="#categorias"
              className="group font-bebas text-lg md:text-xl text-white px-8 py-4 rounded-full border-2 border-white/20 hover:border-primary/60 backdrop-blur-sm flex items-center gap-2 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Categorías
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* Stats — bounce cascade */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1.6 } },
            }}
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.85 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: 'spring', stiffness: 250, damping: 16 },
                  },
                }}
                whileHover={{ y: -6, borderColor: 'rgba(255,102,193,0.4)', backgroundColor: 'rgba(255,255,255,0.09)' }}
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="font-bebas text-2xl md:text-3xl text-white">{stat.value}</div>
                <div className="font-open-sans text-[10px] text-gray-400 uppercase tracking-wide leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="font-open-sans text-[10px] text-gray-500 uppercase tracking-widest">Desliza</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroHome

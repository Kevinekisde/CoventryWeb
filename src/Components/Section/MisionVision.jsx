import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Zap, Shield, TrendingUp, Users, Heart, Star, Trophy, Handshake } from 'lucide-react'

const values = [
  { icon: Users, title: 'Trabajo en Equipo', description: 'Juntos somos más fuertes. Cada punto es un logro colectivo que celebramos en familia.', gradient: 'from-primary to-pink-600' },
  { icon: Shield, title: 'Disciplina', description: 'El compromiso diario es la base de todo gran logro. Entrenamos con propósito.', gradient: 'from-pink-600 to-primary' },
  { icon: Heart, title: 'Pasión', description: 'Vivimos el voleibol con intensidad y amor genuino por el deporte que nos une.', gradient: 'from-primary to-pink-500' },
  { icon: Handshake, title: 'Respeto', description: 'Dentro y fuera de la cancha, tratamos a cada persona con dignidad y consideración.', gradient: 'from-pink-500 to-primary' },
  { icon: Star, title: 'Inclusión', description: 'Un club para todos, sin importar edad, nivel ni experiencia previa. Todos son bienvenidos.', gradient: 'from-primary to-pink-600' },
  { icon: Trophy, title: 'Excelencia', description: 'Buscamos la mejora continua en cada entrenamiento, cada partido y cada persona.', gradient: 'from-pink-600 to-primary' },
]

// Variantes de tarjetas con dirección alternada
const cardVariants = (idx) => ({
  hidden: {
    opacity: 0,
    x: idx % 2 === 0 ? -60 : 60,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      delay: Math.floor(idx / 2) * 0.15,
    },
  },
})


// Container stagger
const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

function MisionVision() {
  return (
    <section
      id="valores"
      className="relative bg-black py-20 md:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,102,193,0.3) 80px, rgba(255,102,193,0.3) 81px),
            repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,102,193,0.3) 80px, rgba(255,102,193,0.3) 81px)
          `,
        }} />
      </div>

      {/* Blobs */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-open-sans text-sm text-white font-semibold">Nuestra Identidad</span>
          </div>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Lo Que Nos</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">Define</span>
          </h2>
          <p className="font-open-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Los valores que guían cada entrenamiento, cada partido y cada persona de nuestro club
          </p>
        </motion.div>

        {/* ── Values Grid — alternating left/right ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors duration-300 overflow-hidden cursor-default"
              variants={cardVariants(idx)}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
                transition={{ duration: 0.3 }}
              />
              {/* Bottom line */}
              <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-3xl" />

              {/* Icon — spin on hover */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,102,193,0.25)]`}
                whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </motion.div>

              <h3 className="font-bebas text-3xl text-white mb-3 uppercase leading-none">{value.title}</h3>
              <p className="font-open-sans text-gray-400 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mission & Vision — split horizontal desde extremos ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
          {/* Mission — slide from left */}
          <motion.div
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute left-0 top-0 w-1 bg-gradient-to-b from-primary to-pink-600 rounded-r-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-pink-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,102,193,0.3)] flex-shrink-0"
                  whileInView={{ rotate: [0, -15, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>
                <div>
                  <h3 className="font-bebas text-3xl lg:text-4xl text-white uppercase leading-none">Nuestra Misión</h3>
                  <motion.div
                    className="h-1 bg-primary mt-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </div>
              </div>
              <p className="font-open-sans text-gray-300 leading-relaxed text-base lg:text-lg">
                Formar deportistas integrales a través del voleibol, promoviendo valores como el{' '}
                <span className="text-primary font-semibold">trabajo en equipo</span>, la{' '}
                <span className="text-primary font-semibold">disciplina</span> y el{' '}
                <span className="text-primary font-semibold">respeto</span>. Ofrecemos un espacio inclusivo donde cada jugador puede desarrollar su máximo potencial dentro y fuera de la cancha.
              </p>
            </div>
          </motion.div>

          {/* Vision — slide from right */}
          <motion.div
            className="group relative bg-gradient-to-br from-primary/10 to-pink-600/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-primary/20 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute right-0 top-0 w-1 bg-gradient-to-b from-pink-600 to-primary rounded-l-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-pink-600 to-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,102,193,0.3)] flex-shrink-0"
                  whileInView={{ rotate: [0, 15, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Eye className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>
                <div>
                  <h3 className="font-bebas text-3xl lg:text-4xl text-white uppercase leading-none">Nuestra Visión</h3>
                  <motion.div
                    className="h-1 bg-primary mt-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </div>
              </div>
              <p className="font-open-sans text-gray-300 leading-relaxed text-base lg:text-lg mb-8">
                Ser reconocidos como el{' '}
                <span className="text-primary font-semibold">club de voleibol referente</span> en la formación de talentos deportivos y humanos. Aspiramos a inspirar a futuras generaciones a vivir el deporte con{' '}
                <span className="text-primary font-semibold">pasión y dedicación</span>.
              </p>

              {/* Stats — bounce desde abajo */}
              <motion.div
                className="grid grid-cols-3 gap-3"
                variants={staggerContainer(0.12, 0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { value: '100%', label: 'Compromiso' },
                  { value: '10+', label: 'Años' },
                  { value: '8', label: 'Categorías' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-primary/30 transition-colors overflow-hidden"
                    variants={{
                      hidden: { opacity: 0, y: 25, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 14 } },
                    }}
                    whileHover={{ scale: 1.07 }}
                  >
                    <div className="font-bebas text-3xl text-primary mb-1">{stat.value}</div>
                    <div className="font-open-sans text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Quote — scale reveal desde centro ── */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
              </motion.div>
              <p className="font-open-sans text-white text-xl md:text-2xl lg:text-3xl font-bold italic mb-2">
                "Cada punto comienza con un saque,
              </p>
              <p className="font-open-sans text-primary text-xl md:text-2xl lg:text-3xl font-bold italic">
                cada campeón comienza con un sueño"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MisionVision

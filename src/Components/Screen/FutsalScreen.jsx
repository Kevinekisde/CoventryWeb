import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, Users, ChevronLeft, Phone, ArrowRight, Instagram } from 'lucide-react';
import Logo from '../Assets/logo_club_circular.png';
import Chatbot from '../Section/Chatbot';

const ORANGE = '#f97316';
const ORANGE_DARK = '#ea580c';

// ── Variantes de página ────────────────────────────────────────────────────
const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ── Datos ─────────────────────────────────────────────────────────────────
const categories = [
  {
    id: 1,
    age: '4 – 7 años',
    emoji: '🌟',
    label: 'Iniciación',
    color: '#fbbf24',
    description: 'Primeros pasos en el deporte. Jugamos, aprendemos y nos divertimos con actividades adaptadas a los más pequeños.',
    features: ['Coordinación y motricidad', 'Juegos grupales', 'Introducción a reglas básicas', 'Ambiente lúdico y seguro'],
  },
  {
    id: 2,
    age: '8 – 12 años',
    emoji: '⚡',
    label: 'Desarrollo',
    color: ORANGE,
    description: 'Técnica, táctica y espíritu de equipo. Formamos jugadores íntegros con base sólida para el futuro.',
    features: ['Técnica de juego', 'Trabajo en equipo', 'Táctica básica', 'Mini torneos internos'],
  },
];

const infoCards = [
  {
    icon: MapPin,
    title: 'Lugar',
    value: 'Colegio Manquecura',
    sub: 'Ñuñoa, Santiago',
  },
  {
    icon: Calendar,
    title: 'Días',
    value: 'Sábado y Domingo',
    sub: 'Clases semanales',
  },
  {
    icon: Clock,
    title: 'Horario',
    value: '10:00 – 11:30',
    sub: '90 minutos por clase',
  },
  {
    icon: Users,
    title: 'Edades',
    value: '4 a 12 años',
    sub: 'Grupos por edad',
  },
];

// ── Componente principal ──────────────────────────────────────────────────
export default function FutsalScreen() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── NAVBAR FUTSAL ─────────────────────────────────────────────── */}
      <FutsalNavbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Fondo animado */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px]"
            style={{ backgroundColor: `${ORANGE}30` }}
            animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[160px]"
            style={{ backgroundColor: '#fbbf2420' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, ${ORANGE}66 60px, ${ORANGE}66 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, ${ORANGE}66 60px, ${ORANGE}66 61px)
              `,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge deporte */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border"
            style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}40` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg">⚽</span>
            <span className="font-open-sans text-sm font-semibold uppercase tracking-widest" style={{ color: ORANGE }}>
              Nuevo Taller Deportivo
            </span>
          </motion.div>

          {/* Título principal */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-bebas text-7xl md:text-9xl lg:text-[11rem] uppercase leading-none"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, #ffffff, #e5e7eb)` }}
              >
                Taller de
              </span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="font-bebas text-7xl md:text-9xl lg:text-[11rem] uppercase leading-none"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${ORANGE}, #fbbf24)` }}
              >
                Futsal
              </span>
            </motion.h1>
          </div>

          {/* Descripción */}
          <motion.p
            className="font-open-sans text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Deporte, diversión y desarrollo integral para niños de 4 a 12 años. Sábados y domingos en Ñuñoa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <motion.a
              href="https://wa.me/56954243318?text=Hola! Me interesa el taller de futsal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white font-bebas text-xl px-8 py-4 rounded-full shadow-lg overflow-hidden relative group"
              style={{ background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`, boxShadow: `0 0 30px ${ORANGE}50` }}
              whileHover={{ scale: 1.06, boxShadow: `0 0 50px ${ORANGE}80` }}
              whileTap={{ scale: 0.97 }}
            >
              Quiero Inscribirme
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#categorias"
              className="flex items-center gap-2 font-bebas text-xl text-gray-300 hover:text-white px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all"
              whileHover={{ scale: 1.04 }}
            >
              Ver Categorías ↓
            </motion.a>
          </motion.div>

          {/* Flecha scroll */}
          <motion.div
            className="mt-20"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-12 h-12 mx-auto border-b-[5px] border-r-[5px] rotate-45 rounded-br-xl" style={{ borderColor: ORANGE }} />
          </motion.div>
        </div>
      </section>

      {/* ── INFO RÁPIDA ────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ borderColor: `${ORANGE}60`, backgroundColor: `${ORANGE}08` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${ORANGE}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: ORANGE }} />
                  </div>
                  <p className="font-open-sans text-xs text-gray-400 uppercase tracking-widest mb-1">{card.title}</p>
                  <p className="font-bebas text-xl text-white">{card.value}</p>
                  <p className="font-open-sans text-xs text-gray-500">{card.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ────────────────────────────────────────────────── */}
      <section id="categorias" className="py-24 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ backgroundColor: `${ORANGE}10` }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div className="text-center mb-16" {...fadeUp()}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border"
              style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30` }}
            >
              <Users className="w-4 h-4" style={{ color: ORANGE }} />
              <span className="font-open-sans text-sm font-semibold" style={{ color: ORANGE }}>Categorías</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-4">
              <span className="text-white">Un lugar para </span>
              <span style={{ color: ORANGE }}>cada edad</span>
            </h2>
            <p className="font-open-sans text-gray-400 text-lg max-w-xl mx-auto">
              Grupos reducidos, atención personalizada y metodología adaptada a cada etapa de desarrollo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden p-8"
                initial={{ opacity: 0, x: idx === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                whileHover={{ borderColor: `${cat.color}50` }}
              >
                {/* Barra superior */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: cat.color }} />

                {/* Emoji + Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${cat.color}20` }}
                  >
                    {cat.emoji}
                  </div>
                  <span
                    className="font-bebas text-sm px-3 py-1 rounded-full border"
                    style={{ color: cat.color, borderColor: `${cat.color}50`, backgroundColor: `${cat.color}10` }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Edad */}
                <h3 className="font-bebas text-4xl text-white mb-2">{cat.age}</h3>

                {/* Descripción */}
                <p className="font-open-sans text-gray-400 text-sm mb-6 leading-relaxed">{cat.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-open-sans text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA card */}
                <motion.a
                  href="https://wa.me/56954243318?text=Hola! Me interesa el taller de futsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bebas text-lg text-white border transition-all"
                  style={{ borderColor: `${cat.color}40`, backgroundColor: `${cat.color}10` }}
                  whileHover={{ backgroundColor: `${cat.color}25`, borderColor: cat.color }}
                >
                  Inscribir en esta categoría
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ backgroundColor: `${ORANGE}20` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto rounded-3xl border border-white/10 p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(255,255,255,0.02))' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-6">⚽</div>

            <h2 className="font-bebas text-5xl md:text-6xl uppercase leading-none mb-4">
              <span className="text-white">Primera clase</span>
              <br />
              <span style={{ color: ORANGE }}>100% gratis</span>
            </h2>

            <p className="font-open-sans text-gray-400 mb-10 text-lg">
              Sin compromiso. Ven a conocer el taller, conoce al profe y decide si es para tu hijo/a.
            </p>

            <div className="space-y-4 mb-8">
              <motion.a
                href="https://wa.me/56954243318?text=Hola! Me interesa la clase de prueba gratis del taller de futsal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-open-sans text-xs text-gray-400">Escríbenos por WhatsApp</p>
                  <p className="font-bebas text-xl text-white group-hover:text-green-400 transition-colors">+569 5424 3318</p>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/cvb.atl.coventry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-open-sans text-xs text-gray-400">Síguenos en Instagram</p>
                  <p className="font-bebas text-xl text-white group-hover:text-pink-400 transition-colors">@cvb.atl.coventry</p>
                </div>
              </motion.a>
            </div>

            <motion.a
              href="https://wa.me/56954243318?text=Hola! Me interesa la clase de prueba gratis del taller de futsal"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 rounded-full font-bebas text-2xl text-white text-center overflow-hidden relative"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                boxShadow: `0 0 40px ${ORANGE}50`,
              }}
              whileHover={{ scale: 1.03, boxShadow: `0 0 60px ${ORANGE}80` }}
              whileTap={{ scale: 0.97 }}
            >
              Reservar Mi Clase Gratis
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-white/10 text-center">
        <img src={Logo} alt="Club Atlético Coventry" className="w-16 mx-auto mb-4 opacity-70" />
        <p className="font-bebas text-xl text-gray-400">Club Atlético Coventry</p>
        <p className="font-open-sans text-xs text-gray-600 mt-1">© 2025 · Todos los derechos reservados</p>
      </footer>

      <Chatbot />
    </motion.div>
  );
}

// ── Navbar específica del futsal ──────────────────────────────────────────
function FutsalNavbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + nombre */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={Logo}
            alt="Club Atlético Coventry"
            className="w-10 h-10 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <div className="leading-none">
            <p className="font-bebas text-lg text-white">Club Atlético</p>
            <p className="font-bebas text-lg" style={{ color: ORANGE }}>Coventry</p>
          </div>
        </Link>

        {/* Centro: pill indicador */}
        <div
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bebas"
          style={{ borderColor: `${ORANGE}40`, backgroundColor: `${ORANGE}10`, color: ORANGE }}
        >
          ⚽ Taller de Futsal
        </div>

        {/* Volver a Voleibol */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-2 font-bebas text-base text-gray-300 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2 rounded-full transition-all"
            whileHover={{ x: -4 }}
          >
            <ChevronLeft className="w-4 h-4" />
            Voleibol
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
}

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Instagram, Phone, Volleyball } from 'lucide-react';
import HeroHome from '../Section/HeroHome';
import Categorias from '../Section/Categorias';
import Logo from '../Assets/logo_club_circular.png'
import MisionVision from '../Section/MisionVision';
import InstagramFeed from '../Section/InstagramPost';
import Chatbot from '../Section/Chatbot';
import Navbar from '../UI/Navbar';
import { useRef } from 'react';

export default function VolleyballLanding() {
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const stickyRef = useRef(null);

  // Scroll progress para animaciones generales
  const { scrollYProgress } = useScroll();

  // Scroll progress para el sticky section
  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformaciones para fade out del sticky
  const stickyOpacity = useTransform(stickyProgress, [0, 0.5, 0.9, 1], [1, 1, 0.3, 0]);
  const stickyScale = useTransform(stickyProgress, [0, 0.5, 1], [1, 1, 0.9]);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Indicador de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-pink-500 to-primary origin-left z-[60]"
        style={{ scaleX: smoothProgress }}
      />

      {/* ========== NAVBAR ========== */}
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <HeroHome />

      {/* ========== VALORES / MISION VISION SECTION ========== */}
      <MisionVision />

      {/* ========== TRANSICIÓN STICKY CON EFECTO DE SOBREPOSICIÓN ========== */}
      <div ref={stickyRef} className="relative bg-gradient-to-b from-black via-black to-black">
        {/* Contenedor con altura de 200vh para el efecto sticky */}
        <div className="h-[300vh]">
          {/* Contenido que se queda sticky con fade out */}
          <motion.div
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
            style={{
              opacity: stickyOpacity,
              scale: stickyScale
            }}
          >
            {/* Grid de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 102, 193, 0.4) 60px, rgba(255, 102, 193, 0.4) 61px),
                    repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 102, 193, 0.4) 60px, rgba(255, 102, 193, 0.4) 61px)
                  `
                }}
              />
            </div>

            {/* Gradientes animados más grandes */}
            <motion.div
              className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[180px]"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-pink-500/20 rounded-full blur-[180px]"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Partículas flotantes más grandes y visibles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -60 - Math.random() * 40, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Contenido principal centrado */}
            <motion.div
              className="relative z-10 text-center px-4 max-w-6xl mx-auto"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Ícono central giratorio con anillos */}
              <motion.div
                className="mb-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="relative w-20 h-20 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-primary to-pink-600 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_100px_rgba(255,102,193,0.7)]">
                  <Volleyball className="w-20 h-20 md:w-24 md:h-24 text-white" />

                  {/* Anillo 1 */}
                  <motion.div
                    className="absolute inset-0 border-[5px] border-primary rounded-[2.5rem]"
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />

                  {/* Anillo 2 */}
                  <motion.div
                    className="absolute inset-0 border-[5px] border-pink-400 rounded-[2.5rem]"
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.6
                    }}
                  />

                  {/* Anillo 3 */}
                  <motion.div
                    className="absolute inset-0 border-[5px] border-white rounded-[2.5rem]"
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1.2
                    }}
                  />
                </div>
              </motion.div>

              {/* Título impactante */}
              <motion.h2
                className="font-bebas text-6xl md:text-6xl lg:text-[5rem] 2xl:text-[6rem] uppercase mb-8 leading-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-3">
                  Descubre
                </span>
                <span className="block bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                  Tu Categoría
                </span>
              </motion.h2>

              {/* Descripción */}
              <motion.p
                className="font-open-sans text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Desde iniciación hasta nivel profesional, tenemos el lugar perfecto para ti
              </motion.p>

              {/* Badges de categorías con hover mejorado */}
              <motion.div
                className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { emoji: '🎈', text: 'Iniciación' },
                  { emoji: '🤝', text: 'Mixta' },
                  { emoji: '🏆', text: 'Competitiva' },
                  { emoji: '🏐', text: 'TC' }
                ].map((cat, idx) => (
                  <motion.div
                    key={idx}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full font-bebas text-xl md:text-2xl text-white cursor-pointer"
                    whileHover={{
                      scale: 1.15,
                      y: -10,
                      backgroundColor: 'rgba(255, 102, 193, 0.2)',
                      borderColor: 'rgba(255, 102, 193, 0.5)',
                    }}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <span className="text-2xl mr-2">{cat.emoji}</span>
                    {cat.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* Flecha indicadora más grande */}
              <motion.div
                className="mt-16"
                animate={{
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 mx-auto border-b-[6px] border-r-[6px] border-primary rotate-45 rounded-br-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========== CATEGORIAS SECTION CON EFECTO DE SLIDE UP ========== */}
      <motion.div
        className="relative z-20 -mt-[100vh]"
        initial={{ y: 0 }}
        style={{
          y: useTransform(stickyProgress, [0, 0.5, 1], [0, 0, 0])
        }}
      >
        <Categorias />
      </motion.div>

      {/* ========== INSTAGRAM FEED ========== */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <InstagramFeed />
      </motion.div>

      {/* ========== CONTACTO ========== */}
      <section
        id="contacto"
        ref={contactRef}
        className="relative z-20 py-20 md:py-32 bg-gradient-to-b from-black via-black to-black text-white overflow-hidden"
      >
        {/* Grid de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255, 102, 193, 0.3) 80px, rgba(255, 102, 193, 0.3) 81px),
                repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255, 102, 193, 0.3) 80px, rgba(255, 102, 193, 0.3) 81px)
              `
            }}
          />
        </div>

        {/* Gradientes animados */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Partículas flotantes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-open-sans text-sm text-white font-semibold">
                Contáctanos
              </span>
            </motion.div>

            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Tu Primera Clase
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                Es Gratis
              </span>
            </h2>
            <p className="font-open-sans text-xl text-gray-300">
              Sin compromiso · Inscripciones abiertas · Todas las edades
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20"
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl" />

              <div className="space-y-6 mb-8 relative z-10">
                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/cvb.atl.coventry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Instagram size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-open-sans text-sm text-gray-400">Síguenos en Instagram</p>
                    <p className="font-bebas text-2xl text-white group-hover:text-primary transition-colors">
                      @cvb.atl.coventry
                    </p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/56954243318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-white/10 transition-all group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-open-sans text-sm text-gray-400">Escríbenos por WhatsApp</p>
                    <p className="font-bebas text-2xl text-white group-hover:text-green-400 transition-colors">
                      +569 5424 3318
                    </p>
                  </div>
                </motion.a>
              </div>

              <motion.a
                href="https://wa.me/56954243318?text=Hola! Me interesa la clase de prueba gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-2xl md:text-3xl py-5 rounded-full text-center shadow-[0_0_30px_rgba(255,102,193,0.4)] transition-all overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,102,193,0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Reservar Mi Clase Gratis</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              <p className="text-center font-open-sans text-sm text-gray-400 mt-4">
                Respuesta inmediata · Inscripciones abiertas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <motion.footer
        ref={footerRef}
        className="relative z-20 bg-black text-white py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[200px] bg-primary/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={Logo}
              alt="Club Atlético Coventry"
              className="w-32 mx-auto mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.p
              className="font-bebas text-3xl mb-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Club Atlético Coventry
            </motion.p>

            <motion.p
              className="font-open-sans text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Formando campeones desde 2015
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="https://instagram.com/cvb.atl.coventry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 border border-white/10 rounded-xl flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>

              <motion.a
                href="https://wa.me/56954243318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-green-500 border border-white/10 rounded-xl flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.a>
            </motion.div>

            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className="font-open-sans text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              © 2025 Club Atlético Coventry · Todos los derechos reservados
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>

      <Chatbot />
    </div>
  );
}

import React from 'react'
import ManchaRosa from '../Assets/mancha_rosa_brillante.png'
import ManchaNegra from '../Assets/mancha_negra_final.png'
import Logo from '../Assets/logo_club_circular.png'
import { motion } from 'framer-motion'

function HeroHome() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
         
            {/* Logo centrado - mejorado con efectos */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <img
                    src={Logo}
                    alt="Club Atlético Coventry Logo"
                    className="w-[350px] sm:w-[450px] md:w-[600px] lg:w-[600px] xl:w-[900px] 2xl:w-[1200px] opacity-[0.12] md:opacity-[0.1] object-contain"
                    style={{
                        filter: 'brightness(1.2) contrast(1.1)',
                    }}
                />
            </motion.div>

            {/* Contenido principal */}
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h1 className="font-bebas text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] uppercase leading-[0.9] sm:leading-none tracking-tight drop-shadow-2xl px-2">
                        Club Atletico Coventry
                    </h1>

                    <h2 className="font-open-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6 sm:mt-8 text-primary drop-shadow-lg px-2">
                        ¡Inscripciones Abiertas!
                    </h2>

                    <p className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-10 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
                        Donde cada saque es una nueva oportunidad y cada punto
                        se celebra en equipo. Únete a nuestra familia voleibolista
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10 sm:mt-14 flex flex-col items-center gap-4 sm:gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.a
                        href="#contacto"
                        className="relative overflow-hidden bg-gradient-to-r from-[#ff66c1] to-[#ff4db3] text-white font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full shadow-lg shadow-[#ff66c1]/40 transition-shadow duration-150 group w-auto max-w-[90%] sm:max-w-none"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Efecto de brillo al hacer hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        
                        <span className="relative z-10 whitespace-nowrap">
                            Reserva tu Clase de Prueba
                        </span>
                        
                        {/* Borde animado */}
                        <span className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/30 transition-all duration-150" />
                    </motion.a>

                    <p className="font-open-sans text-xs sm:text-sm md:text-base text-gray-400">
                        Gratis · Sin compromiso
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroHome

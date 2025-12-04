import React from 'react'
import ManchaRosa from '../Assets/mancha_rosa_brillante.png'
import ManchaNegra from '../Assets/mancha_negra_final.png'
import Logo from '../Assets/logo_club_circular.png'
import { motion } from 'framer-motion'

function HeroHome() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Manchas decorativas */}
            <motion.img
                src={ManchaRosa}
                alt=""
                className="absolute -top-80 -right-36 w-64 md:w-80 lg:w-2/5  opacity-90"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ duration: 1 }}
            />

            <motion.img
                src={ManchaNegra}
                alt=""
                className="absolute -bottom-60 -left-72 w-48 md:w-2/5 opacity-80"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Logo */}
            <motion.img
                src={Logo}
                alt="Club Atlético Coventry"
                className="absolute top-6 left-6 md:top-8 md:left-8 w-20 md:w-28 lg:w-32 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Contenido principal */}
            <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h1 className="font-bebas text-6xl md:text-9xl lg:text-[5rem] 2xl:text-[10rem] uppercase leading-none tracking-tight">
                        Club Atletico Coventry
                    </h1>

                    <h2 className="font-open-sans text-2xl md:text-3xl lg:text-4xl font-semibold mt-6 text-gray-800">
                        ¡Inscripciones Abiertas!
                    </h2>

                    <p className="font-open-sans text-lg md:text-xl mt-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Donde cada saque es una nueva oportunidad y cada punto<br className="hidden md:block" />
                        se celebra en equipo. Únete a nuestra familia voleibolista
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.a
                        href="#contacto"
                        className="bg-[#ff66c1] hover:bg-[#ff4db3] text-white font-bebas text-2xl md:text-3xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Reserva tu Clase de Prueba
                    </motion.a>

                    <p className="font-open-sans text-sm text-gray-500">
                        Gratis · Sin compromiso · Comienza en Diciembre
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroHome
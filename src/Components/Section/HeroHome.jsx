import React from 'react'
import Logo from '../Assets/logo_club_circular.png'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Users, Trophy, Zap } from 'lucide-react'

function HeroHome() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-black to-black">
            {/* Grid de fondo animado */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 102, 193, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 102, 193, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: 'center center'
                }} />
            </div>

            {/* Gradientes de color animados */}
            <motion.div
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Partículas energéticas flotantes */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Logo con efecto glassmorphism */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="relative">
                    <motion.img
                        src={Logo}
                        alt="Club Atlético Coventry Logo"
                        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] opacity-[0.15] object-contain"
                        animate={{
                            rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    {/* Anillo de energía alrededor del logo */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                </div>
            </motion.div>

            {/* Contenido principal */}
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge superior */}
                        <motion.div
                            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="font-open-sans text-sm text-white font-semibold">
                                Temporada 2026 - Inscripciones Abiertas
                            </span>
                        </motion.div>

                        {/* Título principal con efecto de gradiente */}
                        <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] tracking-tight mb-6">
                            <motion.span
                                className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Club Atlético
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Coventry
                            </motion.span>
                        </h1>

                        {/* Subtítulo con efecto neón */}
                        <motion.h2
                            className="font-open-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <span className="relative inline-block">
                                <span className="relative z-10 text-white">
                                    Donde cada punto cuenta
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-primary blur-xl opacity-50"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </span>
                        </motion.h2>

                        {/* Descripción */}
                        <motion.p
                            className="font-open-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            Únete a una comunidad de deportistas apasionados. 
                            Entrenamiento profesional, ambiente familiar y competencias de alto nivel.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <motion.a
                                href="#contacto"
                                className="group relative overflow-hidden bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-xl md:text-2xl px-8 md:px-10 py-4 md:py-5 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(255,102,193,0.4)] transition-all duration-300"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,102,193,0.6)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Clase Gratis</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                
                                {/* Efecto de onda */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.a>

                            <motion.a
                                href="#categorias"
                                className="group font-bebas text-lg md:text-xl text-white px-8 py-4 rounded-full border-2 border-white/20 hover:border-primary/50 backdrop-blur-sm flex items-center gap-2 transition-all duration-300"
                                whileHover={{ scale: 1.05, borderColor: "rgba(255,102,193,0.5)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Ver Categorías
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>

                        {/* Stats cards - OPCIÓN 3 */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            {[
                                { icon: Users, value: '8', label: 'Categorías' },
                                { icon: Zap, value: '15+', label: 'Horas/Semana' },
                                { icon: Trophy, value: '4', label: 'Ligas Competitivas' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ y: -5, borderColor: "rgba(255,102,193,0.3)" }}
                                >
                                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <div className="font-bebas text-2xl md:text-3xl text-white">{stat.value}</div>
                                    <div className="font-open-sans text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator animado */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
            >
                <span className="font-open-sans text-xs text-gray-500 uppercase tracking-widest">Desliza</span>
                <motion.div
                    className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroHome

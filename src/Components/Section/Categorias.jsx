import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Trophy, Calendar, Clock, Award, Zap, ArrowRight, Sparkles } from 'lucide-react';

function Categorias() {
    const [activeRama, setActiveRama] = useState(0);
    const [activeCategoria, setActiveCategoria] = useState(0);

    const ramas = [
        {
            nombre: "Iniciación",
            descripcion: "Primeros pasos en el voleibol",
            categorias: [
                {
                    nombre: "Mini Voley",
                    edad: "6 a 10 años",
                    descripcion: "Introducción al voleibol de forma lúdica y divertida. Desarrollo de habilidades motoras básicas y trabajo en equipo.",
                    horarios: [
                        { dia: "Lunes", hora: "16:00 - 17:30" },
                        { dia: "Miércoles", hora: "16:00 - 17:30" }
                    ],
                    nivel: "Iniciación",
                    icono: "🎈",
                    ligas: [],
                    fotos: [
                        "/fotos/mini-voley-1.jpg",
                        "/fotos/mini-voley-2.jpg"
                    ]
                },
                {
                    nombre: "Sub 14",
                    edad: "11 a 13 años",
                    descripcion: "Perfeccionamiento de técnicas fundamentales. Introducción a estrategias de juego y participación en torneos locales.",
                    horarios: [
                        { dia: "Martes", hora: "17:00 - 18:30" },
                        { dia: "Jueves", hora: "17:00 - 18:30" }
                    ],
                    nivel: "Iniciación",
                    icono: "⭐",
                    ligas: ["Liga Municipal Sub 14"],
                    fotos: [
                        "/fotos/sub14-1.jpg",
                        "/fotos/sub14-2.jpg"
                    ]
                }
            ]
        },
        {
            nombre: "Intermedia-Mixta",
            descripcion: "Categoría mixta para todos",
            categorias: [
                {
                    nombre: "Intermedia Mixta",
                    edad: "+18 años",
                    descripcion: "Categoría inclusiva para varones y mujeres de todas las edades. Ambiente relajado y social, perfecto para quienes buscan disfrutar el voleibol sin presión competitiva. Ideal para principiantes adultos o jugadores recreativos.",
                    horarios: [
                        { dia: "Miércoles", hora: "19:30 - 21:30" },
                        { dia: "Jueves", hora: "19:30 - 21:30" }
                    ],
                    nivel: "Intermedio Recreativo",
                    icono: "🤝",
                    ligas: [
                        "Torneo Interno Mixto",
                        "Copa Recreativa Coventry"
                    ],
                    fotos: [
                        "/fotos/mixta-1.jpg",
                        "/fotos/mixta-2.jpg"
                    ]
                }
            ]
        },
        {
            nombre: "Intermedia-Avanzada",
            descripcion: "Categoria Competitiva",
            categorias: [
                {
                    nombre: "Sub 16 y 18 Damas",
                    edad: "14 a 17 años",
                    descripcion: "Entrenamiento técnico avanzado con énfasis en tácticas de juego. Preparación para competencias federadas.",
                    horarios: [
                        { dia: "Lunes", hora: "18:30 - 20:30" },
                        { dia: "Miércoles", hora: "18:30 - 20:30" },
                        { dia: "Viernes", hora: "18:30 - 20:30" }
                    ],
                    nivel: "Avanzado",
                    icono: "🔥",
                    ligas: [
                        "Liga Federada Santiago Sub 16",
                        "Liga Federada Santiago Sub 18"
                    ],
                    fotos: [
                        "/fotos/sub16-18-1.jpg",
                        "/fotos/sub16-18-2.jpg"
                    ]
                },
                {
                    nombre: "Avanzada Hombres",
                    edad: "+18 años",
                    descripcion: "Alto nivel competitivo con entrenamiento intensivo. Participación en ligas y torneos profesionales.",
                    horarios: [
                        { dia: "Sábado", hora: "15:00 - 16:50" },
                        { dia: "Domingo", hora: "15:40 - 17:35" }
                    ],
                    nivel: "Profesional",
                    icono: "💪",
                    ligas: [
                        "Liga LIVOCOR",
                        "Liga Palestina"
                    ],
                    fotos: [
                        "/fotos/avanzada-hombres-1.jpg",
                        "/fotos/avanzada-hombres-2.jpg"
                    ]
                },
                {
                    nombre: "Sub 20 Hombres",
                    edad: "18 a 19 años",
                    descripcion: "Transición al voleibol adulto con preparación física especializada y táctica avanzada.",
                    horarios: [
                        { dia: "Lunes", hora: "19:00 - 21:00" },
                        { dia: "Miércoles", hora: "19:00 - 21:00" },
                        { dia: "Viernes", hora: "19:00 - 21:00" }
                    ],
                    nivel: "Competitivo",
                    icono: "⚡",
                    ligas: [
                        "Liga Palestina",
                        "Liga LIVOCOR"
                    ],
                    fotos: [
                        "/fotos/sub20-1.jpg",
                        "/fotos/sub20-2.jpg"
                    ]
                }
            ]
        },
        {
            nombre: "Ramas TC",
            descripcion: "Categoria Adulta",
            categorias: [
                {
                    nombre: "TC Varones",
                    edad: "+18 años",
                    descripcion: "Tercera categoría masculina. Espacio para desarrollo técnico continuo y participación en campeonatos.",
                    horarios: [
                        { dia: "Martes", hora: "19:30 - 21:30" },
                        { dia: "Jueves", hora: "19:30 - 21:30" }
                    ],
                    nivel: "Intermedio-Avanzado",
                    icono: "🏐",
                    ligas: [
                        "Liga TC Metropolitana",
                        "Copa Coventry TC"
                    ],
                    fotos: [
                        "/fotos/tc-varones-1.jpg",
                        "/fotos/tc-varones-2.jpg"
                    ]
                },
                {
                    nombre: "TC Damas",
                    edad: "+18 años",
                    descripcion: "Tercera categoría femenina. Ambiente competitivo con enfoque en trabajo en equipo y crecimiento personal.",
                    horarios: [
                        { dia: "Miércoles", hora: "19:30 - 21:30" },
                        { dia: "Viernes", hora: "19:30 - 21:30" }
                    ],
                    nivel: "Intermedio-Avanzado",
                    icono: "✨",
                    ligas: [
                        "Liga TC Femenina Santiago",
                        "Torneo Regional TC"
                    ],
                    fotos: [
                        "/fotos/tc-damas-1.jpg",
                        "/fotos/tc-damas-2.jpg"
                    ]
                }
            ]
        }
    ];

    const currentCategoria = ramas[activeRama].categorias[activeCategoria];

    return (
        <section className='relative bg-white w-full min-h-screen py-20 md:py-32 overflow-hidden' id="categorias">
            {/* Patrón de red sutil */}
            <div className="absolute inset-0 opacity-[0.15]">
                <div 
                    className="w-full h-full" 
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 80px, #ff66c1 80px, #ff66c1 81px),
                            repeating-linear-gradient(90deg, transparent, transparent 80px, #ff66c1 80px, #ff66c1 81px)
                        `
                    }}
                />
            </div>

            {/* Gradientes decorativos suaves */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px]" />

            {/* Partículas flotantes */}
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
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Partículas adicionales más pequeñas */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={`small-${i}`}
                    className="absolute w-4 h-4 bg-pink-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: "easeInOut"
                    }}
                />
            ))}

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-open-sans text-sm text-gray-800 font-semibold">
                            Encuentra Tu Equipo
                        </span>
                    </motion.div>

                    <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
                            Nuestras
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
                            Categorías
                        </span>
                    </h2>
                    <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Desde iniciación hasta nivel competitivo. Encuentra tu lugar en la cancha.
                    </p>
                </motion.div>

                {/* Tabs de Ramas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        {ramas.map((rama, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setActiveRama(index);
                                    setActiveCategoria(0);
                                }}
                                className={`
                                    group relative font-bebas text-lg md:text-xl px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden
                                    ${activeRama === index
                                        ? 'text-white shadow-xl'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }
                                `}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeRama === index && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600"
                                            layoutId="activeRamaBg"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                        <motion.div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'radial-gradient(circle at center, rgba(255,102,193,0.4) 0%, transparent 70%)',
                                                filter: 'blur(20px)'
                                            }}
                                            animate={{ 
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </>
                                )}
                                <div className="relative z-10 text-center">
                                    <div className="text-2xl mb-1">{index === 0 ? '🎈' : index === 1 ? '🤝' : index === 2 ? '🏆' : '🏐'}</div>
                                    <div>{rama.nombre}</div>
                                    <div className="text-[10px] font-open-sans opacity-70">{rama.descripcion}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Tabs de Categorías */}
                <motion.div
                    key={activeRama}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {ramas[activeRama].categorias.map((cat, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveCategoria(index)}
                                className={`
                                    relative font-bebas text-base md:text-lg px-6 py-3 rounded-full transition-all duration-300 overflow-hidden
                                    ${activeCategoria === index
                                        ? 'text-white shadow-lg'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }
                                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeCategoria === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600"
                                        layoutId="activeCategoriaBg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat.icono} {cat.nombre}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeRama}-${activeCategoria}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
                            {/* Gradiente decorativo sutil */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
                            
                            {/* Línea decorativa */}
                            <motion.div 
                                className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-primary to-pink-600 rounded-r-full"
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                            />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <motion.span 
                                                className="text-6xl"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {currentCategoria.icono}
                                            </motion.span>
                                            <h3 className="font-bebas text-4xl md:text-5xl text-gray-900 leading-none">
                                                {currentCategoria.nombre}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <span className="bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-sm px-5 py-2 rounded-full shadow-lg">
                                                {currentCategoria.edad}
                                            </span>
                                            <span className="bg-gray-100 text-gray-900 font-bebas text-sm px-5 py-2 rounded-full border border-gray-200">
                                                {currentCategoria.nivel}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p className="font-open-sans text-lg text-gray-700 mb-10 leading-relaxed bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                    {currentCategoria.descripcion}
                                </p>

                                {/* Grid de Info */}
                                <div className="grid md:grid-cols-2 gap-6 mb-10">
                                    {/* Horarios */}
                                    <motion.div
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <Calendar className="text-white" size={24} />
                                            </div>
                                            <h4 className="font-bebas text-2xl text-gray-900">Horarios</h4>
                                        </div>
                                        <div className="space-y-3">
                                            {currentCategoria.horarios.map((horario, idx) => (
                                                <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                                        <span className="font-bebas text-lg text-gray-900">{horario.dia}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="text-gray-500" size={16} />
                                                        <span className="font-open-sans text-sm text-gray-700 font-semibold">
                                                            {horario.hora}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Ligas */}
                                    <motion.div
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <Trophy className="text-white" size={24} />
                                            </div>
                                            <h4 className="font-bebas text-2xl text-gray-900">Competencias</h4>
                                        </div>
                                        {currentCategoria.ligas.length > 0 ? (
                                            <ul className="font-open-sans text-sm text-gray-700 space-y-3">
                                                {currentCategoria.ligas.map((liga, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                                        <Award className="text-primary flex-shrink-0 mt-0.5" size={18} />
                                                        <span>{liga}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="font-open-sans text-sm text-gray-500 italic bg-white rounded-xl p-4 border border-gray-100">
                                                Enfoque recreativo y formativo
                                            </p>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Galería */}
                                {currentCategoria.fotos.length > 0 && (
                                    <div className="mb-10">
                                        <h4 className="font-bebas text-3xl text-gray-900 mb-6 flex items-center gap-3">
                                            <Sparkles className="text-primary" size={28} />
                                            Galería
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {currentCategoria.fotos.map((foto, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-primary/50 transition-all"
                                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,102,193,0.2)" }}
                                                >
                                                    <img
                                                        src={foto}
                                                        alt={`${currentCategoria.nombre} ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/300x300/ff66c1/ffffff?text=' + currentCategoria.icono;
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.a
                                        href="#contacto"
                                        className="group relative overflow-hidden bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-xl px-10 py-5 rounded-full text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10">Inscribirse Ahora</span>
                                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.a>

                                    <motion.a
                                        href="#contacto"
                                        className="group font-bebas text-xl px-10 py-5 rounded-full text-center border-2 border-gray-300 hover:border-primary text-gray-900 hover:text-primary flex items-center justify-center gap-3 transition-all"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Más Información
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* CTA final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-black to-black rounded-3xl p-10 md:p-12 overflow-hidden text-center shadow-2xl">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <div className="relative z-10">
                            <Users className="text-primary mx-auto mb-6" size={56} />
                            <h3 className="font-bebas text-4xl text-white mb-4">
                                ¿No sabes qué categoría elegir?
                            </h3>
                            <p className="font-open-sans text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                Nuestro equipo te ayudará a encontrar el grupo perfecto según tu edad, nivel y objetivos
                            </p>
                            <motion.a
                                href="#contacto"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Hablar con un Asesor</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Categorias;

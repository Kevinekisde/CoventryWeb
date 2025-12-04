import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Trophy, Calendar, Clock, Award } from 'lucide-react';

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
        <div className='bg-black w-full min-h-screen py-16 md:py-24 relative overflow-hidden'>
            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff66c1] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4">
                        Nuestras Categorías
                    </h2>
                    <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Encuentra el grupo perfecto para tu edad y nivel.<br className="hidden md:block" />
                        Todos son bienvenidos en nuestra familia voleibolista.
                    </p>
                </motion.div>

                {/* Tabs de Ramas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {ramas.map((rama, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setActiveRama(index);
                                    setActiveCategoria(0);
                                }}
                                className={`
                  font-bebas text-xl md:text-2xl px-8 py-4 rounded-2xl transition-all duration-300
                  ${activeRama === index
                                        ? 'bg-primary text-white shadow-xl'
                                        : 'bg-white text-black hover:bg-primary hover:text-white'
                                    }
                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-center">
                                    <div className="text-2xl mb-1">{index === 0 ? '🎈' : index === 1 ? '🤝' : index === 2 ? '🏆' : '🏐'}</div>
                                    <div>{rama.nombre}</div>
                                    <div className="text-xs font-open-sans opacity-70">{rama.descripcion}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Tabs de Categorías dentro de la rama */}
                <motion.div
                    key={activeRama}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {ramas[activeRama].categorias.map((cat, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveCategoria(index)}
                                className={`
                  font-bebas text-base md:text-lg px-5 py-3 rounded-full transition-all duration-300
                  ${activeCategoria === index
                                        ? 'bg-[#ff66c1] text-white shadow-lg shadow-[#ff66c1]/50'
                                        : 'bg-white text-black hover:bg-gray-200'
                                    }
                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat.icono} {cat.nombre}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeRama}-${activeCategoria}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Header de la categoría */}
                            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                                <div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-5xl">{currentCategoria.icono}</span>
                                        <h3 className="font-bebas text-4xl md:text-5xl text-black">
                                            {currentCategoria.nombre}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="bg-[#ff66c1] text-white font-bebas text-sm px-4 py-1 rounded-full">
                                            {currentCategoria.edad}
                                        </span>
                                        <span className="bg-black text-white font-bebas text-sm px-4 py-1 rounded-full">
                                            {currentCategoria.nivel}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Descripción */}
                            <p className="font-open-sans text-lg text-gray-700 mb-8 leading-relaxed">
                                {currentCategoria.descripcion}
                            </p>

                            {/* Grid de Info */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Horarios por día */}
                                <motion.div
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="text-[#ff66c1]" size={28} />
                                        <h4 className="font-bebas text-2xl text-black">Horarios</h4>
                                    </div>
                                    <div className="space-y-3">
                                        {currentCategoria.horarios.map((horario, idx) => (
                                            <div key={idx} className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <Calendar className="text-[#ff66c1]" size={20} />
                                                    <span className="font-bebas text-lg text-black">{horario.dia}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="text-gray-500" size={18} />
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
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Trophy className="text-[#ff66c1]" size={28} />
                                        <h4 className="font-bebas text-2xl text-black">Competencias</h4>
                                    </div>
                                    {currentCategoria.ligas.length > 0 ? (
                                        <ul className="font-open-sans text-sm text-gray-700 space-y-3">
                                            {currentCategoria.ligas.map((liga, idx) => (
                                                <li key={idx} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm">
                                                    <Award className="text-[#ff66c1] flex-shrink-0 mt-0.5" size={18} />
                                                    <span>{liga}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="font-open-sans text-sm text-gray-500 italic bg-white rounded-lg p-4">
                                            Enfoque recreativo y formativo
                                        </p>
                                    )}
                                </motion.div>
                            </div>

                            {/* Galería de fotos */}
                            {currentCategoria.fotos.length > 0 && (
                                <div className="mb-8">
                                    <h4 className="font-bebas text-3xl text-black mb-4 flex items-center gap-2">
                                        📸 Galería
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {currentCategoria.fotos.map((foto, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="aspect-square bg-gray-200 rounded-2xl overflow-hidden"
                                                whileHover={{ scale: 1.05 }}
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

                            {/* CTA */}
                            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="#contacto"
                                    className="bg-[#ff66c1] hover:bg-[#ff4db3] text-white font-bebas text-xl px-8 py-4 rounded-full text-center shadow-lg transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Inscribirse en esta Categoría
                                </motion.a>

                                <motion.a
                                    href="#contacto"
                                    className="bg-black hover:bg-gray-800 text-white font-bebas text-xl px-8 py-4 rounded-full text-center transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Más Información
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Info adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
                        <Users className="text-[#ff66c1] mx-auto mb-4" size={48} />
                        <h3 className="font-bebas text-3xl text-black mb-3">
                            ¿No sabes qué categoría elegir?
                        </h3>
                        <p className="font-open-sans text-gray-700 mb-6">
                            Contáctanos y te ayudaremos a encontrar el grupo ideal para ti
                        </p>
                        <motion.a
                            href="#contacto"
                            className="inline-block bg-black hover:bg-gray-800 text-white font-bebas text-xl px-8 py-3 rounded-full transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hablar con un Asesor
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Categorias;

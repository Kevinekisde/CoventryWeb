import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react' // Necesitarás instalar lucide-react

function MisionVision() {
    return (
        <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
            {/* Patrón de fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="w-full h-full" 
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                                         radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Círculos decorativos */}
            <motion.div
                className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Título de la sección */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-4">
                        Nuestra Esencia
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Grid de Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Misión */}
                    <motion.div
                        className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-bebas text-3xl lg:text-4xl text-gray-900 uppercase">
                                Nuestra Misión
                            </h3>
                        </div>

                        <p className="font-open-sans text-gray-700 leading-relaxed text-base lg:text-lg">
                            Formar deportistas integrales a través del voleibol, promoviendo valores 
                            como el trabajo en equipo, la disciplina y el respeto. Nos comprometemos 
                            a ofrecer un espacio inclusivo donde cada jugador pueda desarrollar su 
                            máximo potencial tanto dentro como fuera de la cancha.
                        </p>

                        {/* Iconos de valores */}
                        <div className="flex gap-4 mt-6">
                            <div className="flex items-center gap-2 text-primary">
                                <Users className="w-5 h-5" />
                                <span className="font-open-sans text-sm font-semibold">Equipo</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <Heart className="w-5 h-5" />
                                <span className="font-open-sans text-sm font-semibold">Pasión</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                <Eye className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-bebas text-3xl lg:text-4xl text-gray-900 uppercase">
                                Nuestra Visión
                            </h3>
                        </div>

                        <p className="font-open-sans text-gray-700 leading-relaxed text-base lg:text-lg">
                            Ser reconocidos como el club de voleibol referente en la formación de 
                            talentos deportivos y humanos, creando una comunidad donde la excelencia 
                            deportiva se une con el crecimiento personal. Aspiramos a inspirar a 
                            futuras generaciones a vivir el deporte con pasión y dedicación.
                        </p>

                        {/* Estadísticas rápidas */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-primary/10 rounded-xl p-3 text-center">
                                <div className="font-bebas text-2xl text-primary">100%</div>
                                <div className="font-open-sans text-xs text-gray-600">Compromiso</div>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-3 text-center">
                                <div className="font-bebas text-2xl text-primary">+10</div>
                                <div className="font-open-sans text-xs text-gray-600">Años</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Frase motivacional */}
                <motion.div
                    className="text-center mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="font-open-sans text-white/90 text-lg md:text-xl lg:text-2xl italic max-w-3xl mx-auto">
                        "Cada punto comienza con un saque, cada campeón comienza con un sueño"
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MisionVision

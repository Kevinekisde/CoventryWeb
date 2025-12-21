import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Zap, Shield, TrendingUp, Users, Heart } from 'lucide-react'

function MisionVision() {
    return (
        <section className="relative bg-gradient-to-b from-black via-black to-black py-20 md:py-32 overflow-hidden">
            {/* Grid de voleibol en el fondo */}
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

            {/* Partículas de energía flotantes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
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
                {/* Header con badge */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-open-sans text-sm text-white font-semibold">
                            Nuestros Valores
                        </span>
                    </motion.div>

                    <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                            Nuestra
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                            Esencia
                        </span>
                    </h2>
                    <p className="font-open-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Los principios que guían cada entrenamiento y cada victoria
                    </p>
                </motion.div>

                {/* Grid de Misión y Visión - Diseño deportivo */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
                    {/* Misión */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Línea decorativa vertical */}
                        <motion.div 
                            className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-primary to-pink-600"
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div 
                                    className="w-16 h-16 bg-gradient-to-br from-primary to-pink-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,102,193,0.3)]"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </motion.div>
                                <div>
                                    <h3 className="font-bebas text-3xl lg:text-4xl text-white uppercase leading-none">
                                        Nuestra Misión
                                    </h3>
                                    <div className="h-1 w-12 bg-primary mt-2 rounded-full" />
                                </div>
                            </div>

                            <p className="font-open-sans text-gray-300 leading-relaxed text-base lg:text-lg mb-8">
                                Formar deportistas integrales a través del voleibol, promoviendo valores 
                                como el <span className="text-primary font-semibold">trabajo en equipo</span>, la <span className="text-primary font-semibold">disciplina</span> y el <span className="text-primary font-semibold">respeto</span>. Nos comprometemos 
                                a ofrecer un espacio inclusivo donde cada jugador pueda desarrollar su 
                                máximo potencial tanto dentro como fuera de la cancha.
                            </p>

                            {/* Valores con iconos mejorados */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Users, label: 'Trabajo en Equipo' },
                                    { icon: Heart, label: 'Pasión' },
                                    { icon: Shield, label: 'Disciplina' },
                                    { icon: Award, label: 'Excelencia' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10 hover:border-primary/30 transition-colors"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + idx * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="font-open-sans text-xs text-gray-300 font-semibold">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-primary/10 to-pink-600/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Efecto de resplandor */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        
                        {/* Línea decorativa vertical */}
                        <motion.div 
                            className="absolute right-0 top-0 w-1 h-0 bg-gradient-to-b from-pink-600 to-primary"
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div 
                                    className="w-16 h-16 bg-gradient-to-br from-pink-600 to-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,102,193,0.3)]"
                                    whileHover={{ rotate: -360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Eye className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </motion.div>
                                <div>
                                    <h3 className="font-bebas text-3xl lg:text-4xl text-white uppercase leading-none">
                                        Nuestra Visión
                                    </h3>
                                    <div className="h-1 w-12 bg-primary mt-2 rounded-full" />
                                </div>
                            </div>

                            <p className="font-open-sans text-gray-300 leading-relaxed text-base lg:text-lg mb-8">
                                Ser reconocidos como el <span className="text-primary font-semibold">club de voleibol referente</span> en la formación de 
                                talentos deportivos y humanos, creando una comunidad donde la excelencia 
                                deportiva se une con el crecimiento personal. Aspiramos a inspirar a 
                                futuras generaciones a vivir el deporte con <span className="text-primary font-semibold">pasión y dedicación</span>.
                            </p>

                            {/* Stats con diseño mejorado */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { value: '100%', label: 'Compromiso' },
                                    { value: '10+', label: 'Años' },
                                    { value: '8', label: 'Categorías' }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-primary/30 transition-colors overflow-hidden group/stat"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9 + idx * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity"
                                        />
                                        <div className="relative z-10">
                                            <div className="font-bebas text-3xl text-primary mb-1">{stat.value}</div>
                                            <div className="font-open-sans text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Frase motivacional mejorada */}
                <motion.div
                    className="relative max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
                        {/* Efecto de brillo */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <div className="relative z-10 text-center">
                            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
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

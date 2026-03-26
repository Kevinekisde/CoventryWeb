import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Zap, ArrowRight } from 'lucide-react'
import { InstagramEmbed } from 'react-social-media-embed'

function InstagramFeed() {
    // Array de URLs de tus posts de Instagram
    const instagramUrls = [
        'https://www.instagram.com/cvb.atl.coventry/reel/DSYVKRWCWGj/?hl=es',
        'https://www.instagram.com/cvb.atl.coventry/p/DSLhlXmiTxY/?hl=es',
        'https://www.instagram.com/cvb.atl.coventry/reel/DSJQQ0Gid4-/?hl=es',
        'https://www.instagram.com/cvb.atl.coventry/reel/DSBpP0hjRzT/?hl=es',
        'https://www.instagram.com/cvb.atl.coventry/p/DRtHPFHDTmL/?hl=es',
        'https://www.instagram.com/cvb.atl.coventry/p/DRBB-Guic2C/?hl=es',
    ]

    return (
        <>
            {/* Sección: Cómo Comenzar */}
            <section className="relative bg-gradient-to-b from-black via-black- to-black py-20 md:py-32 overflow-hidden">
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
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
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
                    className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[100px]"
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 md:mb-20"
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
                                Proceso Simple
                            </span>
                        </motion.div>

                        <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                                Comenzar Es
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                                Muy Fácil
                            </span>
                        </h2>
                        <p className="font-open-sans text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Tres simples pasos te separan de tu primera clase
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }}
                        >
                            {[
                                { num: '1', title: 'Contáctanos', desc: 'Escríbenos por WhatsApp o Instagram', grad: 'from-primary to-pink-600' },
                                { num: '2', title: 'Ven a Probar', desc: 'Tu primera clase es completamente gratis', grad: 'from-pink-600 to-primary' },
                                { num: '3', title: 'Únete', desc: 'Si te gusta, bienvenido a la familia', grad: 'from-primary to-pink-600' },
                            ].map((paso, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-colors text-center group overflow-hidden"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.75, rotate: idx % 2 === 0 ? -6 : 6 },
                                        visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 160, damping: 16 } },
                                    }}
                                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                                    <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-pink-600 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />

                                    <motion.div
                                        className={`relative w-24 h-24 bg-gradient-to-br ${paso.grad} rounded-2xl flex items-center justify-center mx-auto mb-6 font-bebas text-5xl shadow-[0_0_30px_rgba(255,102,193,0.4)] text-white`}
                                        whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {paso.num}
                                        {/* Anillo pulsante */}
                                        <motion.div
                                            className="absolute inset-0 border-2 border-primary rounded-2xl"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.5 }}
                                        />
                                    </motion.div>

                                    <h3 className="font-bebas text-3xl lg:text-4xl text-white mb-3">{paso.title}</h3>
                                    <p className="font-open-sans text-gray-300 leading-relaxed">{paso.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sección: Instagram Feed */}
            <section className="relative bg-gradient-to-b from-black via-black to-black py-20 md:py-32 overflow-hidden">
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
                    className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Partículas flotantes */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Encabezado */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge con icono de Instagram */}
                        <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2 mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-5 h-5 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center">
                                <Instagram className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-open-sans text-sm text-white font-semibold">
                                Síguenos en Redes
                            </span>
                        </motion.div>

                        <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                                Nuestro
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                Instagram
                            </span>
                        </h2>
                        <p className="font-open-sans text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Mantente al día con nuestras actividades, entrenamientos y logros
                        </p>
                    </motion.div>

                    {/* Grid de posts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
                        {instagramUrls.map((url, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,102,193,0.2)]">
                                    <InstagramEmbed
                                        url={url}
                                        width="100%"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.a
                            href="https://www.instagram.com/cvb.atl.coventry/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bebas text-xl md:text-2xl px-10 py-5 rounded-full shadow-[0_0_30px_rgba(255,102,193,0.4)] transition-all"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,102,193,0.6)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span>Ver más en Instagram</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default InstagramFeed

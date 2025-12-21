import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
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
        <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Encabezado */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-gray-900 uppercase tracking-tight">
                            Síguenos en Instagram
                        </h2>
                    </div>
                    <p className="font-open-sans text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Mantente al día con nuestras actividades, entrenamientos y logros
                    </p>
                </motion.div>

                {/* Grid de posts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {instagramUrls.map((url, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="w-full max-w-[400px]">
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
                    className="text-center mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="https://www.instagram.com/cvb.atl.coventry/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bebas text-xl md:text-2xl px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                        <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        <span>Ver más en Instagram</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default InstagramFeed

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: '¡Hola! 👋 Soy el asistente virtual del Club Atlético Coventry. ¿En qué puedo ayudarte?',
            sender: 'bot',
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // FAQ y respuestas con las categorías reales
    const faqData = {
        iniciacion: {
            keywords: ['iniciacion', 'niños', 'niño', 'principiante', 'mini', 'sub 14', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '12 años', '13 años'],
            response: '🎈 **Rama Iniciación:**\n\n**Mini Voley (6-10 años)**\n📅 Lunes y Miércoles 16:00-17:30\n💰 Introducción lúdica al voleibol\n\n**Sub 14 (11-13 años)**\n📅 Martes y Jueves 17:00-18:30\n🏆 Liga Municipal Sub 14\n\n¿Te gustaría más información sobre alguna categoría?'
        },
        mixta: {
            keywords: ['mixta', 'mixto', 'adultos', 'recreativo', 'social', 'intermedia mixta'],
            response: '🤝 **Intermedia Mixta (+18 años)**\n\nPerfecta para varones y mujeres de todas las edades.\n\n📅 Horarios:\n• Miércoles 19:30-21:30\n• Jueves 19:30-21:30\n\n🎯 Nivel: Intermedio Recreativo\n🏆 Torneo Interno Mixto\n\nAmbiente relajado y social, ideal para principiantes adultos. ¿Quieres agendar una clase de prueba?'
        },
        competitiva: {
            keywords: ['competitiva', 'avanzada', 'federada', 'sub 16', 'sub 18', 'sub 20', 'hombres', 'profesional'],
            response: '🔥 **Categorías Competitivas:**\n\n**Sub 16 y 18 Damas (14-17 años)**\n📅 L-M-V 18:30-20:30\n🏆 Liga Federada Santiago\n\n**Avanzada Hombres (+18)**\n📅 Sáb 15:00-16:50, Dom 15:40-17:35\n🏆 Liga LIVOCOR, Liga Palestina\n\n**Sub 20 Hombres (18-19)**\n📅 L-M-V 19:00-21:00\n🏆 Ligas competitivas\n\n¿Qué categoría te interesa?'
        },
        tc: {
            keywords: ['tercera', 'tc', 'tc varones', 'tc damas', 'tercera categoria'],
            response: '🏐 **Ramas TC (Tercera Categoría +18 años):**\n\n**TC Varones**\n📅 Martes y Jueves 19:30-21:30\n🎯 Nivel: Intermedio-Avanzado\n🏆 Liga TC Metropolitana\n\n**TC Damas**\n📅 Miércoles y Viernes 19:30-21:30\n🎯 Nivel: Intermedio-Avanzado\n🏆 Liga TC Femenina Santiago\n\nEspacio para desarrollo técnico continuo. ¿Te interesa inscribirte?'
        },
        horarios: {
            keywords: ['horarios', 'horario', 'hora', 'cuando', 'entreno', 'practica', 'dias'],
            response: '⏰ **Horarios por Categoría:**\n\n🎈 **Iniciación:**\n• Mini Voley: L-M 16:00-17:30\n• Sub 14: Ma-J 17:00-18:30\n\n🤝 **Mixta:** Mi-J 19:30-21:30\n\n🏆 **Competitiva:**\n• Sub 16/18 Damas: L-M-V 18:30-20:30\n• Avanzada Hombres: S-D tarde\n• Sub 20: L-M-V 19:00-21:00\n\n🏐 **TC:** Ma-J o Mi-V 19:30-21:30\n\n¿Qué categoría te interesa?'
        },
        precios: {
            keywords: ['precio', 'costo', 'cuanto', 'pago', 'mensualidad', 'inscripcion', 'valor'],
            response: '💰 **Información de Precios:**\n\nPara conocer nuestras mensualidades y promociones vigentes, te invitamos a contactarnos directamente:\n\n📞 WhatsApp: +56 9 1234 5678\n📧 Email: info@clubcoventry.cl\n\n¡Tenemos descuentos especiales para hermanos y planes familiares!\n\n¿Quieres que te contactemos?'
        },
        categorias: {
            keywords: ['categoria', 'categorias', 'edad', 'edades', 'equipos', 'ramas'],
            response: '🏐 **Nuestras Categorías:**\n\n🎈 **Iniciación** (6-13 años)\n• Mini Voley y Sub 14\n\n🤝 **Intermedia Mixta** (+18)\n• Recreativo para todos\n\n🔥 **Intermedia-Avanzada**\n• Sub 16/18 Damas\n• Avanzada Hombres\n• Sub 20 Hombres\n\n🏐 **TC** (+18)\n• TC Varones y TC Damas\n\n¿En qué categoría estás interesado/a?'
        },
        ubicacion: {
            keywords: ['ubicacion', 'direccion', 'donde', 'lugar', 'cancha', 'gimnasio'],
            response: '📍 **Ubicación:**\n\nGimnasio Club Atlético Coventry\nSantiago, Chile\n\n🚇 Acceso: Metro cercano\n🚗 Estacionamiento disponible\n\nPara la dirección exacta y cómo llegar:\n📞 WhatsApp: +56 9 1234 5678\n\n¿Necesitas más indicaciones?'
        },
        inscripcion: {
            keywords: ['inscribir', 'inscripcion', 'unirse', 'registrar', 'clase prueba', 'prueba', 'empezar'],
            response: '📝 **¡Únete al Club!**\n\n✨ Pasos para inscribirte:\n\n1️⃣ Agenda tu clase de prueba GRATIS\n2️⃣ Conoce tu categoría ideal\n3️⃣ Completa tu inscripción\n\n📞 Contáctanos:\n• WhatsApp: +56 9 1234 5678\n• Email: info@clubcoventry.cl\n• Instagram: @clubatleticocoventry\n\n¿Quieres agendar tu clase ahora?'
        },
        experiencia: {
            keywords: ['principiante', 'nivel', 'experiencia', 'nunca', 'aprendo', 'empiezo', 'sin experiencia'],
            response: '🌟 **¡Todos son bienvenidos!**\n\nTenemos categorías para todos los niveles:\n\n👶 **Principiantes:**\n• Mini Voley (6-10 años)\n• Intermedia Mixta (adultos recreativos)\n\n⚡ **Con experiencia:**\n• Categorías competitivas\n• TC y Avanzadas\n\nNuestros entrenadores se adaptan a tu nivel y te ayudarán a mejorar paso a paso.\n\n¿Te gustaría agendar una clase de prueba?'
        },
        contacto: {
            keywords: ['contacto', 'telefono', 'email', 'correo', 'whatsapp', 'llamar', 'escribir'],
            response: '📞 **Contacta con nosotros:**\n\n• 📱 WhatsApp: +56 9 1234 5678\n• 📧 Email: info@clubcoventry.cl\n• 📸 Instagram: @clubatleticocoventry\n• ☎️ Teléfono: +56 2 9876 5432\n\n⏰ Horario de atención:\nLunes a Viernes: 15:00 - 21:00\nSábados: 09:00 - 14:00\n\n¿Prefieres que te contactemos nosotros?'
        },
        competencias: {
            keywords: ['competencias', 'torneos', 'ligas', 'campeonatos', 'federada', 'livocor', 'palestina'],
            response: '🏆 **Nuestras Competencias:**\n\n**Iniciación:**\n• Liga Municipal Sub 14\n\n**Competitivas:**\n• Liga Federada Santiago (Sub 16/18)\n• Liga LIVOCOR\n• Liga Palestina\n\n**TC:**\n• Liga TC Metropolitana\n• Liga TC Femenina Santiago\n\n**Mixta:**\n• Torneo Interno Mixto\n• Copa Recreativa Coventry\n\n¿Quieres competir? Te evaluamos para encontrar tu nivel ideal.'
        },
        damas: {
            keywords: ['mujeres', 'femenino', 'damas', 'niñas', 'chicas'],
            response: '👧 **Categorías Femeninas:**\n\n**Sub 16 y 18 Damas (14-17 años)**\n📅 L-M-V 18:30-20:30\n🏆 Liga Federada Santiago\n🎯 Nivel: Avanzado\n\n**TC Damas (+18 años)**\n📅 Mi-V 19:30-21:30\n🏆 Liga TC Femenina\n🎯 Nivel: Intermedio-Avanzado\n\n**Intermedia Mixta (+18 años)**\n📅 Mi-J 19:30-21:30\n🎯 Nivel: Recreativo\n\n¿Qué categoría te interesa?'
        },
        varones: {
            keywords: ['hombres', 'masculino', 'varones', 'niños', 'chicos'],
            response: '👦 **Categorías Masculinas:**\n\n**Avanzada Hombres (+18)**\n📅 Sáb 15:00-16:50, Dom 15:40-17:35\n🏆 Liga LIVOCOR, Liga Palestina\n🎯 Nivel: Profesional\n\n**Sub 20 Hombres (18-19)**\n📅 L-M-V 19:00-21:00\n🏆 Ligas competitivas\n🎯 Nivel: Competitivo\n\n**TC Varones (+18)**\n📅 Ma-J 19:30-21:30\n🏆 Liga TC Metropolitana\n🎯 Nivel: Intermedio-Avanzado\n\n¿Cuál se ajusta a tu nivel?'
        }
    }

    const quickReplies = [
        { id: 1, text: '🏐 Ver Categorías', action: 'categorias' },
        { id: 2, text: '⏰ Horarios', action: 'horarios' },
        { id: 3, text: '💰 Precios', action: 'precios' },
        { id: 4, text: '📝 Inscripción', action: 'inscripcion' },
        { id: 5, text: '📍 Ubicación', action: 'ubicacion' },
        { id: 6, text: '📞 Contacto', action: 'contacto' }
    ]

    // Scroll automático
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Focus en input
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
        }
    }, [isOpen])

    // Encontrar respuesta
    const findResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase()
        
        for (const [, data] of Object.entries(faqData)) {
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return data.response
            }
        }
        
        return '🤔 Disculpa, no entendí bien tu pregunta.\n\nPuedo ayudarte con:\n• 🏐 Categorías y edades\n• ⏰ Horarios de entrenamiento\n• 💰 Precios\n• 📝 Inscripciones\n• 🏆 Competencias\n• 📍 Ubicación\n• 📞 Contacto\n\n¿Sobre qué te gustaría saber?'
    }

    // Enviar mensaje
    const handleSendMessage = (messageText = null) => {
        const text = messageText || inputMessage.trim()
        
        if (!text) return

        const userMessage = {
            id: Date.now(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        }
        
        setMessages(prev => [...prev, userMessage])
        setInputMessage('')
        setIsTyping(true)

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: findResponse(text),
                sender: 'bot',
                timestamp: new Date()
            }
            
            setMessages(prev => [...prev, botResponse])
            setIsTyping(false)
        }, 1000)
    }

    const handleQuickReply = (action) => {
        handleSendMessage(action)
    }

    return (
        <>
            {/* Botón flotante */}
            <motion.button
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-gradient-to-br from-primary to-pink-600 hover:from-pink-600 hover:to-primary'
                }`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-7 h-7 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative"
                        >
                            <MessageCircle className="w-7 h-7 text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Ventana del chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-50 w-[95vw] sm:w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-pink-600 p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bebas text-xl text-white">Asistente Virtual</h3>
                                <p className="text-white/80 text-xs font-open-sans">Club Atlético Coventry</p>
                            </div>
                        </div>

                        {/* Mensajes */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`flex gap-2 ${
                                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {message.sender === 'bot' && (
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                    
                                    <div
                                        className={`max-w-[75%] px-4 py-3 rounded-2xl font-open-sans text-sm whitespace-pre-line ${
                                            message.sender === 'user'
                                                ? 'bg-primary text-white rounded-br-none'
                                                : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                                        }`}
                                    >
                                        {message.text}
                                    </div>

                                    {message.sender === 'user' && (
                                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <User className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    className="flex gap-2 justify-start"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Respuestas rápidas */}
                        {messages.length <= 2 && (
                            <div className="px-4 py-2 bg-white border-t border-gray-100">
                                <p className="text-xs text-gray-500 font-open-sans mb-2">Preguntas frecuentes:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply.id}
                                            onClick={() => handleQuickReply(reply.action)}
                                            className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 rounded-full font-open-sans transition-colors duration-200"
                                        >
                                            {reply.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Escribe tu pregunta..."
                                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full font-open-sans text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                                <button
                                    onClick={() => handleSendMessage()}
                                    disabled={!inputMessage.trim()}
                                    className="w-10 h-10 bg-primary hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
                                    aria-label="Enviar mensaje"
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Chatbot

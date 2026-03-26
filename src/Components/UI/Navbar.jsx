import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo_club_circular.png'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Valores', href: '#valores' },
    { label: 'Categorías', href: '#categorias' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const handleAnchor = (href) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleAnchor('#inicio')} className="flex items-center gap-3 group">
              <motion.img
                src={Logo}
                alt="Club Atlético Coventry"
                className="w-10 h-10 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="leading-none">
                <p className="font-bebas text-lg text-white">Club Atlético</p>
                <p className="font-bebas text-lg bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                  Coventry
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="relative font-open-sans text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-widest group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}

              {/* Separador */}
              <div className="w-px h-5 bg-white/20" />

              {/* Link Futsal */}
              <Link to="/futsal">
                <motion.div
                  className="flex items-center gap-2 font-bebas text-base px-4 py-1.5 rounded-full border border-[#f97316]/40 text-[#f97316] hover:bg-[#f97316]/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  ⚽ Futsal
                </motion.div>
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => handleAnchor('#contacto')}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-lg px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,102,193,0.35)] transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(255,102,193,0.55)' }}
                whileTap={{ scale: 0.96 }}
              >
                Inscríbete
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="md:hidden text-white p-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/97 backdrop-blur-xl flex flex-col pt-24 px-8"
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="font-bebas text-5xl text-white hover:text-primary transition-colors py-3 border-b border-white/10 text-left"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Futsal mobile link */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.08 }}
                className="py-3 border-b border-white/10"
              >
                <Link
                  to="/futsal"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-bebas text-5xl text-[#f97316] hover:text-orange-400 transition-colors"
                >
                  ⚽ Futsal
                </Link>
              </motion.div>
            </nav>

            <motion.button
              onClick={() => handleAnchor('#contacto')}
              className="mt-10 flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-2xl py-5 rounded-2xl shadow-[0_0_40px_rgba(255,102,193,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Inscríbete Ahora
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <motion.p
              className="mt-6 text-center font-open-sans text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Clase de prueba 100% gratis
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

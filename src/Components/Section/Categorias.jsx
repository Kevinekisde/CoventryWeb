import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Trophy, Calendar, Clock, Award, Zap, ArrowRight,
  ChevronRight, ChevronLeft, X, Play, ImageIcon, Expand,
} from 'lucide-react';

// ─── Helpers ────────────────────────────────────────────────────
const LEVEL_COLOR = {
  'Iniciación':           'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Intermedio Recreativo':'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Avanzado':             'bg-orange-500/15 text-orange-400 border-orange-500/30',
  'Profesional':          'bg-red-500/15 text-red-400 border-red-500/30',
  'Competitivo':          'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'Intermedio-Avanzado':  'bg-purple-500/15 text-purple-400 border-purple-500/30',
};

function isVideo(url = '') {
  return /\.(mp4|webm|ogg|mov)$/i.test(url) || /youtube\.com|youtu\.be|vimeo\.com/.test(url);
}

function getYouTubeId(url = '') {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/);
  return m ? m[1] : null;
}

function getYouTubeThumbnail(url = '') {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

// ─── Data ────────────────────────────────────────────────────────
const ramas = [
  {
    id: 'iniciacion',
    nombre: 'Iniciación',
    subtitulo: 'Para los más pequeños',
    categorias: [
      {
        nombre: 'Mini Voley',
        edad: '6 – 10 años',
        descripcion: 'Introducción al voleibol de forma lúdica y divertida. Desarrollo de habilidades motoras básicas y trabajo en equipo.',
        horarios: [
          { dia: 'Lunes',     hora: '16:00 – 17:30' },
          { dia: 'Miércoles', hora: '16:00 – 17:30' },
        ],
        nivel: 'Iniciación',
        ligas: [],
        galeria: [
          // Reemplaza con tus URLs reales de imagen o video
          // { tipo: 'imagen', url: '/fotos/mini-voley-1.jpg' },
          // { tipo: 'video',  url: 'https://www.youtube.com/watch?v=TU_ID' },
        ],
      },
      {
        nombre: 'Sub 14',
        edad: '11 – 13 años',
        descripcion: 'Perfeccionamiento de técnicas fundamentales. Introducción a estrategias de juego y torneos locales.',
        horarios: [
          { dia: 'Martes', hora: '17:00 – 18:30' },
          { dia: 'Jueves', hora: '17:00 – 18:30' },
        ],
        nivel: 'Iniciación',
        ligas: ['Liga Municipal Sub 14'],
        galeria: [],
      },
    ],
  },
  {
    id: 'mixta',
    nombre: 'Intermedia Mixta',
    subtitulo: 'Recreativo y social',
    categorias: [
      {
        nombre: 'Intermedia Mixta',
        edad: '+18 años',
        descripcion: 'Categoría inclusiva para varones y mujeres. Ambiente relajado, perfecto para disfrutar el voleibol sin presión competitiva.',
        horarios: [
          { dia: 'Miércoles', hora: '19:30 – 21:30' },
          { dia: 'Jueves',    hora: '19:30 – 21:30' },
        ],
        nivel: 'Intermedio Recreativo',
        ligas: ['Torneo Interno Mixto', 'Copa Recreativa Coventry'],
        galeria: [],
      },
    ],
  },
  {
    id: 'avanzada',
    nombre: 'Intermedia Avanzada',
    subtitulo: 'Nivel competitivo',
    categorias: [
      {
        nombre: 'Sub 16 y 18 Damas',
        edad: '14 – 17 años',
        descripcion: 'Entrenamiento técnico avanzado con énfasis en tácticas. Preparación para competencias federadas.',
        horarios: [
          { dia: 'Lunes',     hora: '18:30 – 20:30' },
          { dia: 'Miércoles', hora: '18:30 – 20:30' },
          { dia: 'Viernes',   hora: '18:30 – 20:30' },
        ],
        nivel: 'Avanzado',
        ligas: ['Liga Federada Santiago Sub 16', 'Liga Federada Santiago Sub 18'],
        galeria: [],
      },
      {
        nombre: 'Avanzada Hombres',
        edad: '+18 años',
        descripcion: 'Alto nivel competitivo con entrenamiento intensivo. Participación en ligas y torneos de primer nivel.',
        horarios: [
          { dia: 'Sábado',  hora: '15:00 – 16:50' },
          { dia: 'Domingo', hora: '15:40 – 17:35' },
        ],
        nivel: 'Competitivo',
        ligas: ['Liga LIVOCOR', 'Liga Palestina'],
        galeria: [],
      },
      {
        nombre: 'Sub 20 Hombres',
        edad: '18 – 19 años',
        descripcion: 'Transición al voleibol adulto con preparación física especializada y táctica avanzada.',
        horarios: [
          { dia: 'Lunes',     hora: '19:00 – 21:00' },
          { dia: 'Miércoles', hora: '19:00 – 21:00' },
          { dia: 'Viernes',   hora: '19:00 – 21:00' },
        ],
        nivel: 'Competitivo',
        ligas: ['Liga Palestina', 'Liga LIVOCOR'],
        galeria: [],
      },
    ],
  },
  {
    id: 'tc',
    nombre: 'Ramas TC',
    subtitulo: 'Categoría adulta',
    categorias: [
      {
        nombre: 'TC Varones',
        edad: '+18 años',
        descripcion: 'Tercera categoría masculina. Desarrollo técnico continuo y participación en campeonatos metropolitanos.',
        horarios: [
          { dia: 'Martes', hora: '19:30 – 21:30' },
          { dia: 'Jueves', hora: '19:30 – 21:30' },
        ],
        nivel: 'Competitivo',
        ligas: ['Liga TC Metropolitana', 'Copa Coventry TC'],
        galeria: [],
      },
      {
        nombre: 'TC Damas',
        edad: '+18 años',
        descripcion: 'Tercera categoría femenina. Ambiente competitivo con enfoque en trabajo en equipo y crecimiento personal.',
        horarios: [
          { dia: 'Miércoles', hora: '19:30 – 21:30' },
          { dia: 'Viernes',   hora: '19:30 – 21:30' },
        ],
        nivel: 'Competitivo',
        ligas: ['Liga TC Femenina Santiago', 'Torneo Regional TC'],
        galeria: [],
      },
    ],
  },
];

// ─── Thumbnail ───────────────────────────────────────────────────
function Thumbnail({ item, onClick }) {
  const video = isVideo(item.url);
  const ytThumb = video ? getYouTubeThumbnail(item.url) : null;
  const src = item.thumbnail || ytThumb || item.url;

  return (
    <motion.button
      onClick={onClick}
      className="relative aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white/5">
          <ImageIcon className="w-4 h-4 text-gray-600" />
        </div>
      )}
      {video && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
      )}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────
function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % items.length), [items.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, onClose]);

  const item = items[current];
  const video = isVideo(item.url);
  const ytId = video ? getYouTubeId(item.url) : null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <p className="font-bebas text-lg text-white tracking-wide">
          {current + 1} / {items.length}
        </p>
        <motion.button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center relative px-4 py-4 min-h-0">
        {/* Prev */}
        {items.length > 1 && (
          <motion.button
            onClick={prev}
            className="absolute left-3 z-10 p-2.5 rounded-full bg-white/10 hover:bg-primary/40 transition-colors border border-white/10"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="w-full max-w-4xl max-h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.22 }}
          >
            {ytId ? (
              <iframe
                title="Video de categoría"
                src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                className="w-full aspect-video rounded-2xl"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : video ? (
              <video
                src={item.url}
                controls
                autoPlay
                className="w-full max-h-[70vh] rounded-2xl object-contain"
              />
            ) : (
              <img
                src={item.url}
                alt=""
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        {items.length > 1 && (
          <motion.button
            onClick={next}
            className="absolute right-3 z-10 p-2.5 rounded-full bg-white/10 hover:bg-primary/40 transition-colors border border-white/10"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </div>

      {/* Thumbnail strip */}
      {items.length > 1 && (
        <div className="flex gap-2 px-5 py-4 overflow-x-auto scrollbar-none border-t border-white/10 justify-center">
          {items.map((it, i) => {
            const ytT = getYouTubeThumbnail(it.url);
            const thumbSrc = it.thumbnail || ytT || it.url;
            return (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  i === current ? 'border-primary' : 'border-white/10'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {thumbSrc ? (
                  <img src={thumbSrc} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    {isVideo(it.url) ? <Play className="w-4 h-4 text-white fill-white" /> : <ImageIcon className="w-4 h-4 text-gray-500" />}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

// ─── Category Card ───────────────────────────────────────────────
function CategoryCard({ cat, index, onOpenGallery }) {
  const levelStyle = LEVEL_COLOR[cat.nivel] || 'bg-gray-500/15 text-gray-400 border-gray-500/30';
  const hasGallery = cat.galeria && cat.galeria.length > 0;
  const visibleThumbs = cat.galeria?.slice(0, 4) || [];
  const extra = (cat.galeria?.length || 0) - 4;

  return (
    <motion.div
      className="group relative flex flex-col bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors duration-300"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-pink-600" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-bebas text-2xl md:text-3xl text-white leading-none">{cat.nombre}</h3>
          <span className={`shrink-0 font-open-sans text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${levelStyle}`}>
            {cat.nivel}
          </span>
        </div>

        {/* Age */}
        <div className="inline-flex items-center gap-1.5 mb-4">
          <Users className="w-3.5 h-3.5 text-primary" />
          <span className="font-open-sans text-xs text-gray-400 font-medium">{cat.edad}</span>
        </div>

        {/* Description */}
        <p className="font-open-sans text-sm text-gray-400 leading-relaxed mb-5 flex-1">
          {cat.descripcion}
        </p>

        <div className="h-px bg-white/[0.08] mb-5" />

        {/* Schedule */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-bebas text-base text-white tracking-wide">Horarios</span>
          </div>
          <div className="space-y-2">
            {cat.horarios.map((h, i) => (
              <div key={i} className="flex items-center justify-between bg-white/[0.04] rounded-lg px-3 py-2">
                <span className="font-open-sans text-xs text-white font-semibold">{h.dia}</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span className="font-open-sans text-xs">{h.hora}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        {cat.ligas.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="font-bebas text-base text-white tracking-wide">Competencias</span>
            </div>
            <div className="space-y-1.5">
              {cat.ligas.map((liga, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Award className="w-3 h-3 text-primary shrink-0" />
                  <span className="font-open-sans text-xs text-gray-400">{liga}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery strip */}
        {hasGallery && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-primary" />
                <span className="font-bebas text-base text-white tracking-wide">Galería</span>
              </div>
              <button
                onClick={() => onOpenGallery(cat.galeria, 0)}
                className="font-open-sans text-[10px] text-primary hover:text-pink-400 transition-colors flex items-center gap-1"
              >
                Ver todo
                <Expand className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {visibleThumbs.map((item, i) => (
                <Thumbnail
                  key={i}
                  item={item}
                  onClick={() => onOpenGallery(cat.galeria, i)}
                />
              ))}
              {extra > 0 && (
                <motion.button
                  onClick={() => onOpenGallery(cat.galeria, 4)}
                  className="aspect-square rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-bebas text-white text-lg">+{extra}</span>
                </motion.button>
              )}
            </div>
          </div>
        )}

        {/* Empty gallery placeholder */}
        {!hasGallery && (
          <motion.button
            onClick={() => {}}
            className="mb-5 flex items-center gap-2.5 w-full border border-dashed border-white/15 rounded-xl px-4 py-3 text-gray-600 hover:border-primary/30 hover:text-primary/60 transition-colors group/gal"
            whileHover={{ scale: 1.01 }}
          >
            <ImageIcon className="w-4 h-4 flex-shrink-0" />
            <span className="font-open-sans text-xs">Galería sin fotos aún</span>
          </motion.button>
        )}

        {/* CTA */}
        <motion.a
          href="#contacto"
          className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-base px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(255,102,193,0.2)] hover:shadow-[0_0_30px_rgba(255,102,193,0.4)] transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Inscribirse
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────
function Categorias() {
  const [activeRama, setActiveRama] = useState(0);
  const [lightbox, setLightbox] = useState(null); // { items, index }

  const openGallery = useCallback((items, index) => {
    setLightbox({ items, index });
  }, []);

  const closeGallery = useCallback(() => setLightbox(null), []);

  return (
    <>
      <section id="categorias" className="relative bg-black py-20 md:py-32 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,102,193,0.3) 80px, rgba(255,102,193,0.3) 81px),
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,102,193,0.3) 80px, rgba(255,102,193,0.3) 81px)
            `,
          }} />
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* Section header */}
          <motion.div
            className="text-center mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-open-sans text-sm text-white font-semibold">Encuentra Tu Equipo</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Nuestras</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">Categorías</span>
            </h2>
            <p className="font-open-sans text-lg text-gray-400 max-w-xl mx-auto">
              Desde iniciación hasta nivel competitivo. Encuentra tu lugar en la cancha.
            </p>
          </motion.div>

          {/* Rama tab bar */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex overflow-x-auto scrollbar-none gap-1 p-1 bg-white/[0.04] border border-white/10 rounded-2xl max-w-3xl mx-auto">
              {ramas.map((rama, index) => (
                <button
                  key={rama.id}
                  onClick={() => setActiveRama(index)}
                  className="relative flex-1 min-w-[110px] py-3 px-3 rounded-xl text-center transition-colors duration-200 focus:outline-none"
                >
                  {activeRama === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 rounded-xl shadow-[0_0_20px_rgba(255,102,193,0.3)]"
                      layoutId="ramaIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  <div className="relative z-10">
                    <p className={`font-bebas text-sm md:text-base leading-none ${activeRama === index ? 'text-white' : 'text-gray-400'}`}>
                      {rama.nombre}
                    </p>
                    <p className={`font-open-sans text-[10px] mt-0.5 leading-none ${activeRama === index ? 'text-white/70' : 'text-gray-600'}`}>
                      {rama.subtitulo}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Category cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRama}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`grid gap-5 max-w-6xl mx-auto ${
                ramas[activeRama].categorias.length === 1
                  ? 'grid-cols-1 max-w-md'
                  : ramas[activeRama].categorias.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {ramas[activeRama].categorias.map((cat, i) => (
                <CategoryCard
                  key={cat.nombre}
                  cat={cat}
                  index={i}
                  onOpenGallery={openGallery}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-7 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative z-10 text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <Users className="w-5 h-5 text-primary" />
                  <p className="font-bebas text-xl text-white">¿No sabes qué categoría elegir?</p>
                </div>
                <p className="font-open-sans text-sm text-gray-400">
                  Te ayudamos a encontrar el grupo perfecto según tu edad y nivel.
                </p>
              </div>
              <motion.a
                href="#contacto"
                className="relative z-10 shrink-0 flex items-center gap-2 bg-gradient-to-r from-primary to-pink-600 text-white font-bebas text-lg px-7 py-3 rounded-xl shadow-[0_0_20px_rgba(255,102,193,0.25)]"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(255,102,193,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Hablar con un Asesor
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            items={lightbox.items}
            startIndex={lightbox.index}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Categorias;

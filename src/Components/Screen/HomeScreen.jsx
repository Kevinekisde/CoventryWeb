import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Volleyball, Users, Calendar, Clock } from 'lucide-react';
import HeroHome from '../Section/HeroHome';
import ProcesoHome from '../Section/ProcesoHome';
import Categorias from '../Section/Categorias';
import ManchaRosa from '../Assets/mancha_negra_final.png'
import Logo from '../Assets/logo_club_circular.png'
import MisionVision from '../Section/MisionVision';
import InstagramFeed from '../Section/InstagramPost';
import Chatbot from '../Section/Chatbot';

export default function VolleyballLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* ========== HERO SECTION ========== */}
      <HeroHome/>
      <MisionVision/>

      {/* ========== Categorias SECTION ========== */}
      <Categorias/>
      {/* ========== PROCESO SIMPLE ========== */}
      <ProcesoHome/>
      <InstagramFeed/>

      {/* ========== CONTACTO ========== */}
      <section id="contacto" className="py-16 md:py-24  text-black relative overflow-hidden">
        {/* Mancha decorativa */}
        <motion.img 
          src={ManchaRosa}
          alt=""
          className="absolute -bottom-52 -right-52 w-2/5  -z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">
              ¿Listo Para Dar El Primer Paso?
            </h2>
            <p className="font-open-sans text-xl text-black">
              Estamos aquí para responder todas tus preguntas
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="bg-white text-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6 mb-8">
                {/* Instagram */}
                <motion.a 
                  href="https://instagram.com/cvb.atl.coventry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Instagram size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-open-sans text-sm text-gray-500">Síguenos en Instagram</p>
                    <p className="font-bebas text-2xl group-hover:text-primary transition-colors">
                      @cvb.atl.coventry
                    </p>
                  </div>
                </motion.a>
                
                {/* WhatsApp */}
                <motion.a 
                  href="https://wa.me/56954243318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="font-open-sans text-sm text-gray-500">Escríbenos por WhatsApp</p>
                    <p className="font-bebas text-2xl group-hover:text-primary transition-colors">
                      +569 5424 3318
                    </p>
                  </div>
                </motion.a>
                
              </div>
              
              <motion.a
                href="https://wa.me/56954243318?text=Hola! Me interesa la clase de prueba gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-[#ff4db3] text-white font-bebas text-3xl py-5 rounded-full text-center shadow-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar Mi Clase Gratis
              </motion.a>
              
              <p className="text-center font-open-sans text-sm text-gray-500 mt-4">
                Respuesta inmediata · Inscripciones abiertas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={Logo}
            alt="Club Atlético Coventry"
            className="w-24 mx-auto mb-6 opacity-80"
          />
          <p className="font-bebas text-2xl mb-2">Club Atlético Coventry</p>
          <p className="font-open-sans text-gray-400">
            Formando campeones
          </p>
          <p className="font-open-sans text-sm text-gray-500 mt-6">
            © 2025 Club Atlético Coventry · Todos los derechos reservados
          </p>
        </div>
      </footer>

      <Chatbot/>
    </div>
  );
}

import React from 'react'
import { motion } from 'framer-motion'

function ProcesoHome() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">
              Comenzar Es Muy Fácil
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Tres simples pasos te separan de tu primera clase
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto border-black border p-10 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Paso 1 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bebas text-4xl shadow-lg">
                  1
                </div>
                <h3 className="font-bebas text-3xl mb-3">Contáctanos</h3>
                <p className="font-open-sans text-gray-600">
                  Escríbenos por WhatsApp o Instagram
                </p>
              </motion.div>
              
              {/* Paso 2 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bebas text-4xl shadow-lg">
                  2
                </div>
                <h3 className="font-bebas text-3xl mb-3">Ven a Probar</h3>
                <p className="font-open-sans text-gray-600">
                  Tu primera clase es completamente gratis
                </p>
              </motion.div>
              
              {/* Paso 3 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bebas text-4xl shadow-lg">
                  3
                </div>
                <h3 className="font-bebas text-3xl mb-3">Únete</h3>
                <p className="font-open-sans text-gray-600">
                  Si te gusta, bienvenido a la familia
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProcesoHome
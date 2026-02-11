import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, HardHat } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-deep-gray relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
              <HardHat className="w-4 h-4" />
              <span>DESDE 1995</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Moldando o Futuro com <span className="text-accent">Tradição e Fogo</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
              A GVC FUNDIÇÃO não apenas fabrica peças; nós forjamos soluções que mantêm a indústria em movimento. Especialistas em ligas de alta resistência para os ambientes mais severos do planeta.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="text-accent w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Qualidade Bruta</h4>
                <p className="text-gray-500 text-sm">Controle metalúrgico rigoroso em cada vazamento de metal.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-molten/20 rounded-lg flex items-center justify-center">
                  <Target className="text-molten w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Engenharia de Precisão</h4>
                <p className="text-gray-500 text-sm">Desenvolvimento de peças customizadas para máxima eficiência.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <img 
                src="/trabalhador.jpeg" 
                alt="Colaborador GVC Fundição"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-gray/80 to-transparent" />
            </div>
            {/* Molten metal effect behind image */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent blur-[80px] opacity-30 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-molten blur-[80px] opacity-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

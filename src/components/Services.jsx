import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Reparos Tijolinhos',
      description: '4 – 6 – 6x8 – 8 – 10 – 12". Composto de 5 tijolos, 2 tampas, 1 garganta, 1 boqueta.',
      image: '/conjuntotijolinho.png',
      tag: 'PRODUTOS'
    },
    {
      title: 'Caracol',
      description: 'Disponível nos tamanhos 6 e 8 polegadas. Alta durabilidade e precisão.',
      image: '/caracol.png',
      tag: 'PRODUTOS'
    },
    {
      title: 'Caracol Descartável',
      description: 'Disponível nos tamanhos 6 e 8 polegadas. Praticidade e eficiência.',
      image: '/caracol1.png',
      tag: 'PRODUTOS'
    },
    {
      title: 'Rotores',
      description: 'Disponível nos tamanhos 4 – 6 – 6x8 – 8 – 10 polegadas. Balanceamento de precisão.',
      image: '/rotor.png',
      tag: 'PRODUTOS'
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#0a0f1d] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-6">
              Serviços <span className="text-accent">Industriais</span> de Elite
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Fabricamos todos os tipos de revestimento para bombas e ligas dentro da NORMA ASTM. Trabalhamos com peças sob encomenda destinadas a cada tipo de necessidade apresentada por nossos clientes. Somos especializados em extratoras de areia, atendendo em todo território nacional.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-9xl font-black text-white/5 absolute right-0 top-10 select-none">
              SERVICES
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-deep-gray p-6 md:p-10 group hover:bg-accent/10 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Molten hover effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent transition-all duration-500" />
              
              <div className="mb-8 group-hover:scale-105 transition-transform duration-500 h-48 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              <span className="block text-[10px] font-black tracking-[0.2em] text-gray-500 mb-4 group-hover:text-accent">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors mb-8 flex-grow">
                {service.description}
              </p>
              
              <a 
                href="#contato" 
                className="flex items-center gap-2 text-white/20 group-hover:text-accent font-black text-xs tracking-widest uppercase transition-colors mt-auto cursor-pointer"
              >
                Saiba Mais <Wrench className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

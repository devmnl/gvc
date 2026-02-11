import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Layers, Cog, Zap, Anchor, Box } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Reparo de Bombas de Draga',
      description: 'Recuperação estrutural de carcaças e rotores com ligas de alta dureza para máxima vida útil.',
      icon: <Anchor className="w-10 h-10" />,
      tag: 'ESPECIALIDADE'
    },
    {
      title: 'Fundição sob Encomenda',
      description: 'Peças complexas fundidas em ferro, aço e ligas especiais sob medida para sua necessidade.',
      icon: <Box className="w-10 h-10" />,
      tag: 'PERSONALIZADO'
    },
    {
      title: 'Usinagem Pesada',
      description: 'Acabamento centesimal em peças de grande porte para garantir o ajuste perfeito.',
      icon: <Cog className="w-10 h-10" />,
      tag: 'PRECISÃO'
    },
    {
      title: 'Revestimento Duro',
      description: 'Aplicação de camadas protetoras contra abrasão extrema em componentes de dragagem.',
      icon: <Zap className="w-10 h-10" />,
      tag: 'PROTEÇÃO'
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
              Tecnologia de ponta aplicada à metalurgia pesada. Transformamos desafios em componentes indestrutíveis.
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
              className="bg-deep-gray p-10 group hover:bg-accent/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Molten hover effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent transition-all duration-500" />
              
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
                {service.icon}
              </div>
              <span className="block text-[10px] font-black tracking-[0.2em] text-gray-500 mb-4 group-hover:text-accent">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-white/20 group-hover:text-accent font-black text-xs tracking-widest uppercase transition-colors">
                Saiba Mais <Wrench className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

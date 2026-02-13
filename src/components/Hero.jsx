import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Logo from './Logo';

const Spark = ({ style }) => (
  <motion.div
    initial={{ y: 0, opacity: 1, scale: 1 }}
    animate={{ 
      y: -200 - Math.random() * 300, 
      x: (Math.random() - 0.5) * 200,
      opacity: 0,
      scale: 0
    }}
    transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
    className="absolute w-1 h-1 bg-molten rounded-full z-30"
    style={style}
  />
);

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [sparks, setSparks] = useState([]);

  const slides = [
    {
      type: 'video',
      title: "Força e Tradição",
      subtitle: "PROCESSO INDUSTRIAL REAL",
      description: "Assista à excelência do nosso processo de fundição em alta temperatura.",
      video: "/hero-video.mp4"
    },
    {
      type: 'brand',
      title: "Excelência em Fundição",
      subtitle: "GVC FUNDIÇÃO DE FERRO E AÇO",
      description: "Líder nacional em reparos e fabricação de componentes para bombas de draga.",
    },
    {
      type: 'image',
      title: "Tecnologia de Ponta",
      subtitle: "RESISTÊNCIA E PRECISÃO",
      description: "Utilizamos as ligas mais resistentes do mercado para garantir a durabilidade do seu equipamento.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
    },
    {
      type: 'image',
      title: "Soluções Customizadas",
      subtitle: "ENGENHARIA ESPECIALIZADA",
      description: "Desenvolvemos peças sob medida para as necessidades específicas da sua operação de dragagem.",
      image: "/bombasdraga.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // Increased duration for video slide
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const sparkTimer = setInterval(() => {
      setSparks(prev => [...prev.slice(-40), {
        id: Date.now(),
        style: {
          left: `${Math.random() * 100}%`,
          bottom: '0%'
        }
      }]);
    }, 150);
    return () => clearInterval(sparkTimer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100dvh] w-full bg-deep-gray overflow-hidden">
      {/* Background Sparks */}
      {sparks.map(spark => (
        <Spark key={spark.id} style={spark.style} />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {slides[current].type === 'video' ? (
            <>
              <video
                key={slides[current].video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slides[current].video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full max-w-[90%]"
                >
                  <span className="text-accent font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm mb-4 md:mb-6 block">
                    {slides[current].subtitle}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-9xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.8] uppercase break-words">
                    {slides[current].title}
                  </h1>
                  <p className="text-gray-300 text-base md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                    {slides[current].description}
                  </p>
                  <a href="#contato" className="inline-block px-6 py-4 md:px-12 md:py-6 bg-accent text-white font-black uppercase tracking-widest hover:bg-molten transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] text-[10px] md:text-base w-full sm:w-auto max-w-xs">
                    Conheça Nossa Fábrica
                  </a>
                </motion.div>
              </div>
            </>
          ) : slides[current].type === 'brand' ? (
            <div className="absolute inset-0 bg-industrial-gradient flex items-center justify-center">
              <div className="absolute inset-0 smoke-overlay opacity-30" />
              <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-8 w-full max-w-[280px] md:max-w-[600px]"
                >
                  <img 
                    src="/gvc-logo-main.png" 
                    alt="GVC Logo" 
                    className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center w-full px-4"
                >
                  <p className="text-gray-400 text-base md:text-2xl max-w-2xl mx-auto uppercase tracking-[0.15em] md:tracking-[0.2em] font-black leading-relaxed">
                    {slides[current].description}
                  </p>
                </motion.div>
              </div>
            </div>
          ) : (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
                style={{ backgroundImage: `url(${slides[current].image})`, transform: 'scale(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-gray via-deep-gray/80 to-transparent" />
              
              <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-3xl w-full"
                >
                  <span className="text-accent font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
                    {slides[current].subtitle}
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] break-words">
                    {slides[current].title}
                  </h1>
                  <p className="text-gray-300 text-lg md:text-2xl mb-8 md:mb-10 leading-relaxed max-w-xl pr-4">
                    {slides[current].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="#contato" className="px-6 py-4 md:px-10 md:py-5 bg-accent text-white font-black uppercase tracking-widest hover:bg-molten transition-all text-center text-xs md:text-base">
                      Falar com Especialista
                    </a>
                    <a href="#servicos" className="px-6 py-4 md:px-10 md:py-5 border border-white/20 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center text-xs md:text-base">
                      Ver Catálogo
                    </a>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-4 border border-white/10 text-white hover:bg-white hover:text-black transition-all rounded-full"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="p-4 bg-white text-black hover:bg-accent hover:text-white transition-all rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-12 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-500 ${current === index ? 'w-12 bg-accent' : 'w-6 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

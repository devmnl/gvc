import React from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.242475454641!2d-47.4586221!3d-21.925232!2m3!1f0!2f0!3f0!3m2!1i1024!2i2000!4f13.1!3m3!1m2!1s0x94b803273841961f%3A0xb15f03d21b476485!2sGVC%20Fundi%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1707669000000!5m2!1spt-BR!2sbr";
  const googleMapsLink = "https://maps.app.goo.gl/i2VMRK7TK3pZiuMS9";

  return (
    <section id="contato" className="py-16 md:py-24 bg-deep-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-8">
              Fale com um <span className="text-accent block mt-2 md:inline md:mt-0">Especialista</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 font-light">
              Estamos prontos para transformar seu projeto em metal. Solicite análise técnica e orçamento.
            </p>

            <div className="space-y-8 md:space-y-10">
              <div className="group flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Telefone Direto</p>
                  <p className="text-xl md:text-2xl font-bold text-white tracking-tight break-all">(19) 3585-6107</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">E-mail Comercial</p>
                  <p className="text-lg md:text-2xl font-bold text-white tracking-tight break-words">comercial@gvcfundicao.com.br</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Unidade Industrial</p>
                  <p className="text-base md:text-lg font-bold text-white tracking-tight mb-2 leading-tight">
                    Av. Dr. José Ferreira de Azambuja, 1010 - Porto Ferreira - SP
                  </p>
                  <a 
                    href={googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest hover:translate-x-2 transition-transform"
                  >
                    Abrir no Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/30" />
              
              <div className="flex items-center gap-3 mb-10">
                <MessageSquare className="text-accent w-6 h-6" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Formulário de Orçamento</h3>
              </div>

              <form className="grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Seu Nome</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="NOME COMPLETO"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Seu E-mail</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="EMAIL@EMPRESA.COM"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Qual o seu desafio?</label>
                  <select className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-deep-gray">REPARO DE BOMBA DE DRAGA</option>
                    <option className="bg-deep-gray">FUNDIÇÃO SOB MEDIDA</option>
                    <option className="bg-deep-gray">USINAGEM DE PEÇAS</option>
                    <option className="bg-deep-gray">OUTROS SERVIÇOS</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Mensagem</label>
                  <textarea
                    rows="4"
                    className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="DETALHE SUA NECESSIDADE..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full py-5 bg-accent hover:bg-molten text-white font-black uppercase tracking-[0.3em] transition-all shadow-[0_10px_40px_rgba(249,115,22,0.2)] hover:-translate-y-1">
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>

            {/* Embedded Map with unique styling */}
            <div className="mt-12 h-80 border-4 border-white/5 relative group">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização GVC Fundição"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/10 group-hover:border-accent/30 transition-colors duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

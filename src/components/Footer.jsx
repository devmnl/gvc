import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center group">
              <div className="relative w-32 h-16 md:w-56 md:h-28 flex items-center justify-center">
                <img 
                  src="/gvc-logo-main.png" 
                  alt="GVC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="max-w-md mb-8 text-gray-500 leading-relaxed">
              A GVC FUNDIÇÃO é reconhecida nacionalmente pela qualidade de seus produtos, preços acessíveis e excelente atendimento. Atendemos a todo tipo de material dentro da NORMA ASTM.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#inicio" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="/#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="/#contato" className="hover:text-accent transition-colors">Contato</a></li>
              <li><a href="/trabalhe-conosco" className="hover:text-accent transition-colors text-accent">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Atendimento</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-white font-bold">Segunda - Quinta</span>
                <span className="text-gray-500">07:00 - 17:00</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold">Sexta</span>
                <span className="text-gray-500">07:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} GVC FUNDIÇÃO. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://devmnl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors text-xs font-black uppercase tracking-[0.2em]"
          >
            DevmnL
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

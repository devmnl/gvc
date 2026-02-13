import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Sobre Nós', href: '/#sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
    { name: 'Contato', href: '/#contato' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <header className={`fixed w-full z-[60] transition-all duration-500 ${isScrolled && !isMenuOpen ? 'bg-deep-gray/90 backdrop-blur-xl py-2 border-b border-white/5' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center relative z-50">
          <a href="#inicio" className="group flex items-center">
            <div className="relative w-36 h-18 md:w-40 md:h-20 flex items-center justify-center">
              <img 
                src="/gvc-logo-main.png" 
                alt="GVC Logo" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contato" 
              className="px-6 py-3 bg-accent text-white text-[11px] font-black uppercase tracking-widest hover:bg-molten transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-accent transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-gray-950/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-molten/5 rounded-full blur-[100px]" />
              </div>

              <nav className="flex flex-col items-center space-y-8 relative z-10 w-full px-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={linkVariants}
                    className="text-3xl font-black text-white uppercase tracking-tighter hover:text-accent transition-colors flex items-center gap-4 group w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    <ChevronRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
                
                <motion.div 
                  variants={linkVariants}
                  className="pt-8 w-full flex justify-center"
                >
                  <a 
                    href="#contato" 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full max-w-xs py-5 bg-accent text-white text-center text-sm font-black uppercase tracking-[0.2em] hover:bg-molten transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 group"
                  >
                    <span>Solicitar Orçamento</span>
                    <Flame className="w-4 h-4 group-hover:animate-pulse" />
                  </a>
                </motion.div>
              </nav>

              <motion.div 
                variants={linkVariants}
                className="absolute bottom-12 text-gray-500 text-[10px] font-black uppercase tracking-widest"
              >
                GVC Fundição • Desde 1995
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "5511947762999"; // Primary mobile number from Contact section
  const message = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transition-shadow cursor-pointer group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping duration-1000 -z-10"></span>
      
      {/* Icon */}
      <img 
        src="/whatsapp.png" 
        alt="WhatsApp" 
        className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-sm"
      />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Fale Conosco
        {/* Arrow */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

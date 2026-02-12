import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Settings, ChevronRight } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' or 'settings'
  
  // Cookie settings state
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always true
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-settings', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-settings', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsVisible(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('cookie-settings', JSON.stringify(cookieSettings));
    setIsVisible(false);
    setShowModal(false);
  };

  const openPrivacy = (e) => {
    e.preventDefault();
    setActiveTab('privacy');
    setShowModal(true);
  };

  const openCustomize = (e) => {
    e.preventDefault();
    setActiveTab('settings');
    setShowModal(true);
  };

  const toggleSetting = (key) => {
    if (key === 'necessary') return;
    setCookieSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {isVisible && !showModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-4 left-4 z-50 w-full max-w-sm md:bottom-8 md:left-8"
          >
            <div className="bg-[#0f1115] rounded-xl shadow-2xl p-6 border border-white/10 relative overflow-hidden backdrop-blur-sm">
              {/* Industrial Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/80"></div>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-3 pl-2">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Controle sua privacidade
                </h3>
              </div>

              {/* Content */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed pl-2">
                Nós utilizamos cookies para aprimorar sua experiência de navegação e analisar nosso tráfego.
              </p>

              <a 
                href="#" 
                className="text-accent text-sm font-medium hover:text-orange-400 hover:underline block mb-6 pl-2 transition-colors flex items-center gap-1 w-fit"
                onClick={openPrivacy}
              >
                Política de Privacidade <ChevronRight className="w-3 h-3" />
              </a>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pl-2">
                <button 
                  onClick={openCustomize}
                  className="text-gray-400 text-sm font-bold hover:text-white transition-colors flex items-center gap-1"
                >
                  <Settings className="w-3 h-3" />
                  Customizar
                </button>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={handleReject}
                    className="flex-1 sm:flex-none px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-bold hover:bg-white/10 transition-colors uppercase tracking-wide"
                  >
                    Rejeitar
                  </button>
                  <button 
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none px-5 py-2 bg-accent text-white rounded-lg text-xs font-bold hover:bg-orange-600 shadow-lg shadow-orange-900/20 transition-all uppercase tracking-wide"
                  >
                    Aceitar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0f1115] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-accent" />
                  <h2 className="text-xl font-bold text-white">Centro de Privacidade</h2>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/5">
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                    activeTab === 'privacy' ? 'text-white bg-white/5' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  Política de Privacidade
                  {activeTab === 'privacy' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                    activeTab === 'settings' ? 'text-white bg-white/5' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  Preferências de Cookies
                  {activeTab === 'settings' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
                  )}
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 text-gray-300 text-sm leading-relaxed custom-scrollbar">
                {activeTab === 'privacy' ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-2">Política de Privacidade GVC</h3>
                    <p>
                      A GVC Fundição de Ferro e Aço respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos, usamos e protegemos suas informações.
                    </p>
                    
                    <h4 className="text-white font-bold mt-4">1. Coleta de Dados</h4>
                    <p>
                      Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone ao entrar em contato conosco. Também coletamos dados de navegação automaticamente através de cookies para melhorar o desempenho do site.
                    </p>

                    <h4 className="text-white font-bold mt-4">2. Uso das Informações</h4>
                    <p>
                      Utilizamos seus dados para responder a solicitações de orçamento, melhorar nossos produtos e serviços, e para fins estatísticos internos. Não vendemos seus dados para terceiros.
                    </p>

                    <h4 className="text-white font-bold mt-4">3. Cookies</h4>
                    <p>
                      Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como os usuários interagem com nosso conteúdo. Você pode gerenciar suas preferências de cookies a qualquer momento através do botão "Customizar".
                    </p>

                    <h4 className="text-white font-bold mt-4">4. Segurança</h4>
                    <p>
                      Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
                    </p>

                    <h4 className="text-white font-bold mt-4">5. Contato</h4>
                    <p>
                      Se tiver dúvidas sobre nossa política de privacidade, entre em contato através do e-mail: gvcfundicao@gmail.com.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="mb-4">
                      Gerencie suas preferências de consentimento para as tecnologias de rastreamento que utilizamos.
                    </p>

                    {/* Necessary */}
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">Necessários</span>
                          <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded border border-accent/20 uppercase">Sempre Ativo</span>
                        </div>
                        <div className="w-10 h-5 bg-accent rounded-full relative opacity-50 cursor-not-allowed">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Estes cookies são essenciais para o funcionamento do site e não podem ser desativados em nossos sistemas.
                      </p>
                    </div>

                    {/* Analytics */}
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-white">Analíticos</span>
                        <button 
                          onClick={() => toggleSetting('analytics')}
                          className={`w-10 h-5 rounded-full relative transition-colors ${cookieSettings.analytics ? 'bg-accent' : 'bg-gray-600'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${cookieSettings.analytics ? 'right-1' : 'left-1'}`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">
                        Nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site.
                      </p>
                    </div>

                    {/* Marketing */}
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-white">Marketing</span>
                        <button 
                          onClick={() => toggleSetting('marketing')}
                          className={`w-10 h-5 rounded-full relative transition-colors ${cookieSettings.marketing ? 'bg-accent' : 'bg-gray-600'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${cookieSettings.marketing ? 'right-1' : 'left-1'}`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">
                        Podem ser estabelecidos através do nosso site pelos nossos parceiros de publicidade para construir um perfil sobre seus interesses.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/5 bg-white/5 flex justify-end gap-3">
                {activeTab === 'settings' ? (
                  <>
                     <button 
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-gray-400 hover:text-white text-sm font-bold transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={handleSavePreferences}
                      className="px-6 py-2 bg-accent text-white rounded-lg text-sm font-bold hover:bg-orange-600 shadow-lg shadow-orange-900/20 transition-all uppercase tracking-wide"
                    >
                      Salvar Preferências
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className="px-6 py-2 bg-white/10 text-white rounded-lg text-sm font-bold hover:bg-white/20 transition-colors"
                  >
                    Gerenciar Cookies
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Send, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending process and open mail client
    setTimeout(() => {
      const subject = `Candidatura: ${formData.position || 'Geral'} - ${formData.name}`;
      const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}%0D%0A%0D%0A(Por favor, anexe seu currículo a este e-mail)`;
      
      window.location.href = `mailto:gvc@gvcfundicao.com?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-deep-gray text-white selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-deep-gray/90 backdrop-blur-md border-b border-white/5">
        <a href="/" className="w-24 md:w-32 opacity-80 hover:opacity-100 transition-opacity">
          <img src="/gvc-logo-main.png" alt="GVC Logo" className="w-full" />
        </a>
        <a 
          href="/" 
          className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Site
        </a>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Trabalhe <span className="text-accent">Conosco</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Estamos sempre em busca de talentos que compartilham nossa paixão pela fundição e excelência industrial. 
              Envie seu currículo e faça parte da nossa história.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            
            {/* Form Section */}
            <div className="md:col-span-3 relative z-10">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3">
                <FileText className="text-accent w-6 h-6" />
                Dados do Candidato
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Nome Completo</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                    placeholder="DIGITE SEU NOME"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">E-mail</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                      placeholder="SEU@EMAIL.COM"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Telefone / WhatsApp</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel"
                      className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                      placeholder="(11) 94776-2999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Vaga de Interesse (Opcional)</label>
                  <input
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                    placeholder="EX: SOLDADOR, MOLDADOR, ADMINISTRATIVO"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Resumo / Mensagem</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-white/5 border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-700"
                    placeholder="FALE UM POUCO SOBRE SUA EXPERIÊNCIA..."
                  ></textarea>
                </div>

                {/* File Upload Mock */}
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2 block">Currículo (PDF ou DOCX)</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cv-upload"
                    />
                    <label 
                      htmlFor="cv-upload"
                      className={`w-full flex items-center justify-center gap-3 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-all ${file ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    >
                      {file ? (
                        <>
                          <CheckCircle className="w-6 h-6 text-accent" />
                          <span className="text-sm font-bold text-white">{file.name}</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-gray-500" />
                          <span className="text-sm text-gray-400 font-medium">Clique para selecionar arquivo</span>
                        </>
                      )}
                    </label>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    O arquivo deverá ser anexado manualmente no seu cliente de e-mail ao clicar em enviar.
                  </p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-accent hover:bg-molten text-white font-black uppercase tracking-[0.3em] transition-all shadow-[0_10px_40px_rgba(249,115,22,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Preparando...' : 'Enviar Currículo'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="md:col-span-2 space-y-8 md:pl-8 md:border-l border-white/10 mt-8 md:mt-0">
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-4">Por que a GVC?</h4>
                <ul className="space-y-4">
                  {[
                    "Líder em fundição de alta complexidade",
                    "Ambiente focado em inovação e segurança",
                    "Oportunidade de crescimento técnico",
                    "Cultura de excelência e tradição"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-bold text-white uppercase mb-2">Dúvidas?</h4>
                <p className="text-xs text-gray-400 mb-4">Entre em contato direto com nosso RH:</p>
                <a href="mailto:gvc@gvcfundicao.com" className="text-accent text-sm font-black hover:underline break-all">
                  gvc@gvcfundicao.com
                </a>
              </div>

              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <h4 className="font-bold text-green-500 uppercase text-sm">Pronto para enviar!</h4>
                  </div>
                  <p className="text-xs text-green-200">
                    Seu cliente de e-mail foi aberto. Por favor, revise as informações e <strong>não esqueça de anexar o arquivo do seu currículo</strong> antes de enviar.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} GVC Fundição de Ferro e Aço. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default WorkWithUs;

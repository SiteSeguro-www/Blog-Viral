import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ShieldCheck, Smartphone, Gift, Trophy, Sparkles, Zap, Star } from "lucide-react";
import { AdBanner } from "../components/AdBanner";

export function Sorteios() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = "iPhone 17 Pro Max | Sorteio Especial Blog Viral";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-20">
      {/* Top Banner Ad */}
      <div className="w-full flex justify-center bg-slate-50 py-4 border-b border-slate-100">
        <AdBanner format="728x90" className="hidden md:flex" />
        <AdBanner format="320x50" className="flex md:hidden" />
      </div>

      {/* Sub-Header / Announcement */}
      <div className="w-full bg-slate-100 text-slate-900 py-3 px-4 text-center text-xs md:text-sm font-semibold tracking-wide">
        <p>
          <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] mr-2">AO VIVO</span>
          SORTEIO OFICIAL: Participe agora e concorra ao novo iPhone 17 Pro Max Titanium.
        </p>
      </div>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        
        {/* Hero Section: Apple Style */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
              iPhone 17 <br />
              <span className="text-slate-500">Pro Max.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Titanium. Tela ProMotion de 120Hz. <br />O smartphone mais poderoso do mundo pode ser seu.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <a href="#form" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-200 transition-all active:scale-95 text-center">
                Participar Agora
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Cadastro Verificado</span>
              </div>
            </div>
          </div>

          <div className="relative group overflow-visible">
            {/* Soft decorative background */}
            <div className="absolute -inset-20 bg-orange-50/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            
            <div className="relative z-10 w-fit max-w-md mx-auto bg-slate-50 rounded-[3rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="/iphone-17-pro-max-apple-256gb-48mp-tela-6-9-super-retina-xdr-laranja-cosmico_1757696972_gg.webp" 
                alt="iPhone 17 Pro Max Orange Titanium" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="text-center mt-4">
              <p className="text-slate-900 font-black text-2xl tracking-tighter">Orange Titanium</p>
              <p className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] mt-1 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100">Prêmio Exclusivo 2026</p>
            </div>
          </div>
        </section>

        {/* Ad Horizontal */}
        <div className="w-full flex justify-center mb-24 border-y border-slate-100 py-12 bg-slate-50/50">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="468x60" className="flex md:hidden" />
        </div>

        {/* Apple Style Sections */}
        <section className="grid lg:grid-cols-2 gap-8 mb-8">
           <div className="bg-slate-50 p-12 md:p-16 rounded-[48px] flex flex-col justify-end min-h-[500px] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-12 left-12 z-20">
                 <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">Câmera Pro.</h3>
                 <p className="text-slate-500 font-medium text-lg">Fotos dignas de cinema com <br />o novo sensor de 48MP.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/seed/iphonecam/800/800" 
                alt="Camera Detail" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
           </div>

           <div className="bg-slate-950 p-12 md:p-16 rounded-[48px] flex flex-col justify-end min-h-[500px] text-white relative overflow-hidden group">
              <div className="absolute top-12 left-12 z-20">
                 <h3 className="text-3xl md:text-4xl font-black mb-4">A19 Pro.</h3>
                 <p className="text-slate-400 font-medium text-lg">O chip que redefine o que <br />um smartphone pode fazer.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/seed/iphonechip/800/800" 
                alt="Chip Detail" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
           </div>
        </section>

        {/* Ad Middle Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <div className="flex flex-col items-center gap-2">
             <AdBanner format="300x250" className="w-full rounded-3xl !h-[250px] shadow-sm border border-slate-100" />
             <span className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">Publicidade</span>
           </div>
           <div className="hidden md:flex flex-col items-center gap-2">
             <AdBanner format="300x250" className="w-full rounded-3xl !h-[250px] shadow-sm border border-slate-100" />
             <span className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">Publicidade</span>
           </div>
        </div>

        {/* Trust Section */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Por que confiar em nós?</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg">Auditado</h4>
                <p className="text-slate-500 text-sm font-medium">Sorteio realizado via plataforma certificada e transparente.</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-lg">Prêmio Real</h4>
                <p className="text-slate-500 text-sm font-medium">O iPhone é lacrado, com nota fiscal e garantia de 1 ano.</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-lg">Histórico</h4>
                <p className="text-slate-500 text-sm font-medium">Mais de 250 prêmios já entregues pelo Blog Viral em 2 anos.</p>
             </div>
          </div>
        </section>

        {/* Ad Middle - Rectangle Wide */}
        <div className="w-full flex justify-center mb-24">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="468x60" className="flex md:hidden" />
        </div>

        {/* Registration Form: The "Checkout" Experience */}
        <section id="form" className="max-w-xl mx-auto mb-24 animate-in fade-in zoom-in duration-1000">
          <div className="bg-white border-2 border-slate-900 rounded-[48px] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2">
               <Trophy className="w-4 h-4 text-yellow-500" />
               Inscrição Oficial
            </div>

            {success ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-blue-200">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Confirmado!</h2>
                <p className="text-slate-500 text-lg font-medium mb-10">
                  Seu bilhete foi gerado com sucesso. Verifique seu e-mail para acompanhar o sorteio.
                </p>
                <Link to="/" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-black transition-all">
                  Voltar ao Blog
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <h2 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Participe Agora.</h2>
                  <p className="text-slate-500 font-bold">Grátis para todos os seguidores.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1" htmlFor="name">Seu Nome</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome completo" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1" htmlFor="email">E-mail de Contato</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplo.com" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1" htmlFor="whatsapp">WhatsApp</label>
                    <input 
                      id="whatsapp"
                      name="whatsapp"
                      type="tel" 
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(99) 99999-9999" 
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg font-medium"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 mt-4 shadow-xl shadow-blue-200"
                  >
                    {isSubmitting ? "Processando..." : (
                      <>
                        <Zap className="w-6 h-6 fill-white" />
                        EU QUERO O IPHONE 17
                      </>
                    )}
                  </button>
                  
                  <div className="flex gap-3 items-center justify-center mt-4">
                     <ShieldCheck className="w-4 h-4 text-slate-400" />
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Inscrição Criptografada</p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Ad Horizontal 2 */}
        <div className="w-full flex justify-center mb-24 border-t border-slate-100 pt-12">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="468x60" className="flex md:hidden" />
        </div>

        {/* Extra Ads Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
             <AdBanner format="300x250" className="w-full rounded-2xl overflow-hidden border border-slate-100" />
             <AdBanner format="300x250" className="w-full rounded-2xl overflow-hidden border border-slate-100" />
             <AdBanner format="300x250" className="w-full rounded-2xl overflow-hidden border border-slate-100" />
             <AdBanner format="300x250" className="w-full rounded-2xl overflow-hidden border border-slate-100" />
        </div>

      </main>

      {/* Extreme Footer Ads */}
      <div className="w-full flex flex-col items-center bg-white py-16 border-t border-slate-100 gap-12">
         <div className="flex flex-col items-center gap-4">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="320x50" className="flex md:hidden" />
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-4">Ads by Adsterra Network</p>
         </div>
         
         <div className="flex items-center gap-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <Link to="/privacidade" className="hover:text-slate-900 transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-slate-900 transition-colors">Termos</Link>
            <Link to="/contato" className="hover:text-slate-900 transition-colors">Suporte</Link>
         </div>
      </div>

    </div>
  );
}

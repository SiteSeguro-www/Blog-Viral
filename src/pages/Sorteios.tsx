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
    
    // Check if user is already registered in this browser
    const isRegistered = localStorage.getItem("registered_iphone_sorteio");
    if (isRegistered) {
      setSuccess(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSuccess(true);
        // Save to browser cache
        localStorage.setItem("registered_iphone_sorteio", "true");
        localStorage.setItem("user_registration_data", JSON.stringify({
          ...formData,
          date: new Date().toISOString()
        }));
      } else {
        console.error("Erro ao registrar");
        setIsSubmitting(false);
        alert("Erro ao realizar inscrição. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setIsSubmitting(false);
      alert("Erro de conexão. Tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Top Professional Announcement Bar (Apple Style) */}
      <div className="w-full bg-slate-100 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-2 text-center text-[10px] md:text-xs font-bold tracking-tight md:tracking-normal flex items-center justify-center gap-3">
          <span className="bg-red-600 text-white px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[9px] font-black uppercase">AO VIVO</span>
          <span className="text-slate-950">SORTEIO OFICIAL: Participe agora e concorra ao novo iPhone 17 Pro Max Titanium.</span>
        </div>
      </div>

      {/* Top Banner Ad - Hidden on Mobile */}
      <div className="hidden lg:flex w-full justify-center bg-slate-50 py-3 border-b border-slate-100 z-10 transition-all duration-500">
        <AdBanner format="728x90" className="flex" />
      </div>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-0 pb-12 md:py-16">
        
        {/* Mobile-Only iPhone Image at the Top - Tight margin to "Subir" content */}
        <div className="lg:hidden mb-2 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="relative group overflow-visible">
            {/* Soft decorative background shadow behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-blue-50/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            
            <div className="relative z-10 w-[280px] h-[280px] mx-auto bg-[#FBFBFD] rounded-[4rem] border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] flex items-center justify-center overflow-hidden p-8">
              <img 
                src="/iphone-17-pro-max-apple-256gb-48mp-tela-6-9-super-retina-xdr-laranja-cosmico_1757696972_gg.webp" 
                alt="iPhone 17 Pro Max Orange Titanium Mobile" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Text block removed here and moved below buttons */}
          </div>
        </div>

        {/* Hero Section: Apple Style */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="flex flex-col gap-2 text-center lg:text-left relative">
            {/* Highlighted Sorteio Text Background Effect */}
            <span className="w-full text-center lg:text-left text-slate-100 font-black text-7xl md:text-[140px] lg:text-[160px] tracking-tighter uppercase leading-none absolute -top-10 md:-top-16 lg:-top-20 left-0 pointer-events-none select-none z-0 animate-in fade-in duration-1000 opacity-60">
              SORTEIO
            </span>

            <div className="flex flex-col gap-2 mb-4 relative z-10">
               <div className="relative z-10 flex flex-col items-center lg:items-start animate-in slide-in-from-left-8 duration-700">
                  <div className="text-orange-600 font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none drop-shadow-sm">
                    SORTEIO.
                  </div>
                  <div className="h-2 w-24 md:w-40 bg-orange-600 rounded-full mt-2"></div>
               </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-[1.05] relative z-10">
              iPhone 17 <br />
              <span className="text-slate-400 not-italic">Pro Max.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 relative z-10">
              Titanium. Tela ProMotion de 120Hz. <br />O smartphone mais poderoso do mundo pode ser seu.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start relative z-10">
              <a href="#form" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all active:scale-95 text-center">
                Participar Agora
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-green-500 fill-green-500/10" />
                <span>Cadastro Verificado</span>
              </div>
            </div>

            {/* Mobile-Only: Title and badge moved below the buttons for better flow and alignment */}
            <div className="lg:hidden mt-8 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-row items-center gap-2 mb-3">
                   <span className="text-slate-900 font-black text-[32px] tracking-tighter uppercase leading-none">Orange</span>
                   <span className="text-slate-400 font-black text-[32px] tracking-tighter uppercase leading-none">Titanium</span>
                </div>
                <p className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] bg-white px-6 py-2 rounded-full border border-orange-100 inline-block shadow-sm">Prêmio Exclusivo 2026</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-visible">
            {/* Desktop Image Block */}
            <div className="hidden lg:block relative">
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
                <p className="text-slate-900 font-black text-2xl tracking-tighter uppercase">Orange Titanium</p>
                <p className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] mt-1 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100">Prêmio Exclusivo 2026</p>
              </div>
            </div>

            {/* Mobile Ad Replacement Block */}
            <div className="lg:hidden w-full flex flex-col items-center gap-4 py-8 bg-slate-50/50 rounded-[40px] border border-slate-100 shadow-inner">
               <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Oferta Patrocinada</span>
               <AdBanner format="300x250" className="w-full !max-w-[300px] h-[250px] rounded-2xl shadow-lg" />
               <div className="flex items-center gap-4 group cursor-pointer mt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Ver Mais Ofertas</div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
               </div>
            </div>
          </div>
        </section>

        {/* Mobile-Only Ad moved further down below the whole Hero Section */}
        <div className="lg:hidden mb-12 flex flex-col items-center gap-4 py-8 border-y border-slate-50 animate-in fade-in duration-1000">
          <span className="text-[9px] text-slate-300 font-black uppercase tracking-widest">Publicidade</span>
          <AdBanner format="320x50" className="opacity-80 scale-100" />
        </div>

        {/* Ad Horizontal */}
        <div className="w-full flex justify-center mb-24 border-y border-slate-100 py-12 bg-slate-50/50">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="468x60" className="flex md:hidden" />
        </div>

        {/* Apple Style Sections */}
        <section className="grid lg:grid-cols-2 gap-8 mb-8">
           <div className="bg-white p-12 md:p-16 rounded-[48px] flex flex-col justify-end min-h-[500px] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-12 left-12 z-30">
                 <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tighter">Câmera Pro.</h3>
                 <p className="text-slate-950/80 font-bold text-lg md:text-xl leading-snug">Fotos dignas de cinema com <br />o novo sensor de 48MP.</p>
              </div>
              {/* Glassmorphism backing for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-20 z-0 bg-slate-50">
                 <img 
                  src="/iphone-17-pro-max-apple-256gb-48mp-tela-6-9-super-retina-xdr-laranja-cosmico_1757696972_gg.webp" 
                  alt="iPhone Camera Detail" 
                  className="w-full h-full object-contain scale-150 translate-x-1/4 translate-y-1/4 group-hover:scale-[1.6] transition-transform duration-[3s] ease-out"
                 />
              </div>
           </div>

           <div className="bg-slate-950 p-12 md:p-16 rounded-[48px] flex flex-col justify-end min-h-[500px] text-white relative overflow-hidden group">
              <div className="absolute top-12 left-12 z-30">
                 <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">A19 Pro.</h3>
                 <p className="text-white font-black text-lg md:text-xl leading-snug drop-shadow-md">O chip que redefine o que <br />um smartphone pode fazer.</p>
              </div>
              {/* Dark gradient for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12 z-0 bg-zinc-900">
                 <img 
                  src="/iphone-17-pro-max-apple-256gb-48mp-tela-6-9-super-retina-xdr-laranja-cosmico_1757696972_gg.webp" 
                  alt="iPhone Chip Detail" 
                  className="w-full h-full object-contain scale-[1.8] translate-y-1/4 group-hover:scale-[2] transition-transform duration-[4s] ease-out opacity-60"
                 />
              </div>
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
        <div className="w-full flex flex-col items-center gap-4 mb-16 py-8 border-y border-slate-50">
           <span className="text-[9px] text-slate-300 font-black uppercase tracking-[0.3em]">Patrocinado</span>
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="320x50" className="flex md:hidden" />
        </div>

        <section className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-slate-950">Por que confiar em nós?</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-black text-xl text-slate-900">Auditado</h4>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">Sorteio realizado via plataforma certificada e transparente.</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-black text-xl text-slate-900">Prêmio Real</h4>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">O iPhone é lacrado, com nota fiscal e garantia de 1 ano.</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-black text-xl text-slate-900">Histórico</h4>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">Mais de 250 prêmios já entregues pelo Blog Viral em 2 anos.</p>
             </div>
          </div>
        </section>

        {/* Ad Middle - Rectangle Wide */}
        <div className="w-full flex justify-center mb-24">
           <AdBanner format="728x90" className="hidden md:flex" />
           <AdBanner format="468x60" className="flex md:hidden" />
        </div>

        {/* Registration Form: The "Checkout" Experience */}
        <section id="form" className="max-w-xl mx-auto mb-24 animate-in fade-in zoom-in duration-1000 relative z-10">
          <div className="bg-white border border-slate-100 rounded-[40px] md:rounded-[48px] p-8 md:p-12 pt-12 md:pt-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-visible flex flex-col items-center">
            {/* Professional Badge - repositioned to avoid overlap */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-2 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl z-20 border border-white/10">
               <Trophy className="w-4 h-4 text-yellow-400 fill-yellow-400/20" />
               Inscrição Oficial
            </div>

            {success ? (
              <div className="flex flex-col items-center text-center py-12 w-full">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-blue-200 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-slate-950">Confirmado!</h2>
                <p className="text-slate-500 text-base font-bold mb-10 leading-relaxed">
                  Seu bilhete foi gerado com sucesso. <br />Verifique seu e-mail para acompanhar.
                </p>
                <Link to="/" className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all active:scale-95 shadow-xl shadow-slate-100">
                  Voltar ao Blog
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-10 w-full">
                <div className="text-center relative">
                  <h2 className="text-[32px] md:text-[40px] font-black tracking-tight mb-2 uppercase leading-none text-slate-950 italic">Participe Agora.</h2>
                  <div className="mt-4">
                    <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] bg-slate-50 inline-block px-5 py-2 rounded-full border border-slate-100">Grátis para todos</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="name">Seu Nome Completo</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva" 
                      className="w-full px-6 py-4.5 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-base font-bold text-slate-900 placeholder:text-slate-200 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="email">E-mail de Contato</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplo.com" 
                      className="w-full px-6 py-4.5 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-base font-bold text-slate-900 placeholder:text-slate-200 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="whatsapp">Seu WhatsApp</label>
                    <input 
                      id="whatsapp"
                      name="whatsapp"
                      type="tel" 
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(99) 99999-9999" 
                      className="w-full px-6 py-4.5 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-base font-bold text-slate-900 placeholder:text-slate-200 shadow-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-6 md:py-7 rounded-[24px] font-black text-lg md:text-xl transition-all hover:bg-blue-700 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 mt-4 shadow-[0_15px_40px_-5px_rgba(37,99,235,0.3)] group/btn relative overflow-hidden"
                  >
                    {isSubmitting ? (
                       <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Zap className="w-6 h-6 fill-white group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="tracking-tighter uppercase">EU QUERO O IPHONE 17</span>
                      </>
                    )}
                  </button>
                  
                  <div className="flex gap-3 items-center justify-center mt-6 py-3 border-t border-slate-50">
                     <ShieldCheck className="w-3.5 h-3.5 text-green-500 fill-green-500/10" />
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Sorteio Seguro & Criptografado</p>
                  </div>
                </form>
                
                {/* Micro Ad inside form container */}
                <div className="mt-4 flex flex-col items-center gap-3">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Patrocinadores Oficiais</p>
                   <AdBanner format="468x60" className="opacity-60 grayscale hover:grayscale-0 transition-all scale-90 md:scale-100" />
                </div>
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
         
         <div className="flex items-center gap-8 text-slate-600 text-xs font-black uppercase tracking-widest">
            <Link to="/privacidade" className="hover:text-slate-900 transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-slate-900 transition-colors">Termos</Link>
            <Link to="/contato" className="hover:text-slate-900 transition-colors">Suporte</Link>
         </div>
      </div>

    </div>
  );
}

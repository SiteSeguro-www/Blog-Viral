import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FF7A00] font-sans flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Minimal Header */}
      <header className="w-full h-20 bg-[#FF7A00] border-b border-black/10 px-4 md:px-8 flex items-center justify-between z-50 shrink-0">
        <Link to="/" className="flex items-center group">
          <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-[1.02]">
            <img 
              src="/favicon.png" 
              alt="Logo Blog Viral" 
              className="h-8 w-auto object-contain flex-shrink-0 drop-shadow-sm"
            />
            <span className="text-xl tracking-tight text-white flex-shrink-0 whitespace-nowrap font-bold">
              blog<span className="text-slate-900 font-black">viral</span>
            </span>
          </div>
        </Link>
        <Link to="/" className="text-sm font-bold text-slate-800 hover:text-white transition-colors">
          Voltar ao blog
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Copy & Benefits */}
        <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold w-fit mb-6 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>100% Seguro e Confiável</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Junte-se a milhares de <span className="text-slate-900">criadores de conteúdo</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-md font-medium drop-shadow-sm">
            Tenha acesso exclusivo a guias avançados, dicas de monetização e ferramentas indispensáveis para alavancar sua presença digital.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 bg-black/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white drop-shadow-sm">Conteúdo Fresco Toda Semana</h3>
                <p className="text-white/80 mt-1 font-medium leading-relaxed">Material exclusivo enviado diretamente para sua caixa de entrada, sem enrolação.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-black/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white drop-shadow-sm">Estratégias Testadas na Prática</h3>
                <p className="text-white/80 mt-1 font-medium leading-relaxed">Aprenda o que realmente funciona no mercado de conteúdo privado e redes sociais.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white drop-shadow-sm">Rede de Parcerias</h3>
                <p className="text-white/80 mt-1 font-medium leading-relaxed">Conheça as melhores ferramentas como PackZinhu com benefícios exclusivos a membros.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-150 group">
          {/* Decorative Blob */}
          <div className="absolute -inset-4 bg-gradient-to-r from-white/40 to-blue-500/20 opacity-0 blur-2xl rounded-[3rem] -z-10 transition-opacity duration-500 group-hover:opacity-100"></div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-xl group-hover:border-white/50 group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4 drop-shadow-sm group-hover:text-slate-900 transition-colors">Cadastro Realizado!</h2>
                <p className="text-slate-700 group-hover:text-slate-900 font-medium mb-8 max-w-sm transition-colors">
                  Bem-vindo à nossa comunidade VIP. Verifique seu e-mail para os próximos passos.
                </p>
                <Link to="/" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2">
                  Voltar ao Início
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 drop-shadow-sm group-hover:text-slate-900 transition-colors">Crie sua Conta Grátis</h2>
                  <p className="text-sm text-slate-500 mt-2 font-medium group-hover:text-slate-800 transition-colors">Comece a receber nossos guias de sucesso hoje.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left relative z-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors" htmlFor="name">Seu Nome</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all outline-none group-hover:bg-white/50 group-hover:border-white/40 group-hover:backdrop-blur-sm group-hover:placeholder-slate-600 group-hover:text-slate-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors" htmlFor="email">E-mail Profissional</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all outline-none group-hover:bg-white/50 group-hover:border-white/40 group-hover:backdrop-blur-sm group-hover:placeholder-slate-600 group-hover:text-slate-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors" htmlFor="password">Senha de Acesso</label>
                    <input 
                      id="password"
                      name="password"
                      type="password" 
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mínimo de 8 caracteres" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all outline-none group-hover:bg-white/50 group-hover:border-white/40 group-hover:backdrop-blur-sm group-hover:placeholder-slate-600 group-hover:text-slate-900"
                    />
                  </div>
                  
                  <div className="flex gap-2 items-start mt-2">
                    <input type="checkbox" id="terms" required className="mt-1.5 shrink-0 accent-slate-900 cursor-pointer" />
                    <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed font-medium cursor-pointer group-hover:text-slate-800 transition-colors">
                      Eu concordo com os Termos de Serviço e Política de Privacidade do Blog Viral.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-xl mt-4 shadow-lg shadow-black/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processando...</span>
                    ) : (
                      <>
                        Criar Minha Conta Agora
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-black/10 flex items-center justify-center gap-2 text-xs text-slate-400 group-hover:text-slate-800 font-medium font-mono text-center transition-colors">
                   <HelpCircle className="w-4 h-4" /> Seus dados estão criptografados de ponta a ponta.
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

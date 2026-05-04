import { type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdBanner } from "./AdBanner";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#FF7A00] font-sans flex flex-col overflow-hidden text-slate-900">
      {/* Header Navigation */}
      <header className="w-full h-20 bg-slate-900 border-b border-slate-800 px-4 md:px-8 flex items-center justify-between z-50 shrink-0 shadow-md">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-2 lg:gap-3">
              <img 
                src="/favicon.png" 
                alt="Logo Blog Viral" 
                className="h-10 sm:h-12 w-auto object-contain flex-shrink-0"
              />
              <span className="text-xl sm:text-2xl lg:text-3xl tracking-tighter text-white flex-shrink-0 whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}>
                Blog <span className="text-blue-500 ml-1">Viral</span>
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-white/90">
          <Link to="/" className={`hover:text-blue-500 transition-colors ${isHome ? 'text-blue-500' : ''}`}>
            Home
          </Link>
          <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Plataformas</a>
          <Link to="/" className="hover:text-blue-500 transition-colors">Sobre</Link>
          <Link to="/" className="hover:text-blue-500 transition-colors">Contato</Link>
        </nav>
        <a href="https://blogviral.site" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all text-center">
          Cadastrar-se <span className="hidden sm:inline">no Blog Viral</span>
        </a>
      </header>

      {/* Main Layout Grid */}
      <main className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 md:p-6 gap-6 relative overflow-y-auto">
        
        {/* Left Sidebar Ad */}
        <aside className="hidden lg:flex flex-col gap-4 w-40 shrink-0">
          <AdBanner provider="Adsterra" format="vertical" />
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-300 text-[10px] font-mono min-h-[200px] shadow-sm">
            <span>PUBLICIDADE</span>
          </div>
        </aside>

        {/* Content Center */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-3xl lg:max-w-none mx-auto pb-10">
          {children}
        </div>

        {/* Right Sidebar Ad */}
        <aside className="hidden lg:flex flex-col gap-4 w-60 shrink-0">
          <div className="flex-1 bg-white border border-slate-200 rounded-[32px] flex flex-col items-center p-6 text-center shadow-md">
            <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">Recomendado</h4>
            <div className="w-full aspect-square bg-slate-50 rounded-2xl mb-6 border border-slate-100 flex items-center justify-center shadow-inner group overflow-hidden">
               <img src="https://packzinhu.online/assets/img/hero-img.png" alt="PackZinhu" className="w-3/4 transform group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Venda seu conteúdo no melhor site do Brasil. Pagamentos rápidos via PIX.</p>
            <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs uppercase hover:bg-blue-700 transition-all shadow-md">Visitar Agora</a>
          </div>
          
          <div className="h-40 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-300 text-[10px] font-mono shadow-sm">
            <span>BANNER ADS</span>
          </div>
        </aside>
      </main>

      {/* Footer Bar */}
      <footer className="bg-slate-900 px-4 md:px-8 py-10 flex flex-col gap-8 text-slate-400 border-t border-slate-800 shrink-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="Logo Blog Viral" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
              <span className="text-white text-xl md:text-2xl tracking-tighter whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}>Blog <span className="text-blue-600 ml-1">Viral</span></span>
            </div>
            <p className="text-sm max-w-xs mt-2">As melhores dicas para você crescer e lucrar no mercado de conteúdo digital.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">PackZinhu</a>
            <Link to="/" className="hover:text-blue-500 transition-colors">Privacidade</Link>
            <Link to="/" className="hover:text-blue-500 transition-colors">Termos</Link>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest gap-4">
          <div>© {new Date().getFullYear()} <a href="https://blogviral.site" className="hover:text-blue-500">Blog Viral</a> - Todos os direitos reservados</div>
          <div className="flex gap-4">
            <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-black hover:text-blue-500">PACKZINHU ONLINE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

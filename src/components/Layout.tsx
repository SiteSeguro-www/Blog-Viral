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
            <div className="flex items-center">
              {/* Replace with the uploaded image logo.png */}
              <img 
                src="/logo.png" 
                alt="Blog Viral" 
                className="h-[135px] w-auto object-contain -ml-[26px] -mr-[17px] mb-0"
                onError={(e) => {
                  // Fallback if image isn't uploaded yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                </div>
                <span className="text-xl font-black tracking-tighter text-white ml-1">
                  Blog <span className="text-blue-500">Viral</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-white/90">
          <Link to="/" className={`hover:text-blue-500 transition-colors ${isHome ? 'text-blue-500' : ''}`}>
            Home
          </Link>
          <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Plataformas</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Sobre</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contato</a>
        </nav>
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all text-center">
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
            <span className="text-white font-black text-2xl">Blog <span className="text-blue-600">Viral</span></span>
            <p className="text-sm max-w-xs">As melhores dicas para você crescer e lucrar no mercado de conteúdo digital.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">PackZinhu</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Termos</a>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto pt-8 border-t border-slate-800 flex justify-between items-center text-[11px] uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Blog Viral - Todos os direitos reservados</div>
          <div className="flex gap-4">
            <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-black hover:text-blue-500">PACKZINHU ONLINE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

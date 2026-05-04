import { type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdBanner } from "./AdBanner";
import { PackZinhuPromo } from "./PackZinhuPromo";
import { SitePrompts } from "./SitePrompts";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#FF7A00] font-sans flex flex-col text-slate-900 overflow-x-hidden">
      <SitePrompts />
      {/* Header Navigation */}
      <header className="w-full h-20 bg-slate-900 border-b border-slate-800 px-4 md:px-8 flex items-center justify-between z-50 shrink-0 shadow-md">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-[1.02]">
              <img 
                src="/favicon.png" 
                alt="Logo Blog Viral" 
                className="h-8 w-auto object-contain flex-shrink-0 drop-shadow-sm"
              />
              <span className="text-xl tracking-tight text-white flex-shrink-0 whitespace-nowrap font-bold">
                blog<span className="text-black font-black">viral</span>
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-white/90">
          <Link to="/" className={`hover:text-blue-500 transition-colors ${isHome ? 'text-blue-500' : ''}`}>
            Home
          </Link>
          <Link to="/" className="hover:text-blue-500 transition-colors">Artigos</Link>
          <Link to="/sobre" className="hover:text-blue-500 transition-colors">Sobre</Link>
          <Link to="/contato" className="hover:text-blue-500 transition-colors">Contato</Link>
        </nav>
        <Link to="/cadastro" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all text-center">
          Cadastrar-se <span className="hidden sm:inline">no Blog Viral</span>
        </Link>
      </header>

      {/* Main Layout Grid */}
      <main className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 md:p-6 gap-6 relative">
        
        {/* Left Sidebar Ad */}
        <aside className="hidden lg:flex flex-col gap-6 w-[160px] shrink-0">
          <AdBanner format="160x600" />
          <AdBanner format="160x600" />
          <AdBanner format="160x600" />
          <AdBanner format="160x600" />
          <AdBanner format="160x300" className="sticky top-24" />
        </aside>

        {/* Content Center */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-3xl lg:max-w-none mx-auto pb-10">
          {children}
        </div>

        {/* Right Sidebar Ad */}
        <aside className="hidden xl:flex flex-col gap-6 w-[300px] shrink-0">
          <PackZinhuPromo />
          <AdBanner format="300x250" />
          <AdBanner format="300x250" />
          <AdBanner format="300x250" />
          <AdBanner format="300x250" />
          <AdBanner format="300x250" className="sticky top-24" />
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
            <Link to="/privacidade" className="hover:text-blue-500 transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-blue-500 transition-colors">Termos</Link>
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

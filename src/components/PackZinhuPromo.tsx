import { Link } from "react-router-dom";

export function PackZinhuPromo() {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-200 relative w-full group">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 z-0" />
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-blue-200/50 to-transparent z-0" />
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center gap-4">
        <h4 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Patrocinado</h4>
        
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl text-left shadow-sm border border-white flex gap-2 items-center">
            <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="text-xs font-bold text-slate-700 leading-tight">Você ainda usa OnlyFans?</span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl text-left shadow-sm border border-white flex gap-2 items-center">
             <div className="bg-purple-100 text-purple-600 p-1.5 rounded-lg shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="text-xs font-bold text-slate-700 leading-tight">Você ainda usa Privacy?</span>
          </div>
          
          <div className="bg-red-50/80 backdrop-blur-sm px-3 py-2 rounded-xl text-left shadow-sm border border-white flex gap-2 items-center">
            <div className="bg-red-100 text-red-600 p-1.5 rounded-lg shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <span className="text-xs font-bold text-red-600 leading-tight">Pare de perder dinheiro!</span>
          </div>
        </div>

        <div className="py-2">
          <p className="text-sm font-bold text-slate-800">O novo jeito de vender conteúdo 🔥</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Pack<span className="text-blue-600">Zinhu</span>
          </h2>
          <div className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-1">
            A Melhor Alternativa
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 w-full mt-2">
            <div className="flex flex-col items-center gap-1">
                <span className="bg-blue-100 p-1.5 rounded-full text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
                <span className="text-[9px] font-bold text-slate-800 uppercase text-center">100%<br/>Privado</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="bg-red-100 p-1.5 rounded-full text-red-600"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span>
                <span className="text-[9px] font-bold text-slate-800 uppercase text-center">Saque<br/>Rápido</span>
            </div>
        </div>

        <a href="https://packzinhu.online" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-bold flex flex-col items-center justify-center hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl mt-2 group-hover:scale-[1.02]">
          <span className="text-[15px] uppercase tracking-wide">Acesse Agora</span>
          <span className="text-[10px] font-normal opacity-80">packzinhu.online</span>
        </a>
      </div>
    </div>
  );
}

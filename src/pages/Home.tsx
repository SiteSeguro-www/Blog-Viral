import { Link } from "react-router-dom";
import { getArticles } from "../data/articles";
import { AdBanner } from "../components/AdBanner";
import { useEffect } from "react";

export function Home() {
  const articles = getArticles();

  useEffect(() => {
    document.title = "Blog Viral - Dicas e Estratégias para Monetização Digital";
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Top Ad - Responsive */}
      <div className="w-full">
        <AdBanner format="728x90" className="hidden md:flex mb-2" />
        <AdBanner format="320x50" className="flex md:hidden mb-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {articles.map((article, idx) => {
          if (idx === 0) {
            // Hero Article
            return (
              <div key={article.slug} className="sm:col-span-2 w-full bg-white border border-slate-200 p-6 md:p-8 flex flex-col justify-end relative group overflow-hidden shadow-xl rounded-[32px] min-h-[280px]">
                <div className="absolute top-6 right-6 bg-blue-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Destaque</div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight max-w-lg">
                  {article.title}
                </h1>
                <p className="text-slate-600 mt-4 line-clamp-2 max-w-lg text-base leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link to={"/" + article.slug} className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all inline-block uppercase tracking-wider">
                    Ler Agora
                  </Link>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    {article.date} • {article.readTime}
                  </span>
                </div>
              </div>
            );
          }
          
          return (
            <Link 
              key={article.slug} 
              to={"/" + article.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between group h-full min-h-[180px] shadow-sm transform hover:-translate-y-1"
            >
              <div>
                <h3 className="text-slate-900 font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-xs mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-600 uppercase font-black tracking-widest leading-none">{article.tags[0]}</span>
                  <span className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{article.date}</span>
                </div>
                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">→</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Ad */}
      <div className="w-full mt-4 flex flex-col items-center gap-4">
        <AdBanner format="728x90" className="hidden md:flex" />
        <AdBanner format="728x90" className="hidden md:flex" />
        
        <AdBanner format="468x60" className="hidden sm:flex md:hidden" />
        <AdBanner format="468x60" className="hidden sm:flex md:hidden" />
        
        <AdBanner format="300x250" className="flex sm:hidden" />
        <AdBanner format="320x50" className="flex sm:hidden" />
      </div>
    </div>
  );
}

import { useParams, Navigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticleBySlug } from "../data/articles";
import { AdBanner } from "../components/AdBanner";
import { useEffect } from "react";
import { Comments } from "../components/Comments";

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = article.title + " | Blog Viral";
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out flex flex-col gap-6 w-full max-w-3xl mx-auto pb-12">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-slate-900 transition-colors w-fit bg-white/50 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full uppercase tracking-widest shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Voltar para Home
      </Link>

      {/* Top Ad */}
      <div className="w-full mb-2 flex justify-center">
        <AdBanner format="728x90" className="hidden md:flex" />
        <AdBanner format="468x60" className="hidden sm:flex md:hidden" />
        <AdBanner format="320x50" className="flex sm:hidden" />
      </div>

      <div className="bg-white border border-slate-200 shadow-xl rounded-[32px] p-6 md:p-10 relative overflow-hidden text-slate-900">
        
        <header className="mb-8 relative z-10 border-b border-slate-100 pb-8">
          <div className="flex flex-wrap gap-2 mb-4">
             {article.tags.map(tag => (
               <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
                 {tag}
               </span>
             ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                 {article.author.charAt(0)}
               </div>
               <div className="flex flex-col">
                 <span className="text-sm font-bold text-slate-900">{article.author}</span>
                 <span className="text-xs text-slate-500 font-medium">{article.date} • {article.readTime}</span>
               </div>
            </div>
            
            <div className="flex items-center gap-2">
               <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors" title="Compartilhar">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
               </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 prose prose-slate prose-lg md:prose-xl max-w-none 
          prose-headings:font-black prose-headings:text-slate-900 
          prose-a:text-blue-600 prose-a:font-bold prose-a:underline hover:prose-a:text-blue-700
          prose-strong:text-slate-900
          prose-li:marker:text-orange-500
          prose-p:leading-loose prose-p:text-slate-700
          prose-li:text-slate-700"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="transition-colors border-b-2 border-blue-200 hover:border-blue-500 no-underline pb-0.5" />
              ),
              h2: ({ node, ...props }) => (
                <h2 {...props} className="text-2xl md:text-3xl mt-12 mb-6 text-slate-900" />
              ),
              h3: ({ node, ...props }) => (
                <h3 {...props} className="text-xl md:text-2xl mt-8 mb-4 text-slate-800" />
              ),
              ul: ({ node, ...props }) => (
                <ul {...props} className="my-6 space-y-3 pl-6 list-disc" />
              ),
              p: ({ node, ...props }) => (
                <p {...props} className="mb-6" />
              ),
              table: ({ node, ...props }) => (
                <div className="my-8 overflow-x-auto rounded-[24px] md:rounded-[32px] bg-slate-900 p-0 md:p-4 shadow-2xl">
                  <table {...props} className="w-full text-left border-collapse min-w-[500px] [&_strong]:!text-white [&_strong]:italic [&_strong]:tracking-tighter [&_strong]:uppercase" />
                </div>
              ),
              thead: ({ node, ...props }) => <thead {...props} className="border-b border-slate-800/80" />,
              tbody: ({ node, ...props }) => <tbody {...props} className="divide-y divide-slate-800/80" />,
              tr: ({ node, ...props }) => <tr {...props} className="group hover:bg-slate-800/20 transition-colors" />,
              th: ({ node, ...props }) => (
                <th 
                  {...props} 
                  className="py-6 px-4 md:px-6 uppercase tracking-widest text-[10px] md:text-[11px] font-black first:text-slate-400 [&:nth-child(2)]:text-slate-400 last:text-blue-500 whitespace-nowrap" 
                />
              ),
              td: ({ node, ...props }) => (
                <td 
                  {...props} 
                  className="py-6 px-4 md:px-6 text-xs md:text-sm transition-colors first:text-white first:italic first:tracking-tighter first:uppercase [&:nth-child(2)]:text-slate-400 [&:nth-child(2)]:font-medium last:text-blue-400 last:font-bold whitespace-nowrap" 
                />
              ),
              strong: ({ node, ...props }) => (
                <strong {...props} />
              )
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        <Comments />

      </div>

      {/* Article End Call to Action */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center justify-center gap-4 mt-2 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-blue-50 opacity-50"></div>
        <h3 className="text-2xl font-black text-slate-900 relative z-10">Pronto para começar?</h3>
        <p className="text-slate-600 max-w-md relative z-10 text-sm md:text-base leading-relaxed">Junte-se a milhares de criadores e comece a rentabilizar o seu conteúdo com as melhores taxas do mercado hoje.</p>
        <a 
          href="https://packzinhu.online" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1 relative z-10"
        >
          Criar Perfil no PackZinhu
        </a>
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
    </article>
  );
}

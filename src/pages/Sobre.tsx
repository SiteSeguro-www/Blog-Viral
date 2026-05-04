import { useEffect } from "react";
import { ArrowRight, Mail, HelpCircle, CheckCircle2 } from "lucide-react";

export function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Blog Viral";
  }, []);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="bg-white border border-slate-100 p-8 md:p-12 shadow-xl rounded-[32px] w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Sobre o <span className="text-blue-600">Blog Viral</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
          Nascemos com um propósito claro: ajudar criadores de conteúdo a alcançarem a independência financeira através do mercado digital. Desmistificamos estratégias, entregamos táticas validadas e construímos uma ponte segura entre o seu talento e o lucro.
        </p>
        
        <div className="h-px bg-slate-100 w-full my-8"></div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">Nossa Missão</h2>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Estratégias Reais</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Focamos em conteúdo testado e aprovado. Nada de "fórmulas mágicas", apenas o que funciona no mercado digital de verdade.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Segurança em 1º Lugar</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Guiamos criadores a protegerem sua identidade, utilizar ferramentas corretas e evitar golpes comuns na internet.
            </p>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8">
          Acreditamos que a economia de criadores ainda está no início. Estar bem posicionado e entender os mecanismos de tráfego, engajamento e conversão é o que separa os amadores dos profissionais de sucesso.
        </p>

        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Faça parte da nossa comunidade</h3>
            <p className="text-slate-400 text-sm">Receba as melhores dicas na sua caixa de entrada.</p>
          </div>
          <a href="/cadastro" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-900/20 active:scale-95">
            Criar Conta Grátis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

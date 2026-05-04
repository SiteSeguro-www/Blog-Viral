import { AdBanner } from "../components/AdBanner";

export function Terms() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Top Ad - Responsive */}
      <div className="w-full">
        <AdBanner format="728x90" className="hidden md:flex mb-2" />
        <AdBanner format="320x50" className="flex md:hidden mb-2" />
      </div>

      <div className="bg-white border border-slate-200 shadow-xl rounded-[32px] p-6 md:p-10 relative overflow-hidden text-slate-900">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Termos de Uso
        </h1>
        
        <div className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Termos</h2>
          <p>
            Ao acessar ao site Blog Viral, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Blog Viral, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Blog Viral;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Links Externos e Anúncios</h2>
          <p>
            O Blog Viral pode exibir anúncios e conter links para sites de terceiros que não são controlados e nem operados pelo Blog Viral. O Blog Viral não endossa e não é responsável pelo conteúdo de qualquer site vinculado. O uso de tais sites e as interações com anúncios são por sua conta e risco.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Modificações</h2>
          <p>
            O Blog Viral pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Lei Aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do seu país e estado, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="w-full mt-4 flex flex-col items-center gap-4">
        <AdBanner format="728x90" className="hidden md:flex" />
        <AdBanner format="320x50" className="flex md:hidden" />
      </div>
    </div>
  );
}

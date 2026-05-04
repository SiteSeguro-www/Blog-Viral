import { AdBanner } from "../components/AdBanner";
import { Link } from "react-router-dom";

export function Privacy() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Top Ad - Responsive */}
      <div className="w-full flex justify-center">
        <AdBanner format="728x90" className="hidden md:flex mb-2" />
        <AdBanner format="468x60" className="hidden sm:flex md:hidden mb-2" />
        <AdBanner format="320x50" className="flex sm:hidden mb-2" />
      </div>

      <div className="bg-white border border-slate-200 shadow-xl rounded-[32px] p-6 md:p-10 relative overflow-hidden text-slate-900">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Política de Privacidade
        </h1>
        
        <div className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-6">
          <p>
            A sua privacidade é importante para nós. É política do Blog Viral respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Blog Viral, e outros sites que possuímos e operamos.
          </p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Uso de Cookies e Anúncios</h2>
          <p>
            O nosso site pode usar "cookies" para melhorar a experiência do usuário. O seu navegador da web coloca cookies no seu disco rígido para fins de manutenção de registros e às vezes para rastrear informações sobre eles. Você pode escolher configurar o seu navegador para recusar cookies ou para alertá-lo quando os cookies estão sendo enviados. Note no entanto, que algumas partes do Site podem não funcionar corretamente.
          </p>
          <p>
            Exibimos anúncios no nosso site (via redes de parceiros). Esses provedores terceiros ou redes de publicidade utilizam a tecnologia nos anúncios e links que aparecem no nosso site, que são enviados diretamente para os seus navegadores. Eles recebem automaticamente o seu endereço IP quando isso ocorre.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Compartilhamento de informações</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Aceite destes termos</h2>
          <p>
            Ao utilizar este site, você expressa a sua aceitação desta política. Se você não concordar com esta política, por favor, não use o nosso site. O uso contínuo do site após a publicação de alterações a esta política será considerado a sua aceitação a essas alterações.
          </p>
          <p className="font-bold">
            Data de vigência: Maio de 2026.
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

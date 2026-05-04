import { useState, useEffect } from "react";
import { Mail, CheckCircle2, Send, MessageSquare } from "lucide-react";

export function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = "Contato | Blog Viral";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="bg-white border border-slate-100 p-8 md:p-12 shadow-xl rounded-[32px] w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Fale <span className="text-blue-600">Conosco</span>
            </h1>
            <p className="text-slate-500 font-medium">Tem alguma dúvida, sugestão ou proposta?</p>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full my-8"></div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900">Como podemos ajudar?</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Nossa equipe está pronta para responder suas dúvidas sobre estratégias, parcerias comerciais, ou qualquer problema que tenha encontrado em nossa plataforma.
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-white p-2 border border-slate-200 rounded-md shadow-sm">
                <Mail className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail</span>
                <span className="text-slate-900 font-medium">contato@blogviral.site</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600 text-sm">
                  Obrigado por nos contatar. Retornaremos o mais rápido possível para o e-mail informado.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Seu Nome</label>
                    <input 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Seu E-mail</label>
                    <input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Selecione um assunto...</option>
                    <option value="Dúvida Geral">Dúvida Geral</option>
                    <option value="Parceria/Publicidade">Parceria Comercial / Publicidade</option>
                    <option value="Reportar Erro">Reportar um Erro</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Mensagem</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos te ajudar hoje?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-2 w-full sm:w-auto self-end bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 shadow-lg shadow-black/10"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Enviar Mensagem
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

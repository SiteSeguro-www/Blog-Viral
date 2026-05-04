import { useState } from "react";
import { cn } from "../lib/utils";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "AnonCriadora",
      text: "Nossa, esse artigo me ajudou DEMAIS a entender qual plataforma escolher! Muito obrigada pelas dicas.",
      date: "Hoje"
    },
    {
      id: "2",
      name: "Luíza Fernandes",
      text: "Eu estava em dúvida sobre a segurança do saque, agora ficou tudo mais claro. Vou abrir minha loja hoje mesmo.",
      date: "Ontem"
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: newName,
      text: newText,
      date: "Agora mesmo"
    };

    setComments([...comments, newComment]);
    setNewName("");
    setNewText("");
  };

  return (
    <div className="mt-12 w-full">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        Comentários ({comments.length})
      </h3>

      <div className="bg-white border text-slate-900 border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h4 className="font-semibold text-slate-700 mb-4">Deixe um comentário:</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Seu nome"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
            required
          />
          <textarea 
            placeholder="O que achou deste artigo?"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 resize-y"
            required
          />
          <button 
            type="submit"
            className="self-end px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md uppercase text-xs tracking-widest"
          >
            Publicar 
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        {comments.map(c => (
          <div key={c.id} className="bg-white/80 backdrop-blur-sm border border-slate-200 p-5 rounded-xl shadow-sm text-slate-900">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-blue-700">{c.name}</span>
              <span className="text-xs text-slate-400 font-medium">{c.date}</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

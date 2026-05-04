import React, { useEffect } from 'react';
import { useAdContext } from '../contexts/AdContext';
import { ShieldAlert, ToggleLeft, ToggleRight, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminViral() {
  const { showAds, toggleAds } = useAdContext();

  useEffect(() => {
    document.title = 'Admin | Blog Viral';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-900">
      <header className="w-full h-20 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between z-50 shrink-0">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-blue-500" />
          <span className="text-xl tracking-tight text-white font-bold">
            blog<span className="text-blue-500 font-black">admin</span>
          </span>
        </div>
        <Link to="/" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
          Voltar ao site
        </Link>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <LayoutDashboard className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">Painel de Controle</h1>
              <p className="text-slate-500 font-medium mt-1">Gerencie configurações exclusivas do sistema.</p>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Control Config: Adsterra Banners */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all hover:border-slate-300">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-slate-900">Status dos Banners (Adsterra)</h3>
                <p className="text-slate-600 text-sm font-medium">
                  Ative ou desative todos os banners publicitários globalmente no site. 
                  (Estado atual: <strong className={showAds ? "text-green-600" : "text-red-500"}>{showAds ? "ATIVOS" : "DESATIVADOS"}</strong>)
                </p>
              </div>
              <button
                onClick={toggleAds}
                className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg ${showAds ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20' : 'bg-green-500 hover:bg-green-600 shadow-green-500/20'}`}
              >
                {showAds ? (
                  <>
                    <ToggleRight className="w-6 h-6" />
                    <span>Desativar Ads</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-6 h-6" />
                    <span>Ativar Ads</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

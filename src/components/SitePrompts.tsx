import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SitePrompts() {
  const [showCookie, setShowCookie] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    // Check Cookies
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setShowCookie(true);
    }

    // Attempt pushing notification permissions on first visit
    const hasPromptedForNotification = localStorage.getItem("notification_prompted");
    if (!hasPromptedForNotification && "Notification" in window) {
      // We wait a few seconds so it's not totally aggressive
      const timer = setTimeout(() => {
        if (Notification.permission === "default") {
          Notification.requestPermission().then(() => {
             localStorage.setItem("notification_prompted", "true");
          });
        }
      }, 3000);
      return () => clearTimeout(timer);
    }

    // App Install prompt logic
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Wait a moment then show our install banner
      setTimeout(() => setShowInstall(true), 5000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowCookie(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowCookie(false);
  };

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  const handleDismissInstall = () => {
    setShowInstall(false);
  };

  return (
    <>
      {/* Install App Prompt */}
      {showInstall && (
        <div className="fixed top-4 left-4 right-4 md:left-auto md:w-96 md:right-4 z-[9999] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 flex gap-4 animate-in slide-in-from-top-4 fade-in duration-500">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Instale o nosso App</h4>
            <p className="text-xs text-slate-600 mb-3">Tenha o Blog Viral sempre com você, rápido e leve.</p>
            <div className="flex gap-2">
              <button onClick={handleInstallApp} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                Instalar
              </button>
              <button onClick={handleDismissInstall} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                Agora Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-slate-900 text-slate-300 p-4 shadow-2xl border-t border-slate-800 animate-in slide-in-from-bottom flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <p className="text-sm max-w-4xl">
            Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa{' '}
            <Link to="/privacidade" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Política de Privacidade</Link>
            . Ao continuar navegando, você concorda com estas condições.
          </p>
          <div className="flex shrink-0 gap-3 w-full md:w-auto">
            <button 
              onClick={handleRejectCookies}
              className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-sm font-bold transition-colors"
            >
              Rejeitar
            </button>
            <button 
              onClick={handleAcceptCookies}
              className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
}

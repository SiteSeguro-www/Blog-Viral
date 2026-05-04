import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdContextType {
  showAds: boolean;
  toggleAds: () => void;
}

const AdContext = createContext<AdContextType | undefined>(undefined);

export function AdProvider({ children }: { children: React.ReactNode }) {
  const [showAds, setShowAds] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);

  // Fetch initial config from server
  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.showAds === 'boolean') {
          setShowAds(data.showAds);
        }
      })
      .catch(err => console.error("Failed to load config", err))
      .finally(() => setLoading(false));
  }, []);

  const toggleAds = async () => {
    const newState = !showAds;
    // Optimistic update
    setShowAds(newState);
    try {
      await fetch('/api/config/ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showAds: newState })
      });
    } catch (err) {
      console.error("Failed to save config", err);
      // Revert if failed
      setShowAds(showAds);
    }
  };

  if (loading) return null; // Or a simple loader if feeling fancy

  return (
    <AdContext.Provider value={{ showAds, toggleAds }}>
      {children}
    </AdContext.Provider>
  );
}

export function useAdContext() {
  const context = useContext(AdContext);
  if (context === undefined) {
    throw new Error('useAdContext must be used within an AdProvider');
  }
  return context;
}

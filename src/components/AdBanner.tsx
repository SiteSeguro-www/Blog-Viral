import { cn } from "../lib/utils";
import { useAdContext } from "../contexts/AdContext";

interface AdBannerProps {
  format: '468x60' | '300x250' | '160x600' | '160x300' | '320x50' | '728x90' | 'top-pc-vast';
  className?: string;
  id?: string;
}

const AD_CONFIGS = {
  '468x60': { width: 468, height: 60, file: '468x60' },
  '300x250': { width: 300, height: 250, file: '300x250' },
  '160x600': { width: 160, height: 600, file: '160x600' },
  '160x300': { width: 160, height: 300, file: '160x300' },
  '320x50': { width: 320, height: 50, file: '320x50' },
  '728x90': { width: 728, height: 90, file: '728x90' },
  'top-pc-vast': { width: 728, height: 90, file: 'top-pc' },
};

export function AdBanner({ format, className, id }: AdBannerProps) {
  const config = AD_CONFIGS[format];
  const { showAds } = useAdContext();

  if (!showAds) return null;

  return (
    <div 
      id={id}
      className={cn(
        "flex items-center justify-center overflow-hidden transition-all mx-auto bg-transparent",
        className
      )}
      style={{ 
        width: '100%', 
        maxWidth: config.width, 
        minHeight: config.height,
        height: config.height
      }}
    >
      <iframe 
        src={`/ad-${config.file}.html`} 
        width={config.width}
        height={config.height}
        frameBorder="0"
        scrolling="no"
        className="max-w-full block"
        style={{ border: 'none', overflow: 'hidden' }}
      />
    </div>
  );
}

import { cn } from "../lib/utils";

interface AdBannerProps {
  provider: "Adsterra" | "Exoclick";
  format?: "vertical" | "horizontal" | "rectangle";
  className?: string;
}

export function AdBanner({ provider, format = "vertical", className }: AdBannerProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden flex flex-col items-center justify-center rounded-2xl bg-white/5 border border-white/20 text-white/30 text-[10px] font-mono tracking-widest transition-all",
        format === "vertical" ? "w-full min-h-[400px]" : "",
        format === "horizontal" ? "w-full h-[90px]" : "",
        format === "rectangle" ? "w-full aspect-video sm:w-[300px] sm:h-[250px]" : "",
        className
      )}
    >
      <span className={cn("relative z-10", format === "vertical" ? "rotate-90 whitespace-nowrap" : "")}>
        {provider.toUpperCase()} BANNER
      </span>
      {format !== "vertical" && (
         <span className="mt-2 opacity-50 relative z-10 block text-center">
           {format === "horizontal" ? "728x90" : "300x250"}
         </span>
      )}
    </div>
  );
}

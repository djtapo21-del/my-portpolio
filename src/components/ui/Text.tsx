import { cn } from '../../lib/utils';

export function Hero({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h1 className={cn("text-2xl md:text-3xl font-semibold text-text-main tracking-tight leading-tight", className)}>{children}</h1>;
}

export function Title({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h2 className={cn("text-xl md:text-2xl font-semibold text-text-main tracking-tight leading-tight", className)}>{children}</h2>;
}

export function SubTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={cn("text-sm font-semibold text-text-main tracking-wide leading-snug", className)}>{children}</h3>;
}

export function Body({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-sm text-text-body leading-relaxed font-normal tracking-normal", className)}>{children}</p>;
}

export function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("text-xs font-bold uppercase text-text-muted tracking-widest leading-none", className)}>{children}</span>;
}

export function Caption({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("text-xs text-text-muted font-normal tracking-normal", className)}>{children}</span>;
}

export function Status({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("text-xs font-semibold uppercase text-brand-high tracking-wider leading-none", className)}>{children}</span>;
}

export function Interactive({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("text-sm font-medium text-text-body transition-colors group-hover:text-white duration-300", className)}>{children}</span>;
}
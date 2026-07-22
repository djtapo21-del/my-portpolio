// src/components/ui/Tag.tsx
import { cn } from '../../lib/utils';

export function Tag({
  children,
  color = 'zinc',
  className
}: {
  children: string,
  color?: 'blue' | 'yellow' | 'sky' | 'green' | 'purple' | 'zinc',
  className?: string
}) {
  const styles = {
    blue: 'bg-tag-blue/10 text-tag-blue border-tag-blue/20',
    yellow: 'bg-tag-yellow/10 text-tag-yellow border-tag-yellow/20',
    sky: 'bg-tag-sky/10 text-tag-sky border-tag-sky/20',
    green: 'bg-tag-green/10 text-tag-green border-tag-green/20',
    purple: 'bg-tag-purple/10 text-tag-purple border-tag-purple/20',
    zinc: 'bg-zinc-800 text-zinc-300 border-zinc-700'
  };

  return (
    // font-black(900) 대신 font-semibold(600)로 변경
    <span className={cn("px-2 py-0.5 md:px-2.5 md:py-1 rounded-md md:rounded-lg text-[10px] md:text-xs font-semibold border", styles[color], className)}>
      {children}
    </span>
  );
}
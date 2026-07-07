// src/components/ui/Card.tsx
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'a' | 'section' | 'article' | 'button'
  variant?: 'default' | 'tile' | 'interactive'
  span?: 1 | 2 | 3
  justify?: 'start' | 'between'
  gap?: 'small' | 'medium' | 'large'
  href?: string
  target?: string
  rel?: string
}

export function Card({
  className,
  variant = 'default',
  as = 'div',
  span,
  justify = 'start',
  gap,
  children,
  ...props
}: CardProps) {

  const Tag = as as React.ElementType;

  const spans = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3"
  };

  const justifies = {
    start: "justify-start",
    between: "justify-between"
  };

  const gaps = {
    small: "gap-3",
    medium: "gap-6",
    large: "gap-8"
  };

  // 모바일에서도 기본 카드 테두리가 보이도록(bg-surface border-card-border p-6 rounded-3xl) 원복 완료
  const variants = {
    default: "bg-surface border-card-border p-6 md:p-8 rounded-3xl h-full text-left border",
    tile: "bg-white/[0.03] border-white/[0.05] p-5 rounded-2xl",
    interactive: "bg-surface border-card-border hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer active:scale-[0.98] group rounded-2xl p-3 flex flex-row items-center justify-between gap-0"
  };

  const resolvedGap = gap || (variant === 'tile' ? 'small' : 'medium');

  return (
    <Tag
      className={cn(
        "flex flex-col overflow-hidden",
        variants[variant],
        span ? spans[span] : "",
        justifies[justify],
        gaps[resolvedGap],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
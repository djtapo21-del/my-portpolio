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

  const variants = {
    default: "bg-transparent border-t-2 border-white/15 first:border-t-0 py-8 px-4 rounded-none md:bg-surface md:border md:border-card-border md:p-8 md:rounded-3xl h-full text-left",

    // 핵심 수정: border-transparent 를 border-none 으로 전면 교체하여 부모의 divide-y 필터링 차단 해결
    tile: "bg-transparent border-none p-0 rounded-none md:bg-white/[0.03] md:border-white/[0.05] md:p-5 md:rounded-2xl md:border",

    interactive: "bg-surface border-card-border hover:bg-white/10 hover:border-white/20 cursor-pointer group rounded-2xl p-3 flex flex-row items-center justify-between gap-0"
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
// src/components/ui/Typography.tsx
import React from 'react'

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'caption' | 'item'
  children: React.ReactNode
  className?: string
}

export default function Typography({ variant = 'body', children, className = '' }: TypographyProps) {
  const styles = {
    // 2xl(24px), 3xl(30px)
    h1: "text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight",

    // lg(18px), xl(20px)
    h2: "text-lg md:text-xl font-bold text-white tracking-tight text-left",

    // base(16px), lg(18px)
    h3: "text-base md:text-lg font-semibold text-zinc-100 text-left",

    // sm(14px), base(16px)
    body: "text-sm md:text-base text-zinc-400 leading-relaxed font-normal text-left",

    // [10px] -> text-[0.625rem], [11px] -> text-[0.7rem] 로 변환
    label: "text-[0.625rem] md:text-[0.7rem] font-bold uppercase text-zinc-500 leading-none",

    // xs(12px)
    caption: "text-xs text-zinc-500 font-medium text-left",

    // sm(14px)
    item: "text-sm font-medium text-left transition-colors duration-300 text-[var(--box-text)]"
  }

  const Tag = variant.startsWith('h') ? (variant as any) : 'p'
  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>
}
// src/components/ui/Box.tsx
import React from 'react'

interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'a' | 'button'
  variant?: 'default' | 'interactive' | 'none'
  padding?: 'none' | 'small' | 'medium' | 'large'
  gap?: 'none' | 'small' | 'medium' | 'large' // 내부 간격 추가
  rounded?: 'none' | 'standard' | 'extra'
  href?: string
}

export default function Box({
  as: Tag = 'div',
  variant = 'default',
  padding = 'medium',
  gap = 'none', // 기본값 none
  rounded = 'standard',
  className = '',
  children,
  ...props
}: BoxProps) {

  const styles = {
    base: "flex flex-col border transition-all duration-300 overflow-hidden",
    variant: {
      none: "border-transparent bg-transparent",
      default: "bg-white/5 border-white/10 text-white",
      interactive: `
        bg-white/5 border-white/10 cursor-pointer group/box active:scale-[0.98]
        text-zinc-300 [--box-text:theme(colors.zinc.300)] 
        hover:bg-white/10 hover:border-white/20 hover:[--box-text:white] 
        transition-all duration-300
      `
    },
    padding: {
      none: "p-0",
      small: "p-3",
      medium: "p-4 md:p-5",
      large: "p-6 md:p-8"
    },
    gap: { // 간격 공통 정의
      none: "gap-0",
      small: "gap-2",  // 8px
      medium: "gap-4", // 16px
      large: "gap-8"   // 32px
    },
    rounded: {
      none: "rounded-none",
      standard: "rounded-xl",
      extra: "rounded-[1.5rem] md:rounded-[2rem]"
    }
  }

  return (
    <Tag
      className={`${styles.base} ${styles.variant[variant]} ${styles.padding[padding]} ${styles.gap[gap]} ${styles.rounded[rounded]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
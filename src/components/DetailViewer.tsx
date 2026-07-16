// src/components/DetailViewer.tsx
// 📖 웹툰형 상세 뷰어 — 썸네일 클릭 시 오버레이로 열림
import { useEffect, useRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'

// ── 타입 정의 ──
export interface ContentItem {
    title?: string
    description?: string
    image: string
}

export interface DetailContent {
    title: string
    description: string
    thumbnail: string
    items: ContentItem[]
}

interface DetailViewerProps {
    open: boolean
    onClose: () => void
    content: DetailContent | null
}

export default function DetailViewer({ open, onClose, content }: DetailViewerProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)

    // ── ESC 키 닫기 ──
    useEffect(() => {
        if (!open) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [open, onClose])

    // ── 배경 스크롤 방지 ──
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [open])

    // ── 데스크탑: 클릭-드래그 스크롤 (웹툰 느낌) ──
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setIsDragging(true)
        setStartY(e.clientY)
        if (scrollRef.current) setScrollTop(scrollRef.current.scrollTop)
    }, [])

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return
        const delta = e.clientY - startY
        scrollRef.current.scrollTop = scrollTop - delta
    }, [isDragging, startY, scrollTop])

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    if (!open || !content) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className={cn(
                    "relative w-full max-w-5xl mx-4 max-h-[90vh] flex flex-col",
                    "bg-surface/95 border border-white/[0.06] rounded-2xl overflow-hidden"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── 헤더 ── */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] shrink-0">
                    <h2 className="text-lg font-semibold text-white tracking-wide">
                        {content.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors duration-200 text-lg leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* ── 콘텐츠 영역 (드래그 스크롤) ── */}
                <div
                    ref={scrollRef}
                    className={cn(
                        "flex-1 overflow-y-auto overscroll-contain p-4 md:p-8 space-y-8",
                        isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                    )}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {content.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            {/* 제목 (있을 때만) */}
                            {item.title && (
                                <h3 className="text-base font-semibold text-white/90 w-full text-left">
                                    {item.title}
                                </h3>
                            )}

                            {/* 설명 (있을 때만) */}
                            {item.description && (
                                <p className="text-sm text-white/50 w-full text-left -mt-2">
                                    {item.description}
                                </p>
                            )}

                            {/* 이미지 (예시: 색상 박스 — 실제 이미지로 교체) */}
                            <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/[0.06] flex items-center justify-center aspect-[16/9] md:aspect-video">
                                <span className="text-sm text-white/30 font-mono">
                                    {item.image}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* 하단 여백 */}
                    <div className="h-4" />
                </div>
            </div>
        </div>
    )
}
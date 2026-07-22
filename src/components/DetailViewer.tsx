// src/components/DetailViewer.tsx
// 📖 웹툰형 상세 뷰어 — 썸네일 클릭 시 오버레이로 열림
import { useEffect, useRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'

// ── 이미지 폴백 ──
function ViewerImage({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false)

    if (error) {
        return (
            <div className="w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center aspect-[16/9]">
                <span className="text-sm text-white/30 font-mono">{src}</span>
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full"
            onError={() => setError(true)}
        />
    )
}

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
            className="fixed inset-0 z-50 bg-black/90"
            onClick={onClose}
        >
            <div
                className="h-full w-full max-w-4xl mx-auto flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── 헤더 ── */}
                <div className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0">
                    <h2 className="text-base md:text-lg font-semibold text-white/90 tracking-wide">
                        {content.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white text-xl leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* ── 콘텐츠 영역 (드래그 스크롤) ── */}
                <div
                    ref={scrollRef}
                    className={cn(
                        "flex-1 overflow-y-auto overscroll-contain px-4 md:px-8 space-y-6 pb-8",
                        isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                    )}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {content.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <ViewerImage src={item.image} alt={item.title || content.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
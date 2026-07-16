// src/components/DetailCard.tsx
// 📸 상세 페이지 카드 — 썸네일을 클릭하면 웹툰형 뷰어(DetailViewer)가 열립니다
//
// 📝 데이터 수정 방법:
//   아래 contentData 배열에서 항목을 추가/삭제/수정하면 됩니다.
//   각 항목의 items 배열에 (제목+설명+이미지)를 순서대로 나열하세요.
import { useState } from 'react'
import { Card } from './ui/Card'
import { Title, Body } from './ui/Text'
import DetailViewer, { type DetailContent } from './DetailViewer'

// ── 데이터 (여기만 수정하세요) ──
// 각 항목의 items 배열에 (제목+설명+이미지)를 순서대로 나열하세요.
const contentData: DetailContent[] = [
    {
        title: "프로젝트 A",
        description: "프로젝트 A에 대한 간단한 설명",
        thumbnail: "/media/thumbnails/placeholder-a.png",
        items: [
            {
                title: "메인 화면",
                description: "메인 화면의 전체적인 레이아웃입니다",
                image: "/media/project01/01-main.webp",
            },
            {
                title: "상세 페이지",
                description: "상세 페이지에서 확인할 수 있는 주요 기능들",
                image: "/media/project01/02-detail.webp",
            },
            {
                image: "/media/project01/03-result.webp",
            },
        ],
    },
    {
        title: "프로젝트 B",
        description: "프로젝트 B에 대한 간단한 설명",
        thumbnail: "/media/thumbnails/placeholder-b.png",
        items: [
            {
                title: "대시보드",
                description: "데이터를 한눈에 확인할 수 있는 대시보드 화면",
                image: "/media/project02/01-dashboard.webp",
            },
            {
                image: "/media/project02/02-chart.webp",
            },
        ],
    },
]

export default function DetailCard() {
    const [viewerOpen, setViewerOpen] = useState(false)
    const [activeContent, setActiveContent] = useState<DetailContent | null>(null)

    const openViewer = (content: DetailContent) => {
        setActiveContent(content)
        setViewerOpen(true)
    }

    const closeViewer = () => {
        setViewerOpen(false)
        setTimeout(() => setActiveContent(null), 300)
    }

    const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />

    return (
        <>
            <Card span={3} gap="medium">
                {/* ── 헤더 ── */}
                <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
                    <Title>Detail Pages</Title>
                    <Body>클릭하여 프로젝트 상세 페이지를 웹툰처럼 둘러보세요</Body>
                </div>

                {/* ── 썸네일 목록 ── */}
                <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4 mt-auto">
                    {contentData.map((content, idx) => (
                        <div key={idx}>
                            {idx > 0 && mobileDivider}
                            <Card
                                variant="tile"
                                className="flex flex-col gap-4 cursor-pointer group/card"
                                onClick={() => openViewer(content)}
                            >
                                {/* 썸네일 이미지 */}
                                <div className="relative w-full aspect-video shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/[0.06] flex items-center justify-center group-hover/card:border-white/20 transition-colors duration-300">
                                    <span className="text-sm text-white/30 font-mono">
                                        {content.thumbnail}
                                    </span>
                                </div>

                                {/* 텍스트 정보 */}
                                <div className="flex-1 flex flex-col justify-between text-left gap-2">
                                    <Title className="text-base leading-snug line-clamp-1">
                                        {content.title}
                                    </Title>
                                    <Body className="line-clamp-2">
                                        {content.description}
                                    </Body>
                                    <span className="text-xs font-bold text-brand-high group-hover/card:text-white transition-colors duration-300 mt-1">
                                        상세 보기 →
                                    </span>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Card>

            {/* ── 웹툰형 상세 뷰어 ── */}
            <DetailViewer
                open={viewerOpen}
                onClose={closeViewer}
                content={activeContent}
            />
        </>
    )
}
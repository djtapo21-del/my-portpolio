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

// ── 썸네일 이미지 (폴백 포함) ──
function ThumbImage({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false)

    if (error) {
        return (
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/[0.06] flex items-center justify-center">
                <span className="text-sm text-white/30 font-mono">{src}</span>
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-xl"
            onError={() => setError(true)}
        />
    )
}

// ── 데이터 (여기만 수정하세요) ──
// 각 항목의 items 배열에 (제목+설명+이미지)를 순서대로 나열하세요.
const contentData: DetailContent[] = [
    {
        title: "공군 UI 1",
        description: "공군 관련 UI 디자인 작업물",
        thumbnail: "/design/af-ui-1/t.webp",
        items: [
            { image: "/design/af-ui-1/1.webp" },
            { image: "/design/af-ui-1/2.webp" },
            { image: "/design/af-ui-1/3.webp" },
        ],
    },
    {
        title: "공군 UI 2",
        description: "공군 관련 UI 디자인 작업물",
        thumbnail: "/design/af-ui-2/t.webp",
        items: [
            { image: "/design/af-ui-2/1.webp" },
            { image: "/design/af-ui-2/2.webp" },
            { image: "/design/af-ui-2/3.webp" },
            { image: "/design/af-ui-2/4.webp" },
            { image: "/design/af-ui-2/5.webp" },
        ],
    },
    {
        title: "공군 포스터",
        description: "공군 관련 포스터 디자인 작업물",
        thumbnail: "/design/af-poster/t.jpg",
        items: [
            { image: "/design/af-poster/1.jpg" },
            { image: "/design/af-poster/2.jpg" },
            { image: "/design/af-poster/3.jpg" },
        ],
    },
    {
        title: "루디크 네임택",
        description: "루디크 네임택 상세페이지 디자인",
        thumbnail: "/design/ludik-tag/t.jpg",
        items: [
            { image: "/design/ludik-tag/1.jpg" },
        ],
    },
    {
        title: "루디크 파우치",
        description: "루디크 파우치 상세페이지 디자인",
        thumbnail: "/design/ludik-pouch/t.jpg",
        items: [
            { image: "/design/ludik-pouch/1.jpg" },
        ],
    },
    {
        title: "루디크 함부르크 배너",
        description: "루디크 함부르크 캐리어 광고 배너 디자인",
        thumbnail: "/design/ludik-banner/t.webp",
        items: [
            { image: "/design/ludik-banner/1.webp" },
            { image: "/design/ludik-banner/2.webp" },
        ],
    },
    {
        title: "루디크 행택",
        description: "루디크 행택 디자인",
        thumbnail: "/design/ludik-hangtag/t.webp",
        items: [
            { image: "/design/ludik-hangtag/1.webp" },
        ],
    },
    {
        title: "스누피 네임택",
        description: "스누피 네임택 상세페이지 디자인",
        thumbnail: "/design/snoopy-tag/t.webp",
        items: [
            { image: "/design/snoopy-tag/1.jpg" },
        ],
    },
    {
        title: "스누피 캐리어 인스타",
        description: "스누피 캐리어 인스타그램 광고 디자인",
        thumbnail: "/design/snoopy-instagram/t.webp",
        items: [
            { image: "/design/snoopy-instagram/1.webp" },
            { image: "/design/snoopy-instagram/2.webp" },
            { image: "/design/snoopy-instagram/3.webp" },
            { image: "/design/snoopy-instagram/4.webp" },
            { image: "/design/snoopy-instagram/5.webp" },
            { image: "/design/snoopy-instagram/6.webp" },
            { image: "/design/snoopy-instagram/8.webp" },
        ],
    },
    {
        title: "종합 캐리어 인스타",
        description: "종합 캐리어 인스타그램 광고 디자인",
        thumbnail: "/design/luggage-instagram/t.webp",
        items: [
            { image: "/design/luggage-instagram/1.webp" },
            { image: "/design/luggage-instagram/2.webp" },
            { image: "/design/luggage-instagram/3.webp" },
            { image: "/design/luggage-instagram/4.webp" },
            { image: "/design/luggage-instagram/5.webp" },
        ],
    },
    {
        title: "큐랑 룩북",
        description: "큐랑 브랜드 룩북 디자인",
        thumbnail: "/design/qrang-lookbook/t.webp",
        items: [
            { image: "/design/qrang-lookbook/1.webp" },
        ],
    },
    {
        title: "큐랑 품질 보증 카드",
        description: "큐랑 브랜드 품질 보증 카드 디자인",
        thumbnail: "/design/qrang-warranty/t.webp",
        items: [
            { image: "/design/qrang-warranty/1.webp" },
            { image: "/design/qrang-warranty/2.webp" },
            { image: "/design/qrang-warranty/3.webp" },
            { image: "/design/qrang-warranty/4.webp" },
        ],
    },
    {
        title: "큐클리어",
        description: "큐클리어 상세페이지 디자인",
        thumbnail: "/design/qclear/t.webp",
        items: [
            { image: "/design/qclear/1.jpg" },
        ],
    },
    {
        title: "큐랑 페이지",
        description: "큐랑 브랜드 페이지 디자인",
        thumbnail: "/design/qrang-page/t.webp",
        items: [
            { image: "/design/qrang-page/1.webp" },
            { image: "/design/qrang-page/2.webp" },
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

    return (
        <>
            <Card span={3} gap="medium">
                {/* ── 헤더 ── */}
                <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
                    <Title>디자인 작업</Title>
                </div>

                {/* ── 썸네일 목록 ── */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-auto">
                    {contentData.map((content, idx) => (
                        <div key={idx}>
                            <Card
                                variant="tile"
                                className="flex flex-col gap-4 cursor-pointer group/card"
                                onClick={() => openViewer(content)}
                            >
                                {/* 썸네일 이미지 */}
                                <div className="relative w-full aspect-video shrink-0 overflow-hidden rounded-xl border border-white/[0.06] group-hover/card:border-white/20 transition-colors duration-300">
                                    <ThumbImage src={content.thumbnail} alt={content.title} />
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
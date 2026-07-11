// src/components/ProjectCard.tsx
import { useState } from 'react'
import { Card } from './ui/Card'
import { Title, Body } from './ui/Text'
import { Tag } from './ui/Tag'

// ── 자동 폴백(Fallback) 이미지 검출기 ──
function AutoImage({ src, text, color }: { src: string; text: string; color: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full h-full ${color} rounded-xl flex items-center justify-center`}>
        <span className="text-xs font-bold tracking-widest uppercase">{text}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={text}
      className="w-full h-full object-cover rounded-xl"
      onError={() => setError(true)}
    />
  );
}

export default function ProjectsCard() {
  const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

  return (
    <Card span={3} gap="medium">

      {/* ── 헤더 ── */}
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
        <Title>Featured Projects</Title>
        <Body>React와 Tailwind CSS를 활용한 모던 벤토 그리드 아키텍처 기반의 개인 웹사이트</Body>
      </div>

      {/* ── 프로젝트 타일 목록 ── */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4 mt-auto">

        {/* ====== 프로젝트 1 ====== */}
        {/* 썸네일 이미지: public/projects/portfolio.webp */}
        <Card variant="tile" className="flex flex-col gap-4">
          <a href="https://djtapo21-del.github.io/my-portpolio" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full aspect-video shrink-0 overflow-hidden block rounded-xl group/thumb cursor-pointer">
              <AutoImage
                src="/projects/project01.png"
                text="PORTFOLIO"
                color="bg-tag-blue/10 border border-tag-blue/20 text-tag-blue"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300 rounded-xl" />
            </div>
          </a>
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">국립공원공단</Title>
              <Body className="line-clamp-2 mt-1">편리한 예약 시스템과 공원 정보를 지도로 한눈에 확인할 수 있는 국립공원공단 웹사이트</Body>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="zinc">HTML</Tag>
              <Tag color="blue">CSS</Tag>
              <Tag color="yellow">JS</Tag>
              <Tag color="zinc">Git Page</Tag>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/djtapo21-del/KNationalPark-Personal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
              <a
                href="https://www.knps.or.kr/portal/main.do"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-mid group-hover/link:text-white transition-colors duration-300">
                  기존 사이트 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

        {mobileDivider}

        {/* ====== 프로젝트 2 ====== */}
        {/* 썸네일 이미지: public/projects/project02.png */}
        <Card variant="tile" className="flex flex-col gap-4">
          <a href="https://youtube-music-mu-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full aspect-video shrink-0 overflow-hidden block rounded-xl group/thumb cursor-pointer">
              <AutoImage
                src="/projects/project02.png"
                text="WEATHER"
                color="bg-tag-sky/10 border border-tag-sky/20 text-tag-sky"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300 rounded-xl" />
            </div>
          </a>
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">유튜브 뮤직</Title>
              <Body className="line-clamp-2 mt-1">유튜브 API를 연동하여 실시간 인기 뮤직비디오 정보와 음악을 제공하는 웹 앱</Body>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="zinc">HTML</Tag>
              <Tag color="blue">CSS</Tag>
              <Tag color="yellow">JS</Tag>
              <Tag color="zinc">Vercel</Tag>
              <Tag color="zinc">API</Tag>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/djtapo21-del/YoutubeMusic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

        {mobileDivider}

        {/* ====== 프로젝트 3 ====== */}
        {/* 썸네일 이미지: public/projects/project03.png */}
        <Card variant="tile" className="flex flex-col gap-4">
          <a href="https://djtapo21-del.github.io/Sk-telecom/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full aspect-video shrink-0 overflow-hidden block rounded-xl group/thumb cursor-pointer">
              <AutoImage
                src="/projects/project03.png"
                text="LINKS"
                color="bg-tag-purple/10 border border-tag-purple/20 text-tag-purple"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300 rounded-xl" />
            </div>
          </a>
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">SK 텔레콤</Title>
              <Body className="line-clamp-2 mt-1">SK 텔레콤 공식 사이트를 분석하여 반응형 레이아웃과 UI 컴포넌트를 동일하게 구현한 클론 프로젝트</Body>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="zinc">HTML</Tag>
              <Tag color="blue">CSS</Tag>
              <Tag color="yellow">JS</Tag>
              <Tag color="zinc">Git Page</Tag>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/djtapo21-del/Sk-telecom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
              <a
                href="https://www.sktelecom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-mid group-hover/link:text-white transition-colors duration-300">
                  기존 사이트 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

      </div>
    </Card>
  )
}
// src/components/ProjectsCard.tsx
import { useState } from 'react'
import { Card } from './ui/Card'
import { Title, Body } from './ui/Text'
import { Tag } from './ui/Tag'

// 자동 폴백 이미지 검출기
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
  const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full my-6" />;

  return (
    <Card span={3} gap="medium">

      {/* 1단계 부모 카드 상단 헤더 */}
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
        <Title>국립공원공단</Title>
        <Body>반응형 웹 디자인을 구현한 국립공원공단 웹사이트 리뉴얼 프로젝트</Body>
      </div>

      {/* 2단계 내부 프로젝트 타일 리스트 */}
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 mt-auto">

        {/* 프로젝트 타일 1 */}
        <Card variant="tile" className="p-0 overflow-hidden flex flex-col justify-start">

          {/* [링크 분리 1] 썸네일 클릭 시: 깃허브 소스코드 저장소(Repository)로 연결 */}
          <a
            href="https://djtapo21-del.github.io/KNationalPark-Personal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-video overflow-hidden block rounded-xl"
          >
            <AutoImage
              src="/projects/project01.png"
              text="PORTFOLIO"
              color="bg-tag-blue/10 border border-tag-blue/20 text-tag-blue"
            />
          </a>

          {/* 하단 텍스트 및 기술 태그 정보 구역 */}
          <div className="pt-4 flex flex-col gap-y-2.5 text-left p-0">
            <Title className="text-base leading-snug line-clamp-1">나만의 포트폴리오 제작</Title>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="zinc">HTML</Tag>
              <Tag color="blue">CSS</Tag>
              <Tag color="yellow">JS</Tag>
            </div>

            <Body className="line-clamp-2">React와 Tailwind CSS를 활용한 모던 벤토 그리드 아키텍처 기반의 개인 웹사이트</Body>

            {/* [링크 분리 2] 버튼 클릭 시: 깃허브 페이지 실배포 라이브 사이트로 연결 (모션 제거, 색상 전환만 유지) */}
            <a
              href="https://www.knps.or.kr/portal/main.do"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1.5 mt-1 group/link w-fit"
            >
              <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                기존 사이트 보기 →
              </span>
            </a>
          </div>
        </Card>

        {mobileDivider}

        {/* 프로젝트 타일 2 */}
        <Card variant="tile" className="p-0 overflow-hidden flex flex-col justify-start">
          {/* 썸네일 클릭 시: 깃허브 레포지토리 연결 */}
          <a
            href="https://github.com/username/weather-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-video overflow-hidden block rounded-xl"
          >
            <AutoImage
              src="/projects/weather.webp"
              text="WEATHER"
              color="bg-tag-sky/10 border border-tag-sky/20 text-tag-sky"
            />
          </a>
          <div className="pt-4 flex flex-col gap-y-2.5 text-left p-0">
            <Title className="text-base leading-snug line-clamp-1">날씨 가이드 서비스</Title>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="sky">Figma</Tag>
              <Tag color="zinc">TypeScript</Tag>
              <Tag color="zinc">API</Tag>
            </div>

            <Body className="line-clamp-2">OpenWeather API를 연동하여 실시간 기상 정보와 의상 추천 기능을 제공하는 웹 앱</Body>

            {/* 버튼 클릭 시: 실배포 사이트 연결 (모션 제거, 색상 전환만 유지) */}
            <a
              href="https://username.github.io/weather"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1.5 mt-1 group/link w-fit"
            >
              <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                기존 사이트 보기 →
              </span>
            </a>
          </div>
        </Card>

        {mobileDivider}

        {/* 프로젝트 타일 3 */}
        <Card variant="tile" className="p-0 overflow-hidden flex flex-col justify-start">
          {/* 썸네일 클릭 시: 깃허브 레포지토리 연결 */}
          <a
            href="https://github.com/username/links-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-video overflow-hidden block rounded-xl"
          >
            <AutoImage
              src="/projects/links.webp"
              text="LINKS"
              color="bg-tag-purple/10 border border-tag-purple/20 text-tag-purple"
            />
          </a>
          <div className="pt-4 flex flex-col gap-y-2.5 text-left p-0">
            <Title className="text-base leading-snug line-clamp-1">링크 모음 대시보드</Title>

            <div className="flex flex-wrap gap-1.5">
              <Tag color="zinc">HTML5</Tag>
              <Tag color="zinc">CSS3</Tag>
              <Tag color="zinc">JavaScript</Tag>
            </div>

            <Body className="line-clamp-2">자주 사용하는 사이트 링크를 카테고리별로 관리하고 공유할 수 있는 유틸리티</Body>

            {/* 버튼 클릭 시: 실배포 사이트 연결 (모션 제거, 색상 전환만 유지) */}
            <a
              href="https://username.github.io/links"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1.5 mt-1 group/link w-fit"
            >
              <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                기존 사이트 보기 →
              </span>
            </a>
          </div>
        </Card>

      </div>
    </Card>
  )
}
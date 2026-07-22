// src/components/ContactCard.tsx
import { useState } from 'react'
import { Card } from './ui/Card'
import { Body, SubTitle, Label, Caption } from './ui/Text'

export default function ContactCard() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

  return (
    <Card span={2}>
      {/* 1. 상단 메인 인사말 */}
      <div className="flex flex-col gap-3 pb-4 border-b border-white/[0.06]">
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wide leading-tight">
          AI 시대에 발맞춘 디자이너 <span className="text-brand-high">문정우</span>입니다.
        </h1>
      </div>

      {/* 2. 하단 리스트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">

        {/* 인적 사항 타일 */}
        <Card variant="tile">
          <div className="flex flex-col gap-y-3.5">
            <div className="flex flex-col gap-y-0.5">
              <Label>Birth</Label>
              <SubTitle>97년생 / 만 29세</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Location</Label>
              <SubTitle>부산광역시 수영구</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Military</Label>
              <SubTitle>공군 병장 만기전역</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Education</Label>
              <SubTitle className="leading-snug">한국폴리텍대학 섬유패션캠퍼스</SubTitle>
              <Caption>텍스타일컬러디자인과 | 2018.02 졸업</Caption>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Job Status</Label>
              <SubTitle>신입 / 정규직 희망</SubTitle>
            </div>
            <button
              onClick={() => setResumeOpen(true)}
              className="w-fit text-xs font-bold text-brand-high bg-brand-high/10 border border-brand-high/20 rounded-lg px-3 py-1.5 hover:bg-brand-high/20 hover:text-white transition-all duration-300 mt-1"
            >
              자기소개서 보기 →
            </button>
          </div>
        </Card>

        {mobileDivider}

        {/* 오른쪽 영역 */}
        <div className="flex flex-col gap-4">
          {/* 자격증 타일 */}
          <Card variant="tile" className="flex-1">
            <div className="flex flex-col gap-3">
              <Label>Certificates</Label>
              <div className="flex items-center justify-between">
                <SubTitle>컴퓨터그래픽스운용기능사</SubTitle>
                <Caption>2015.12</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>웹디자인기능사</SubTitle>
                <Caption>2015.11</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>전자출판기능사</SubTitle>
                <Caption>2015.09</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>섬유디자인산업기사</SubTitle>
                <Caption>2017.08</Caption>
              </div>
            </div>
          </Card>

          {mobileDivider}

          {/* 연락처 타일 */}
          <Card variant="tile">
            <div className="flex flex-col gap-3">
              <Label>Contact Channel</Label>
              <div className="flex flex-col gap-y-3.5 pt-1.5">
                <div className="flex items-center gap-x-3 text-text-body">
                  <span className="text-base leading-none shrink-0">&#x1F4E7;</span>
                  <Body className="font-semibold">email@gmail.com</Body>
                </div>
                <div className="flex items-center gap-x-3 text-text-body">
                  <span className="text-base leading-none shrink-0">&#x1F4F1;</span>
                  <Body className="font-semibold">010-1234-5678</Body>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>

      {/* ── 자기소개서 뷰어 ── */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setResumeOpen(false)}
        >
          {/* 배경 (어두운 오버레이) */}
          <div className="absolute inset-0 bg-black/70" />

          {/* 흰색 모달 */}
          <div
            className="absolute inset-0 md:inset-8 max-w-3xl md:mx-auto flex flex-col bg-white rounded-none md:rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
              <h2 className="text-base md:text-lg font-semibold text-gray-900 tracking-wide">
                자기소개서
              </h2>
              <button
                onClick={() => setResumeOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors duration-200 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* 콘텐츠 */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 md:px-8 py-6 space-y-5">
              <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                <p>
                  저는 사용자 경험(UX)과 시각적 완성도를 동시에 고려하는 디자이너입니다.
                  폴리텍대학에서 텍스타일컬러디자인을 전공하며 색채와 구성의 감각을 익혔고,
                  이후 (주)인터빅뱅에서 3년 4개월간 시각디자이너로 근무하며 다양한 인쇄·편집·UI 디자인을 경험했습니다.
                </p>
                <p>
                  디자인 현장에서 쌓은 경험을 바탕으로, 웹 퍼블리싱과 UI 개발 영역으로 역량을 확장하고자 합니다.
                  Figma를 활용한 프로토타이핑부터 HTML/CSS를 통한 실제 구현까지 가능한
                  '디자인을 아는 퍼블리셔'를 목표로 하고 있습니다.
                </p>
                <p>
                  또한 AI 기반 개발 워크플로우를 적극 활용하여 생산성을 극대화하고,
                  코드 스플리팅, 레이지 로딩, 번들 최적화 등 성능 튜닝 기법을 학습하여
                  빠르고 효율적인 웹 환경을 구축하는 데 관심이 많습니다.
                </p>
                <p>
                  포트폴리오에 포함된 국립공원공단 클론 프로젝트, SK 텔레콤 클론 프로젝트,
                  유튜브 뮤직 API 활용 앱 등은 모두 실제 서비스를 분석하고 재구성하는 과정에서
                  웹 표준과 반응형 디자인 원칙을 적용한 결과물입니다.
                  앞으로도 사용자에게 가치 있는 경험을 전달하는 디지털 환경을 만드는 데 기여하고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

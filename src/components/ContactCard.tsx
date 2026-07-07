// src/components/ContactCard.tsx
import { Card } from './ui/Card'
import { Title, Body, SubTitle, Label, Caption } from './ui/Text'

export default function ContactCard() {
  return (
    // 1단계 메인 카드 (span 2칸 점유, 모바일 테두리 정상 작동)
    <Card span={2}>

      {/* 1. 상단 메인 인사말 영역 (카드로 감싸지 않고 텍스트 그대로 노출) */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wide leading-tight">
          사용자 경험을 코드로 설계하는 <br />
          <span className="text-brand-high">홍길동</span>입니다. 👋
        </h1>
        <Body>
          복잡한 비즈니스 로직을 직관적인 UI로 풀어내는 것을 좋아하며,
          디자인 감각을 바탕으로 픽셀 단위까지 완성도 있는 결과물을 만들어냅니다.
        </Body>
      </div>

      {/* 2. 하단 상세 정보 영역 (2단계 타일 카드로 나누어 수납) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">

        {/* 2단계 카드 1: 인적 사항 */}
        <Card variant="tile" className="p-5">
          <div className="flex flex-col gap-y-3.5">
            <div className="flex flex-col gap-y-0.5">
              <Label>Birth</Label>
              <SubTitle>1999. 05. 20</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Location</Label>
              <SubTitle>부산광역시 수영구</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Military</Label>
              <SubTitle>군필 (공군 병장 만기전역)</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Education</Label>
              <SubTitle className="leading-snug">한국폴리텍대학 섬유패션캠퍼스</SubTitle>
              <Caption>텍스타일컬러디자인과 | 2018.02 졸업</Caption>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Job Status</Label>
              <SubTitle className="text-brand-high">신입 / 정규직 희망</SubTitle>
            </div>
          </div>
        </Card>

        {/* 오른쪽 영역 (자격증 타일 + 연락처 타일의 수직 스택) */}
        <div className="flex flex-col gap-4">

          {/* 2단계 카드 2: 자격증 타일 */}
          <Card variant="tile" className="p-5">
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

          {/* 2단계 카드 3: 연락처 타일 */}
          <Card variant="tile" className="p-5">
            <div className="flex flex-col gap-3">
              <Label>Contact Channel</Label>
              <div className="flex flex-col gap-y-3 pt-1">

                {/* 이메일 */}
                <a
                  href="mailto:email@gmail.com"
                  className="flex items-center gap-x-3 text-text-body hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-lg leading-none shrink-0">📧</span>
                  <div className="flex flex-col">
                    <Label className="text-[10px] text-text-muted group-hover:text-brand-high transition-colors">Email</Label>
                    <Body className="font-semibold text-text-body group-hover:text-white transition-colors">email@gmail.com</Body>
                  </div>
                </a>

                {/* 전화번호 */}
                <a
                  href="tel:010-1234-5678"
                  className="flex items-center gap-x-3 text-text-body hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-lg leading-none shrink-0">📱</span>
                  <div className="flex flex-col">
                    <Label className="text-[10px] text-text-muted group-hover:text-brand-high transition-colors">Phone</Label>
                    <Body className="font-semibold text-text-body group-hover:text-white transition-colors">010-1234-5678</Body>
                  </div>
                </a>

              </div>
            </div>
          </Card>
        </div>

      </div>
    </Card>
  )
}
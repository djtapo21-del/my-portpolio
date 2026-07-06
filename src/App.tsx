// src/App.tsx
import ContactCard from './components/ContactCard' // 첫 번째 배치용
import AboutCard from './components/AboutCard'     // 두 번째 배치용
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard'
import { Card } from './components/ui/Card'
import { Title, Label } from './components/ui/Text'
import heroImage from './assets/hero.png'

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg p-6 md:p-12 flex flex-col items-center gap-y-16">

      {/* 1. 프로필 섹션 (ContactCard: 2칸 / AboutCard: 1칸 배치) */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <ContactCard /> {/* 가로 2칸 점유 */}
          <AboutCard />   {/* 가로 1칸 점유 */}
          <SkillsCard />  {/* 가로 3칸 점유 */}
        </div>
      </div>

      {/* 중간 구분선 */}
      <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 2. 프로젝트 섹션 */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <ProjectCard
            title="나만의 포트폴리오 제작"
            desc="React와 Tailwind CSS를 활용한 모던 벤토 그리드 아키텍처 기반의 개인 웹사이트"
            image={heroImage}
            link="#"
          />
          <ProjectCard
            title="날씨 가이드 서비스"
            desc="OpenWeather API를 연동하여 실시간 기상 정보와 의상 추천 기능을 제공하는 웹 앱"
            image={heroImage}
            link="#"
          />
          <ProjectCard
            title="링크 모음 대시보드"
            desc="자주 사용하는 사이트 링크를 카테고리별로 관리하고 공유할 수 있는 유틸리티"
            image={heroImage}
            link="#"
          />

          {/* 준비 중 카드 */}
          <Card
            className="aspect-square justify-center items-center opacity-30 border-dashed border-2 p-0"
          >
            <Title className="text-zinc-600">Coming Soon</Title>
          </Card>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="mt-8">
        <Label className="text-zinc-700 normal-case tracking-normal">
          © 2026 Designed & Built by Hong Gil Dong
        </Label>
      </footer>
    </div>
  )
}
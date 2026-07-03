import AboutCard from './components/AboutCard'
import ContactCard from './components/ContactCard'
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard'
import SectionHeader from './components/ui/SectionHeader'
import Box from './components/ui/Box'
import Typography from './components/ui/Typography'
import heroImage from './assets/hero.png'

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg p-6 md:p-12 flex flex-col items-center gap-y-16">

      {/* Profile Section */}
      <div className="w-full max-w-6xl flex flex-col">
        <SectionHeader title="Professional Profile" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <AboutCard />
          <ContactCard />
          <SkillsCard />
        </div>
      </div>

      <div className="w-full max-w-6xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Projects Section */}
      <div className="w-full max-w-6xl flex flex-col">
        <SectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <ProjectCard title="Portfolio Website" desc="React와 Tailwind CSS를 사용한 모던 벤토 그리드" image={heroImage} link="#" />
          <ProjectCard title="Task Manager" desc="TypeScript 기반의 고성능 할 일 관리 도구" image={heroImage} link="#" />
          <ProjectCard title="Weather App" desc="API 연동을 통한 실시간 기상 정보 서비스" image={heroImage} link="#" />

          {/* Coming Soon Placeholder */}
          <Box padding="large" rounded="extra" className="aspect-square justify-center items-center opacity-30 border-dashed">
            <Typography variant="h2" className="text-zinc-600">Coming Soon</Typography>
          </Box>
        </div>
      </div>
    </div>
  )
}
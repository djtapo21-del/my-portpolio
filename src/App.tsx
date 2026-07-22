// src/App.tsx
import ContactCard from './components/ContactCard'
import AboutCard from './components/AboutCard'
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard'
import DetailCard from './components/DetailCard'
import { Label } from './components/ui/Text'

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg px-0 py-4 md:p-12 flex flex-col items-center justify-start gap-y-16 w-full">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 w-full max-w-6xl">
        <ContactCard />
        <AboutCard />
        <SkillsCard />
        <ProjectCard />
        <DetailCard />
      </div>

      <footer className="mt-auto">
        <Label className="text-zinc-700 normal-case tracking-normal">
          © 2026 Designed & Built by Hong Gil Dong
        </Label>
      </footer>
    </div>
  )
}

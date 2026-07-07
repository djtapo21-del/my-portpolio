// src/components/ProjectCard.tsx
import { Card } from './ui/Card'
import { SubTitle, Body } from './ui/Text'

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, desc, image, link }: ProjectCardProps) {
  return (
    // p-6 수기 패딩을 제거하여 전체 위계와 양옆 정렬선을 일치시킴
    <Card className="aspect-square text-left gap-3">
      <div className="flex flex-col gap-y-1">
        <SubTitle className="line-clamp-1">{title}</SubTitle>
        <Body className="line-clamp-2">{desc}</Body>
      </div>

      <Card
        as="a"
        href={link}
        target="_blank"
        className="mt-auto aspect-video border-white/5 overflow-hidden p-0 rounded-xl"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Card>
    </Card>
  )
}
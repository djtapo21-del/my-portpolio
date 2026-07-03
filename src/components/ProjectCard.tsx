import Box from './ui/Box'
import Typography from './ui/Typography'

interface ProjectCardProps {
  title: string; desc: string; image: string; link: string;
}

export default function ProjectCard({ title, desc, image, link }: ProjectCardProps) {
  return (
    <Box as="article" padding="large" rounded="extra" gap="small" className="aspect-square text-left">
      <Typography variant="h2" className="line-clamp-1">{title}</Typography>
      <Typography variant="body" className="line-clamp-2">{desc}</Typography>

      <Box as="a" href={link} padding="none" rounded="standard" className="mt-auto aspect-video border-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 font-normal"
        />
      </Box>
    </Box>
  )
}
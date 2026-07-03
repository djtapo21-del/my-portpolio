import Typography from './Typography'

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full max-w-6xl px-2 mb-6 border-l-2 border-blue-600 pl-4 text-left">
      <Typography variant="label" className="text-zinc-500 font-black">
        {title}
      </Typography>
    </div>
  )
}
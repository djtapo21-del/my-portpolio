export default function Tag({ children, color = 'zinc' }: { children: string, color?: 'blue' | 'yellow' | 'sky' | 'green' | 'purple' | 'zinc' }) {
  const themes = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    zinc: 'bg-zinc-800 text-zinc-300 border-zinc-700'
  }
  return (
    <span className={`px-2.5 py-1 rounded-lg text-[0.7rem] font-bold border ${themes[color]}`}>
      {children}
    </span>
  )
}
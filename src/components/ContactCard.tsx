import Box from './ui/Box'
import Typography from './ui/Typography'

export default function ContactCard() {
  return (
    <Box as="section" padding="large" rounded="extra" gap="medium" className="h-full text-left">
      <div className="flex flex-col gap-y-1.5">
        <Typography variant="h2">Connect</Typography>
        {/* variant를 body로 변경하고 문구 업데이트 */}
        <Typography variant="body">
          협업 제안이나 기술적인 대화는 언제든 환영합니다. 아래 채널로 편하게 연락주세요.
        </Typography>
      </div>

      <div className="flex flex-col gap-y-2 mt-auto">
        <Box as="a" href="mailto:email@gmail.com" variant="interactive" padding="small" className="flex-row items-center justify-between">
          <div className="flex items-center gap-x-3 text-left">
            <div className="w-6 flex justify-center items-center shrink-0 text-lg leading-none">📧</div>
            <div className="flex flex-col">
              <Typography variant="label">Email</Typography>
              <Typography variant="item">email@gmail.com</Typography>
            </div>
          </div>
          <Typography variant="item" className="text-zinc-600">→</Typography>
        </Box>

        <Box as="a" href="https://github.com" variant="interactive" padding="small" className="flex-row items-center justify-between">
          <div className="flex items-center gap-x-3 text-left">
            <div className="w-6 flex justify-center items-center shrink-0 text-lg leading-none">🐙</div>
            <div className="flex flex-col">
              <Typography variant="label">GitHub</Typography>
              <Typography variant="item">github.com/username</Typography>
            </div>
          </div>
          <Typography variant="item" className="text-zinc-600">→</Typography>
        </Box>

        <Box as="a" href="tel:010-1234-5678" variant="interactive" padding="small" className="flex-row items-center justify-between">
          <div className="flex items-center gap-x-3 text-left">
            <div className="w-6 flex justify-center items-center shrink-0 text-lg leading-none">📱</div>
            <div className="flex flex-col">
              <Typography variant="label">Phone</Typography>
              <Typography variant="item">010-1234-5678</Typography>
            </div>
          </div>
          <Typography variant="item" className="text-zinc-600">→</Typography>
        </Box>
      </div>
    </Box>
  )
}
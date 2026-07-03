import Box from './ui/Box'
import Typography from './ui/Typography'

export default function AboutCard() {
    return (
        <Box as="section" padding="large" rounded="extra" gap="large" className="md:col-span-2 text-left">
            <Typography variant="h1">
                안녕하세요. 효율적인 코드를 고민하는 <br />
                <span className="text-blue-500">홍길동</span>입니다. 👋
            </Typography>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Box variant="interactive" padding="medium" gap="small">
                    <Typography variant="label">Experience</Typography>
                    <Typography variant="h3">2+ Years</Typography>
                </Box>
                <Box variant="interactive" padding="medium" gap="small">
                    <Typography variant="label">Projects</Typography>
                    <Typography variant="h3">12+ Done</Typography>
                </Box>
                <Box variant="interactive" padding="medium" gap="small">
                    <Typography variant="label">Location</Typography>
                    <Typography variant="h3">Seoul, KR</Typography>
                </Box>
                <Box variant="interactive" padding="medium" gap="small">
                    <Typography variant="label">Status</Typography>
                    <div className="flex items-center gap-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <Typography variant="h3">Available</Typography>
                    </div>
                </Box>
            </div>

            <Typography variant="body" className="mt-auto max-w-2xl text-left">
                복잡한 문제를 단순하게 해결하는 과정에서 즐거움을 느낍니다. 사용자 중심의 직관적인 인터페이스를 만드는 것을 목표로 합니다.
            </Typography>
        </Box>
    )
}
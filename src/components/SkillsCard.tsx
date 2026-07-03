import Box from './ui/Box'
import Typography from './ui/Typography'
import Tag from './ui/Tag'

export default function SkillsCard() {
    return (
        <Box as="section" padding="large" rounded="extra" gap="medium" className="md:col-span-3 text-left font-normal">
            <div className="flex flex-col gap-y-1.5">
                <Typography variant="h2">Tech Stack</Typography>
                {/* variant를 body로 변경하고 문구 업데이트 */}
                <Typography variant="body">
                    안정적이고 확장 가능한 서비스를 만들기 위해 제가 주로 사용하고 숙달된 기술들입니다.
                </Typography>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto font-normal">
                <Tag color="blue">React</Tag>
                <Tag color="yellow">TypeScript</Tag>
                <Tag color="sky">Tailwind CSS</Tag>
                <Tag color="green">Node.js</Tag>
                <Tag color="purple">Redux</Tag>
                <Tag color="zinc">Git</Tag>
                <Tag color="blue">Next.js</Tag>
            </div>
        </Box>
    )
}
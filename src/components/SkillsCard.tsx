// src/components/SkillsCard.tsx
import { Card } from './ui/Card'
import { Title, Body, Label, Status } from './ui/Text'
import { Tag } from './ui/Tag'

export default function SkillsCard() {
    return (
        <Card className="md:col-span-3 text-left gap-6">
            <div className="flex flex-col gap-2">
                <Title>Tech Stack</Title>
                <Body>
                    디자인 실무 역량과 웹 퍼블리싱 기초를 바탕으로 다채로운 결과물을 만들어냅니다.
                </Body>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
                {/* 디자인 타일 */}
                <Card variant="tile" className="p-5 gap-4">
                    <Label className="text-brand-high">Graphic Design</Label>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="blue">Photoshop</Tag>
                            <Status>고급</Status>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="sky">Illustrator</Tag>
                            <Status className="text-brand-mid">중급</Status>
                        </div>
                    </div>
                </Card>

                {/* 미디어 & UI 타일 */}
                <Card variant="tile" className="p-5 gap-4">
                    <Label className="text-brand-mid">Media & UI</Label>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="sky">Figma</Tag>
                            <Status className="text-brand-mid">중급</Status>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="zinc">Premiere Pro</Tag>
                            <Status className="text-text-muted">초급</Status>
                        </div>
                    </div>
                </Card>

                {/* 웹 기초 타일 */}
                <Card variant="tile" className="p-5 gap-4">
                    <Label>Web Basics</Label>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="zinc">HTML5</Tag>
                            <Status className="text-text-muted">초급</Status>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Tag color="zinc">CSS3</Tag>
                            <Status className="text-text-muted">초급</Status>
                        </div>
                    </div>
                </Card>
            </div>
        </Card>
    )
}
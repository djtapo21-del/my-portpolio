// src/components/SkillsCard.tsx
import { Card } from './ui/Card'
import { Title, Label, Status, Caption } from './ui/Text'
import { Tag } from './ui/Tag'

export default function SkillsCard() {
    const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

    return (
        <Card span={3} className="text-left gap-6">
            <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
                <Title>핵심 역량</Title>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">

                {/* 디자인 타일 */}
                <Card variant="tile" className="gap-4">
                    <Label>Graphic Design</Label>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <Tag color="blue">Photoshop</Tag>
                            <Status>고급</Status>
                        </div>
                        <div className="flex justify-between items-center">
                            <Tag color="sky">Illustrator</Tag>
                            <Status className="text-brand-mid">중급</Status>
                        </div>
                    </div>
                </Card>

                {mobileDivider}

                {/* 미디어 & UI 타일 */}
                <Card variant="tile" className="gap-4">
                    <Label>Media & UI</Label>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <Tag color="sky">Figma</Tag>
                            <Status className="text-brand-mid">중급</Status>
                        </div>
                        <div className="flex justify-between items-center">
                            <Tag color="zinc">Premiere Pro</Tag>
                            <Caption className="font-semibold uppercase tracking-wider">초급</Caption>
                        </div>
                    </div>
                </Card>

                {mobileDivider}

                {/* 웹 기초 타일 */}
                <Card variant="tile" className="gap-4">
                    <Label>Web Basics</Label>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <Tag color="zinc">HTML5</Tag>
                            <Caption className="font-semibold uppercase tracking-wider">초급</Caption>
                        </div>
                        <div className="flex justify-between items-center">
                            <Tag color="zinc">CSS3</Tag>
                            <Caption className="font-semibold uppercase tracking-wider">초급</Caption>
                        </div>
                    </div>
                </Card>

            </div>
        </Card>
    )
}
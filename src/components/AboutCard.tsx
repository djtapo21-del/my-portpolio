// src/components/AboutCard.tsx
import { Card } from './ui/Card'
import { Title, SubTitle, Body, Label, Caption } from './ui/Text'

export default function AboutCard() {
    return (
        // CardProps 인터페이스가 gap="large"를 올바르게 수용함
        <Card span={1} gap="large">
            {/* 1. 상단 타이틀 */}
            <div className="flex flex-col gap-1.5">
                <Title>Career Info</Title>
                <Body>실무 활동 및 주요 프로젝트 내역입니다.</Body>
            </div>

            {/* 2. 하단 경력 영역 */}
            <div className="flex flex-col gap-y-3">
                <Label className="text-brand-high">Professional Experience</Label>

                <div className="flex flex-col gap-y-1">
                    <SubTitle>(주)디자인테크</SubTitle>
                    <Caption>프론트엔드 인턴 | 2023.07 - 2023.12</Caption>

                    <ul className="flex flex-col gap-y-2 mt-4 pl-1">
                        <li className="flex gap-x-2 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-high shrink-0 mt-2" />
                            <Body>반응형 웹 퍼블리싱 및 UI 컴포넌트 개발</Body>
                        </li>
                        <li className="flex gap-x-2 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-high shrink-0 mt-2" />
                            <Body>디자인 시스템 가이드 준수 및 고도화</Body>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}
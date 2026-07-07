// src/components/AboutCard.tsx
import { Card } from './ui/Card'
import { Title, SubTitle, Body, Label, Caption } from './ui/Text'

export default function AboutCard() {
    return (
        // 1단계 메인 카드 (모바일에서도 든든하게 테두리와 패딩을 유지하여 틀을 잡음)
        <Card span={1} gap="large">

            {/* 상단 헤더 영역: 2차 카드로 감싸지 않고 본래의 텍스트 레이아웃으로 플랫하게 노출 */}
            <div className="flex flex-col gap-1.5">
                <Title>Career Info</Title>
                <Body>실무 활동 및 주요 프로젝트 내역입니다.</Body>
            </div>

            {/* 2단계 내부 카드: 실무 이력 콘텐츠를 깔끔하게 카드인카드(tile) 형태로 수납 */}
            <Card variant="tile" className="p-5">
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

        </Card>
    )
}
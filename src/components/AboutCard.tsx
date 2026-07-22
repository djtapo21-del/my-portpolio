// src/components/AboutCard.tsx
import { Card } from './ui/Card'
import { Title, SubTitle, Body, Caption } from './ui/Text'

export default function AboutCard() {
    const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

    return (
        <Card span={1} gap="medium">

            {/* 헤더 */}
            <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
                <Title>경력 사항</Title>
            </div>

            {/* 이력 리스트 */}
            <div className="flex flex-col gap-3">

                {/* 이력 1 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>(주)인터빅뱅</SubTitle>
                        <Caption>22.07 - 25.10</Caption>
                    </div>
                    <Body className="text-xs">시각디자인 | 3년 4개월</Body>
                </Card>

                {mobileDivider}

                {/* 이력 2 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>어크로스</SubTitle>
                        <Caption>21.05 - 22.07</Caption>
                    </div>
                    <Body className="text-xs">주문관리 | 1년 3개월</Body>
                </Card>

                {mobileDivider}

                {/* 이력 3 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>케이프타운</SubTitle>
                        <Caption>21.03 - 21.05</Caption>
                    </div>
                    <Body className="text-xs">창고관리 | 3개월</Body>
                </Card>

                {mobileDivider}

                {/* 이력 4 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>어크로스</SubTitle>
                        <Caption>21.01 - 21.03</Caption>
                    </div>
                    <Body className="text-xs">창고관리 | 3개월</Body>
                </Card>

            </div>

            {/* 하단 설명 */}
            <div className="pt-3 border-t border-white/[0.06] mt-auto">
                <Body className="text-xs text-white/40 leading-relaxed">
                    ※ 위 회사들은 동일 회사로, 근무 기간 중 사명이 변경되었습니다.
                </Body>
            </div>
        </Card>
    )
}
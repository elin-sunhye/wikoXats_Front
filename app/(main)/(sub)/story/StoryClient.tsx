'use client'

import SectionMoreInfo from './SectionMoreInfo/SectionMoreInfo'
import SectionPartners from './SectionPartners/SectionPartners'
import SectionPoint from './SectionPoint/SectionPoint'
import SectionServe from './SectionServe/SectionServe'
import SectionSimpleIntro from './SectionSimpleIntro/SectionSimpleIntro'
import SectionStrong from './SectionStrong/SectionStrong'
import StorySubVisual from './StorySubVisual/StorySubVisual'
import page_style from './storyClient.module.scss'

export default function StoryClient() {
  return (
    <>
      {/* 서브 비주얼 */}
      <StorySubVisual />

      {/* 회사 간략 소개 */}
      <SectionSimpleIntro />

      {/* 회사 강점 설명 */}
      <SectionStrong />

      {/* 회사 차별화 */}
      <SectionPoint />

      {/* 회사 서비스 설명 */}
      <SectionServe />

      {/* 회사 거래처 설명 */}
      <SectionPartners />

      {/* 문의하기 */}
      <SectionMoreInfo />
    </>
  )
}

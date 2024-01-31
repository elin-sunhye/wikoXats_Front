'use client';

import SectionMoreInfo from '@/component/sub/story/SectionMoreInfo/SectionMoreInfo';
import SectionPartners from '@/component/sub/story/SectionPartners/SectionPartners';
import SectionPoint from '@/component/sub/story/SectionPoint/SectionPoint';
import SectionServe from '@/component/sub/story/SectionServe/SectionServe';
import SectionSimpleIntro from '@/component/sub/story/SectionSimpleIntro/SectionSimpleIntro';
import SectionStrong from '@/component/sub/story/SectionStrong/SectionStrong';
import StorySubVisual from '@/component/sub/story/StorySubVisual/StorySubVisual';
import page_style from './storyClient.module.scss';

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
  );
}

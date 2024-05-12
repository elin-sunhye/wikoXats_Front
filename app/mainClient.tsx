import MainVisual from '@/component/main/MainVisual/MainVisual';
import SectionCount from '@/component/main/SectionCount/SectionCount';
import SectionProducts from '@/component/main/SectionProducts/SectionProducts';
import SectionService from '@/component/main/SectionService/SectionService';
import SectionStrength from '@/component/main/SectionStrength/SectionStrength';

export default function MainClient() {
  return (
    <>
      {/* mainVisual - 메인비주얼 */}
      <MainVisual />

      {/* contProducts - 제품 소개 */}
      <SectionProducts />

      {/* contService - 서비스 소개 */}
      <SectionService />

      {/* contStrength - 강점 소개 */}
      <SectionStrength />

      {/* contCount - 사이트 카운트 */}
      <SectionCount />
    </>
  );
}

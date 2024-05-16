import MainVisual from '@/component/main/MainVisual';
import SectionCount from '@/component/main/SectionCount/SectionCount';
import SectionPartners from '@/component/main/SectionPartners';
import SectionProduct from '@/component/main/SectionProduct';
import SectionService from '@/component/main/SectionService';

export default function MainClient() {
  return (
    <>
      {/* mainVisual - 메인비주얼 */}
      <MainVisual />

      {/* contProducts - 서비스 소개 */}
      <SectionService />

      {/* contService - 제품 소개 */}
      <SectionProduct />

      {/* contStrength - 파트너스 소개 */}
      <SectionPartners />

      {/* contCount - 사이트 카운트 */}
      {/* <SectionCount /> */}
    </>
  );
}

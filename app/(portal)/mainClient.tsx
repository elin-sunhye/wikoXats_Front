import MainVisual from "@/component/portal/main/MainVisual";
import SectionCount from "@/component/portal/main/SectionCount/SectionCount";
import SectionPartners from "@/component/portal/main/SectionPartners";
import SectionProduct from "@/component/portal/main/SectionProduct";
import SectionService from "@/component/portal/main/SectionService";

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

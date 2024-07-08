"use client";

import SectionMoreInfo from "@/component/common/SectionMoreInfo/SectionMoreInfo";
import ServiceDiffer from "@/component/portal/sub/service/ServiceDiffer/ServiceDiffer";
import ServicePlan from "@/component/portal/sub/service/ServicePlan/ServicePlan";
import ServiceSubVisual from "@/component/portal/sub/service/ServiceSubVisual/ServiceSubVisual";
import ServiceTech from "@/component/portal/sub/service/ServiceTech/ServiceTech";

export default function ServiceClient() {
  return (
    <>
      {/* 서브 비주얼 */}
      <ServiceSubVisual />
      {/* 서비스 계획 */}
      <ServicePlan />
      {/* 서비스 기술 */}
      <ServiceTech />
      {/* 서비스 차별점 */}
      <ServiceDiffer />
      {/* 서비스 인포 */}
      {/* <SectionMoreInfo sectionBg="var(--gray-3)" /> */}
    </>
  );
}

"use client";

import ProductCase from "@/component/portal/sub/products/ProductCase/ProductCase";
import ProductPlan from "@/component/portal/sub/products/ProductPlan/ProductPlan";
import ProductsSubVisual from "@/component/portal/sub/products/ProductSubVisual/ProductsSubVisual";
import SectionMoreInfo from "@/component/common/SectionMoreInfo/SectionMoreInfo";

export default function ProductsClient() {
  return (
    <>
      {/* 서브 비주얼 */}
      <ProductsSubVisual />

      {/* 제품 계획 */}
      <ProductPlan />

      {/* 제품 사례 */}
      <ProductCase />

      {/* asdasd */}
      {/* <SectionMoreInfo sectionBg="var(--gray-3)" /> */}
    </>
  );
}

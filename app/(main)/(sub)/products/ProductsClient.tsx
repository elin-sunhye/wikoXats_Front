'use client';

import ProductCase from '@/component/sub/products/ProductCase/ProductCase';
import ProductPlan from '@/component/sub/products/ProductPlan/ProductPlan';
import ProductsSubVisual from '@/component/sub/products/ProductSubVisual/ProductsSubVisual';

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
      <p>asda</p>
    </>
  );
}

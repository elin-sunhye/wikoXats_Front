'use client';

import ProductCase from './ProductCase/ProductCase';
import ProductPlan from './ProductPlan/ProductPlan';
import ProductsSubVisual from './ProductSubVisual/ProductsSubVisual';
import page_style from './productsClient.module.scss';

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

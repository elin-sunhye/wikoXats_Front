import SectionCount from '@/component/main/SectionCount/SectionCount';
import FaqScroll from '@/component/sub/faq/FaqScroll/FaqScroll';

export default function FaqClient() {
  return (
    <>
      {/* faq - 자주하는 질문 */}
      <FaqScroll />

      {/* contCount - 사이트 카운트 */}
      <SectionCount />
    </>
  );
}

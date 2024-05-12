import NewsCard from '@/component/sub/news/NewsCard/NewsCard';
import NewsInfo from '@/component/sub/news/NewsInfo/NewsInfo';
import NewsScroll from '@/component/sub/news/NewsScroll/NewsScroll';
import NewsSubVisual from '@/component/sub/news/NewsSubVisual/NewsSubVisual';

export default function NewsClient() {
  return (
    <>
      {/* 서브 비주얼 */}
      <NewsSubVisual />

      {/* 인포 */}
      <NewsInfo />

      {/* card */}
      <NewsCard />

      {/* NewsScroll */}
      <NewsScroll />
    </>
  );
}

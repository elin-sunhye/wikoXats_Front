import NewsCard from "@/component/sub/news/NewsCard/NewsCard";
import NewsInfo from "@/component/sub/news/NewsInfo/NewsInfo";
import ScrollSection from "@/component/common/ScrollSection/ScrollSection";
import NewsSubVisual from "@/component/sub/news/NewsSubVisual/NewsSubVisual";

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
      {/* <ScrollSection /> */}
    </>
  );
}

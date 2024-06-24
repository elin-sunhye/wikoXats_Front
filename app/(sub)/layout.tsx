import SectionMoreInfo from "@/component/common/SectionMoreInfo/SectionMoreInfo";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* 하단 위코 문의하기 */}
      <SectionMoreInfo sectionBg={"var(--gray-1)"} />
    </>
  );
}

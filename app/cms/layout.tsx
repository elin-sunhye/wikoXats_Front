import TabHeader from "@/component/cms/TabHeader/TabHeader";
import AutoAlert from "@/component/common/AutoAlert/AutoAlert";
import { Footer } from "@/component/common/Footer/Footer";
import SubTop from "@/component/common/Sub/SubTop/SubTop";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* header */}
      <TabHeader />

      {/* content */}
      <ReactQueryProvider>
        <div style={{ position: "relative", zIndex: "999" }}>
          <SubTop />
          {children}
        </div>
        {/* <div className="wrap"></div> */}

        {/* autoAlert */}
        <AutoAlert />
      </ReactQueryProvider>
      {/* footer */}
      <Footer />
    </>
  );
}

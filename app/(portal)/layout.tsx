import AutoAlert from "@/component/common/AutoAlert/AutoAlert";
import { Footer } from "@/component/common/Footer/Footer";
import { Header } from "@/component/portal/Header/Header";
import SubTop from "@/component/common/Sub/SubTop/SubTop";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* header */}
      <Header />

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

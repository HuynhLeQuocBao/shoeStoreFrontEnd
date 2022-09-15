import { BannerText } from "@/components/section/banner/index";
import { Header, Footer, BackToTop } from "./components";
import ScrollToTop from "react-scroll-to-top";
export function MainLayout({ children }) {
  return (
    <div>
      {/* <Header />
      <BannerText /> */}

      <main>{children}</main>
      <ScrollToTop
        smooth
        className='!rounded-[50%]'
        component={<BackToTop />}
      />
      <Footer />
    </div>
  );
}

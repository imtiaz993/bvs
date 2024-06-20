import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import WhoWeAre from "./components/who-we-are";
import PageBreak from "app/components/page-break";
import Process from "./components/process";
import Marquee from "./components/marquee";
import Stats from "./components/stats";
import CTA from "../../components/cta";
import "../../../public/css/style.css";
import "../../../public/css/style-timeline.css";
import "../../../public/css/slider.css";

export const metadata = {
  title: "AAPC | Home",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Topper />
      <WhoWeAre />
      <PageBreak />
      <Process />
      <Marquee />
      <PageBreak />
      <Stats />
      <PageBreak />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;

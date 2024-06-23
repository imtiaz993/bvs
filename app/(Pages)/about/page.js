import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import WhoWeAre from "./components/who-we-are";
import PageBreak from "app/components/page-break";
import WhatWeDo from "./components/what-we-do";
import Team from "./components/team";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "BVS | About",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const About = () => {
  return (
    <>
      <Navbar />
      <Topper />
      <WhoWeAre />
      <PageBreak />
      <WhatWeDo />
      <Team />
      <Footer />
    </>
  );
};

export default About;

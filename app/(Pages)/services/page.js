import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import ServiceDetail from "./components/service-detail";
import PageBreak from "app/components/page-break";
import RecommendedVendors from "./components/recommended-vendors";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";
import "../../../public/css/services.css";

export const metadata = {
  title: "BVS | Services",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Services = () => {
  return (
    <>
      <Navbar />
      <Topper />
      <ServiceDetail />
      <PageBreak />
      <RecommendedVendors />
      <Footer />
    </>
  );
};

export default Services;

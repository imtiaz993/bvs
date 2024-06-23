import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import CTA from "app/components/cta";
import PageBreak from "app/components/page-break";
import JoinTeam from "./components/join-team";
import Locations from "./components/locations";
import MapComponent from "./components/map";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";
import "../../../public/css/services.css";

export const metadata = {
  title: "BVS | Contact",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Topper />
      <div style={{ marginTop: "5%" }}>
        <CTA />
      </div>
      <PageBreak />
      <JoinTeam />
      <PageBreak />
      <Locations />
      <MapComponent />
      <Footer />
    </>
  );
};

export default Contact;

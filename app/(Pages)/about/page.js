import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
      <div>
        <div style={{ width: "100%", height: "75vh" }}>
          <img
            loading="lazy"
            src="/img/pageTopper.png"
            className="top-bg"
            alt="image"
          />
          <h1 className="header-text">About Us</h1>
        </div>

        <div className="responsive-two-column-grid" style={{ marginTop: "5%" }}>
          <div className="left-container1">
            <h2 style={{ textAlign: "center" }}>- Who We Are -</h2>
            <h1
              className="hover-text about-hover"
              style={{ textAlign: "center" }}
            >
              Building Violation Solutions
            </h1>
            <h4 style={{ lineheight: "1.75", textAlign: "center" }}>
              Building Violation Solutions Inc., provides expedient resolutions
              and closures to violations issued by New York City Building
              authorities. BVS partners with its sister company of architects,
              engineers and contractors to provide our clients with
              all-inclusive services that are unparalleled in the industry. By
              guiding our clients through the technicalities, procedural forms,
              and legalities concerning their respective properties, we have
              distinguished ourselves from the standard firm.
            </h4>
          </div>
          <div>
            <div className="photo-container">
              <img
                loading="lazy"
                className="parallax"
                src="/img/about1.png"
                style={{ width: "100%" }}
                alt="image"
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            loading="lazy"
            src="/img/pagebreak.png"
            className="page-break"
            alt="image"
          />
        </div>

        <div
          className="responsive-two-column-grid"
          style={{ marginBottom: "3%" }}
        >
          <div>
            <div className="photo-container2 right-side">
              <img
                loading="lazy"
                className="parallax"
                src="/img/about2.png"
                style={{ width: "100%" }}
                alt="image"
              />
            </div>
          </div>

          <div className="right-container1">
            <h2 style={{ textAlign: "center" }}>- What We Do -</h2>
            <h1
              className="hover-text about-hover"
              style={{ textAlign: "center" }}
            >
              Building Violation Solutions
            </h1>
            <h4
              className="right-text"
              style={{ lineHeight: "1.75", textAlign: "center" }}
            >
              While our seamless incorporation of the various aspects of
              property violations and navigation through them is what
              distinguishes our company as one of the leaders in violation
              services, our expertise and diligence is what our team is best
              known for. Our in-depth knowledge of the procedures, policies, and
              municipal codes of each of the building departments in the five
              boroughs allows us to assist clients with various properties
              spread around the New York area.{" "}
            </h4>
          </div>
        </div>

        <div className="parallax-view" style={{ marginBottom: "5%" }}>
          <h1 className="our-team-heading">Our Team</h1>
          <div className="responsive-two-column-grid">
            <div className="our-team firstone">
              <img loading="lazy" alt="allen" src="/img/allen_azarkian.png" />
              <h1
                className="hover-text white-inside"
                style={{ WebkitTextStrokeWidth: "thin" }}
              >
                Allen Azarkian
              </h1>
              <h2>CEO / Founder</h2>
            </div>
            <div className="our-team">
              <h1
                className="hover-text white-inside"
                style={{ WebkitTextStrokeWidth: "thin" }}
              >
                Ken McVeigh
              </h1>
              <h2 style={{ border: "none" }}>
                Director of BVS / Code and Zoning
              </h2>
              <img loading="lazy" alt="ken" src="/img/ken.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

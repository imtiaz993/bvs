import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
      <div>
        <div style={{ width: "100%", height: "75vh" }}>
          <img
            loading="lazy"
            src="/img/pageTopper.png"
            className="top-bg"
            alt="image"
          />
          <h1 className="header-text">Services</h1>
        </div>

        <div className="responsive-two-column-grid" style={{ marginTop: "5%" }}>
          <div style={{ padding: "5% 0 5% 0" }}>
            <div style={{ width: "100%" }}>
              <ul className="agency-selector">
                <li>
                  <a className="item active-service" href="#title-text">
                    DOB
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    FDNY
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    LPC
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    HPD
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    DOT
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    DEC
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    DCP
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    PDST
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    MTA
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    DCA
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    OATH
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    ECB
                  </a>
                </li>
                <li>
                  <a className="item" href="#title-text">
                    TOPO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ padding: "5% 20% 5% 0" }}>
            <div
              className="lcs-inside"
              style={{ width: "100%", padding: "3%" }}
            >
              <h1 id="title-text" className="hover-text">
                Department of Buildings
              </h1>
              <div id="dob">
                <ul id="dob-list" className="shown-services">
                  <li id="dob1" className="item-left active-service-inside">
                    Certificate of Occupancy Procurement
                  </li>
                  <li id="dob2" className="item-left">
                    Place of Assembly Certificate of Operation (PACO) and Permit
                  </li>
                  <li className="item-left">
                    Alteration DOB NOW filings, DOB Now Build Filings, DOB Now
                    Inspections
                  </li>
                  <li className="item-left">Signage Legalization</li>
                  <li className="item-left">
                    Construction Permitting and Sign-Offs
                  </li>
                  <li className="item-left">Equipment Use Permit</li>
                  <li className="item-left">
                    Boiler and Elevator Compliance and Registration
                  </li>
                  <li className="item-left">Electrical Inspections</li>
                  <li className="item-left">
                    After Hours Variance Permits, Assist Contractor with After
                    Hours Variances
                  </li>
                  <li className="item-left">
                    Reinstatement of Application/Supersede of Application
                  </li>
                  <li className="item-left">
                    Reissuance of Building Department Folder
                  </li>
                  <li className="item-left">
                    PAA/ Withdrawal, Reinstatement and Supersede
                  </li>
                </ul>
                <p id="dob-description" className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut porta metus. Quisque justo ipsum, auctor id lorem ut,
                  hendrerit eleifend enim. Cras eleifend lorem sit amet odio
                  consectetur tempus. Mauris et metus id turpis varius luctus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div id="fdny">
                <ul id="fdny-list" className="shown-services">
                  <li className="item-left">Place of Assembly Permit</li>
                  <li className="item-left">Fire Alarms</li>
                  <li>Fire Protection Plans</li>
                  <li>Sprinkler/Standpipe Systems</li>
                  <li>Boilers</li>
                  <li>Fire Suppression Systems</li>
                  <li>Generator/Fuel Storage</li>
                  <li>Resolve Violation Orders and Summons</li>
                  <li>Attend/ Reschedule Hearings</li>
                  <li>Reopen Default Judgements</li>
                  <li>Certificates of Fitness</li>
                </ul>
                <p id="fdny-description" className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut porta metus. Quisque justo ipsum, auctor id lorem ut,
                  hendrerit eleifend enim. Cras eleifend lorem sit amet odio
                  consectetur tempus. Mauris et metus id turpis varius luctus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div id="lpc">
                <ul id="lpc-list" className="shown-services">
                  <li>
                    Certificate of No Effect (CNE) Including Expedited and
                    FastTrack Applications
                  </li>
                  <li>Permit for Minor Work</li>
                  <li>Certificate of Appropriateness</li>
                  <li>Request for Evaluation</li>
                  <li>Landmark Status Letter</li>
                  <li>Records Requests</li>
                </ul>
              </div>
              <div id="hpd">
                <ul id="hpd-list" className="shown-services">
                  <li>Property Registration Assistance</li>
                  <li>Violation Issuance Request</li>
                  <li>Certification of Correction of Violations</li>
                </ul>
              </div>
              <div id="dot">
                <ul id="dot-list" className="shown-services">
                  <li>Application for Roadway/Sidewalk Permit</li>
                  <li>Sidewalk Violation Copy</li>
                  <li>Sidewalk Inspection Requests</li>
                  <li>Permit for Record Purposes</li>
                </ul>
              </div>
              <div id="dec">
                <ul id="dec-list" className="shown-services">
                  <li>Backflow Prevention Devices</li>
                  <li>Construction Noise Mitigation Plan</li>
                  <li>Asbestos Assessment Report</li>
                </ul>
              </div>
              <div id="dcp">
                <ul id="dcp-list" className="shown-services">
                  <li>Zoning Verification Letter</li>
                </ul>
              </div>
              <div id="pdst">
                <ul id="pdst-list" className="shown-services">
                  <li>Obtain Acknowledgement Letter</li>
                  <li>Obtain Street Trees Site Plan Approval</li>
                  <li>Obtain Street Trees Site Sign-Off</li>
                  <li>DEP Sewer/Site Connection</li>
                </ul>
              </div>
              <div id="mta">
                <ul id="mta-list" className="shown-services">
                  <li>
                    MTA/Transit Authority Approval (Department of Capital
                    Program Management: Outside Projects)
                  </li>
                </ul>
              </div>
              <div id="dca">
                <ul id="dca-list" className="shown-services">
                  <li>Sidewalk Cafe License</li>
                </ul>
              </div>
              <div id="oath">
                <ul id="oath-list" className="shown-services">
                  <li>Resolve Violation(s)</li>
                  <li>Representation for OATH Hearings</li>
                  <li>Reschedule Hearings</li>
                  <li>Reopen Default Judgements</li>
                </ul>
              </div>
              <div id="ecb">
                <ul id="ecb-list" className="shown-services">
                  <li>Compliance and Registration Complaints and Violations</li>
                  <li>Certificates of Correction</li>
                  <li>
                    Dismissal of Full/Partial Vacate or Full/Partial Stop Work
                    Orders
                  </li>
                </ul>
              </div>
              <div id="topo">
                <ul id="topo-list" className="shown-services">
                  <li>Application for Address</li>
                  <li>Address Verification (TOPO Stamp)</li>
                </ul>
              </div>
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

        <h1
          id="rec-ven"
          style={{
            textAlign: "center",
            fontweight: "bold",
            marginBottom: "2%",
          }}
        >
          Recommended Vendors
        </h1>
        <h4
          id="ven-text"
          style={{ textAlign: "center", width: "70%", margin: "auto" }}
        >
          BVS works hand in hand with our affiliated sister companies to ensure
          a smooth process from beginning to end.
        </h4>

        <div className="ser-container">
          <div
            onclick="window.open('https://azark.com')"
            id="azark-ser"
            className="ser-left1"
          >
            <h1>Azark</h1>
          </div>
          <div className="ser-right1">
            <h1>Inspections and Owner&apos;s Rep</h1>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <a href="tel:212-547-9000">
                <span
                  className="fas fa-phone text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
              <a href="mailto: admin@azark.com">
                <span
                  className="fas fa-envelope text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="ser-container">
          <div
            onclick="window.open('https://aapc.nyc')"
            id="aapc-ser"
            className="ser-right2"
          >
            <h1>AAPC</h1>
          </div>
          <div className="ser-left2">
            <h1>Architecture and Drafting</h1>
            <div style={{ justifycontent: "center", alignItems: "center" }}>
              <a href="tel:212-547-9000">
                <span
                  className="fas fa-phone text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#BA2025",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
              <a href="mailto: admin@aapc.nyc">
                <span
                  className="fas fa-envelope text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#BA2025",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="ser-container">
          <div
            onclick="window.open('https://arkco.nyc')"
            id="arkco-ser"
            className="ser-left1"
          >
            <h1>ArkCo</h1>
          </div>
          <div className="ser-right1">
            <h1>Design and Construction</h1>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <a href="tel:212-292-8226">
                <span
                  className="fas fa-phone text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
              <a href="mailto: admin@arkco.nyc">
                <span
                  className="fas fa-envelope text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="ser-container">
          <div
            onclick="window.open('https://violerts.com')"
            id="violerts-ser"
            className="ser-right2"
          >
            <h1>Violerts</h1>
          </div>
          <div className="ser-left2">
            <h1>Property Database and Alerts</h1>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <a href="tel:212-401-6011">
                <span
                  className="fas fa-phone text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
              <a href="mailto: admin@violerts.com">
                <span
                  className="fas fa-envelope text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div className="ser-container">
          <div
            onclick="window.open('https://vps.nyc')"
            id="vps-ser"
            className="ser-left1"
          >
            <h1>VPS</h1>
          </div>
          <div className="ser-right1">
            <h1>Digital and Printed Media</h1>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <a href="tel:212-294-5974">
                <span
                  className="fas fa-phone text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
              <a href="mailto: admin@vps.nyc">
                <span
                  className="fas fa-envelope text-white"
                  style={{
                    padding: "2.5%",
                    backgroundColor: "#ad172c",
                    borderRadius: "500px",
                    margin: "1% 5%",
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;

import React from "react";
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
    <div>
      <div style="width: 100%; height: 75vh;">
        <img
          loading="lazy"
          src="/img/pageTopper.png"
          class="top-bg"
          alt="image"
        />
        <h1 class="header-text">Services</h1>
      </div>

      <div class="responsive-two-column-grid" style="margin-top: 5%">
        <div style="padding: 5% 0 5% 0;">
          <div style=" width: 100%;">
            <ul class="agency-selector">
              <li>
                <a class="item active-service" href="#title-text">
                  DOB
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  FDNY
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  LPC
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  HPD
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  DOT
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  DEC
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  DCP
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  PDST
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  MTA
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  DCA
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  OATH
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  ECB
                </a>
              </li>
              <li>
                <a class="item" href="#title-text">
                  TOPO
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style="padding: 5% 20% 5% 0;">
          <div class="lcs-inside" style=" width: 100%; padding: 3%">
            <h1 id="title-text" class="hover-text">
              Department of Buildings
            </h1>
            <div id="dob">
              <ul id="dob-list" class="shown-services">
                <li id="dob1" class="item-left active-service-inside">
                  Certificate of Occupancy Procurement
                </li>
                <li id="dob2" class="item-left">
                  Place of Assembly Certificate of Operation (PACO) and Permit
                </li>
                <li class="item-left">
                  Alteration DOB NOW filings, DOB Now Build Filings, DOB Now
                  Inspections
                </li>
                <li class="item-left">Signage Legalization</li>
                <li class="item-left">Construction Permitting and Sign-Offs</li>
                <li class="item-left">Equipment Use Permit</li>
                <li class="item-left">
                  Boiler and Elevator Compliance and Registration
                </li>
                <li class="item-left">Electrical Inspections</li>
                <li class="item-left">
                  After Hours Variance Permits, Assist Contractor with After
                  Hours Variances
                </li>
                <li class="item-left">
                  Reinstatement of Application/Supersede of Application
                </li>
                <li class="item-left">
                  Reissuance of Building Department Folder
                </li>
                <li class="item-left">
                  PAA/ Withdrawal, Reinstatement and Supersede
                </li>
              </ul>
              <p id="dob-description" class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit
                eleifend enim. Cras eleifend lorem sit amet odio consectetur
                tempus. Mauris et metus id turpis varius luctus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <div id="fdny">
              <ul id="fdny-list" class="shown-services">
                <li class="item-left">Place of Assembly Permit</li>
                <li class="item-left">Fire Alarms</li>
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
              <p id="fdny-description" class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit
                eleifend enim. Cras eleifend lorem sit amet odio consectetur
                tempus. Mauris et metus id turpis varius luctus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <div id="lpc">
              <ul id="lpc-list" class="shown-services">
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
              <ul id="hpd-list" class="shown-services">
                <li>Property Registration Assistance</li>
                <li>Violation Issuance Request</li>
                <li>Certification of Correction of Violations</li>
              </ul>
            </div>
            <div id="dot">
              <ul id="dot-list" class="shown-services">
                <li>Application for Roadway/Sidewalk Permit</li>
                <li>Sidewalk Violation Copy</li>
                <li>Sidewalk Inspection Requests</li>
                <li>Permit for Record Purposes</li>
              </ul>
            </div>
            <div id="dec">
              <ul id="dec-list" class="shown-services">
                <li>Backflow Prevention Devices</li>
                <li>Construction Noise Mitigation Plan</li>
                <li>Asbestos Assessment Report</li>
              </ul>
            </div>
            <div id="dcp">
              <ul id="dcp-list" class="shown-services">
                <li>Zoning Verification Letter</li>
              </ul>
            </div>
            <div id="pdst">
              <ul id="pdst-list" class="shown-services">
                <li>Obtain Acknowledgement Letter</li>
                <li>Obtain Street Trees Site Plan Approval</li>
                <li>Obtain Street Trees Site Sign-Off</li>
                <li>DEP Sewer/Site Connection</li>
              </ul>
            </div>
            <div id="mta">
              <ul id="mta-list" class="shown-services">
                <li>
                  MTA/Transit Authority Approval (Department of Capital Program
                  Management: Outside Projects)
                </li>
              </ul>
            </div>
            <div id="dca">
              <ul id="dca-list" class="shown-services">
                <li>Sidewalk Cafe License</li>
              </ul>
            </div>
            <div id="oath">
              <ul id="oath-list" class="shown-services">
                <li>Resolve Violation(s)</li>
                <li>Representation for OATH Hearings</li>
                <li>Reschedule Hearings</li>
                <li>Reopen Default Judgements</li>
              </ul>
            </div>
            <div id="ecb">
              <ul id="ecb-list" class="shown-services">
                <li>Compliance and Registration Complaints and Violations</li>
                <li>Certificates of Correction</li>
                <li>
                  Dismissal of Full/Partial Vacate or Full/Partial Stop Work
                  Orders
                </li>
              </ul>
            </div>
            <div id="topo">
              <ul id="topo-list" class="shown-services">
                <li>Application for Address</li>
                <li>Address Verification (TOPO Stamp)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: center;">
        <img
          loading="lazy"
          src="/img/pagebreak.png"
          class="page-break"
          alt="image"
        />
      </div>

      <h1
        id="rec-ven"
        style="text-align: center; font-weight: bold; margin-bottom: 2%"
      >
        Recommended Vendors
      </h1>
      <h4 id="ven-text" style="text-align: center; width: 70%; margin: auto">
        BVS works hand in hand with our affiliated sister companies to ensure a
        smooth process from beginning to end.
      </h4>

      <div class="ser-container">
        <div
          onclick="window.open('https://azark.com')"
          id="azark-ser"
          class="ser-left1"
        >
          <h1>Azark</h1>
        </div>
        <div class="ser-right1">
          <h1>Inspections and Owner's Rep</h1>
          <div style="justify-content: center; align-items: center">
            <a href="tel:212-547-9000">
              <span
                class="fas fa-phone text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
            <a href="mailto: admin@azark.com">
              <span
                class="fas fa-envelope text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="ser-container">
        <div
          onclick="window.open('https://aapc.nyc')"
          id="aapc-ser"
          class="ser-right2"
        >
          <h1>AAPC</h1>
        </div>
        <div class="ser-left2">
          <h1>Architecture and Drafting</h1>
          <div style="justify-content: center; align-items: center">
            <a href="tel:212-547-9000">
              <span
                class="fas fa-phone text-white"
                style="padding: 2.5%; background-color: #BA2025; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
            <a href="mailto: admin@aapc.nyc">
              <span
                class="fas fa-envelope text-white"
                style="padding: 2.5%; background-color: #BA2025; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="ser-container">
        <div
          onclick="window.open('https://arkco.nyc')"
          id="arkco-ser"
          class="ser-left1"
        >
          <h1>ArkCo</h1>
        </div>
        <div class="ser-right1">
          <h1>Design and Construction</h1>
          <div style="justify-content: center; align-items: center">
            <a href="tel:212-292-8226">
              <span
                class="fas fa-phone text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
            <a href="mailto: admin@arkco.nyc">
              <span
                class="fas fa-envelope text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="ser-container">
        <div
          onclick="window.open('https://violerts.com')"
          id="violerts-ser"
          class="ser-right2"
        >
          <h1>Violerts</h1>
        </div>
        <div class="ser-left2">
          <h1>Property Database and Alerts</h1>
          <div style="justify-content: center; align-items: center">
            <a href="tel:212-401-6011">
              <span
                class="fas fa-phone text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
            <a href="mailto: admin@violerts.com">
              <span
                class="fas fa-envelope text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="ser-container">
        <div
          onclick="window.open('https://vps.nyc')"
          id="vps-ser"
          class="ser-left1"
        >
          <h1>VPS</h1>
        </div>
        <div class="ser-right1">
          <h1>Digital and Printed Media</h1>
          <div style="justify-content: center; align-items: center">
            <a href="tel:212-294-5974">
              <span
                class="fas fa-phone text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
            <a href="mailto: admin@vps.nyc">
              <span
                class="fas fa-envelope text-white"
                style="padding: 2.5%; background-color: #ad172c; border-radius: 500px; margin: 1% 5%"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

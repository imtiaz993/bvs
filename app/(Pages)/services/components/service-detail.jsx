"use client";

import { useState } from "react";
import { descriptions, serviceDetails, services } from "../data";

const ServiceDetail = () => {
  const [activeService, setActiveService] = useState("DOB");
  const [activeServiceInside, setActiveServiceInside] = useState("dob1");

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const handleServiceInsideClick = (detail) => {
    setActiveServiceInside(detail);
  };

  return (
    <div className="responsive-two-column-grid" style={{ marginTop: "5%" }}>
      <div style={{ padding: "5% 0 5% 0" }}>
        <div style={{ width: "100%" }}>
          <ul className="agency-selector">
            {services.map((service) => (
              <li key={service}>
                <button
                  className={`item ${
                    activeService === service ? "active-service" : ""
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ padding: "5% 20% 5% 0" }}>
        <div className="lcs-inside" style={{ width: "100%", padding: "3%" }}>
          <h1 id="title-text" className="hover-text">
            {descriptions[activeService]}
          </h1>
          {activeService === "DOB" && (
            <div id="dob">
              <ul id="dob-list" className="shown-services">
                {Object.keys(serviceDetails).map((key) => (
                  <li
                    key={key}
                    className={`item-left ${
                      activeServiceInside === key ? "active-service-inside" : ""
                    }`}
                    onClick={() => handleServiceInsideClick(key)}
                  >
                    {serviceDetails[key]}
                  </li>
                ))}
              </ul>
              <p id="dob-description" className="description">
                {serviceDetails[activeServiceInside]}
              </p>
            </div>
          )}
          {activeService === "FDNY" && (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit
                eleifend enim. Cras eleifend lorem sit amet odio consectetur
                tempus. Mauris et metus id turpis varius luctus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          )}
          {activeService === "LPC" && (
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
          )}
          {activeService === "HPD" && (
            <div id="hpd">
              <ul id="hpd-list" className="shown-services">
                <li>Property Registration Assistance</li>
                <li>Violation Issuance Request</li>
                <li>Certification of Correction of Violations</li>
              </ul>
            </div>
          )}
          {activeService === "DOT" && (
            <div id="dot">
              <ul id="dot-list" className="shown-services">
                <li>Application for Roadway/Sidewalk Permit</li>
                <li>Sidewalk Violation Copy</li>
                <li>Sidewalk Inspection Requests</li>
                <li>Permit for Record Purposes</li>
              </ul>
            </div>
          )}
          {activeService === "DEC" && (
            <div id="dec">
              <ul id="dec-list" className="shown-services">
                <li>Backflow Prevention Devices</li>
                <li>Construction Noise Mitigation Plan</li>
                <li>Asbestos Assessment Report</li>
              </ul>
            </div>
          )}
          {activeService === "DCP" && (
            <div id="dcp">
              <ul id="dcp-list" className="shown-services">
                <li>Zoning Verification Letter</li>
              </ul>
            </div>
          )}
          {activeService === "PDST" && (
            <div id="pdst">
              <ul id="pdst-list" className="shown-services">
                <li>Obtain Acknowledgement Letter</li>
                <li>Obtain Street Trees Site Plan Approval</li>
                <li>Obtain Street Trees Site Sign-Off</li>
                <li>DEP Sewer/Site Connection</li>
              </ul>
            </div>
          )}
          {activeService === "MTA" && (
            <div id="mta">
              <ul id="mta-list" className="shown-services">
                <li>
                  MTA/Transit Authority Approval (Department of Capital Program
                  Management: Outside Projects)
                </li>
              </ul>
            </div>
          )}
          {activeService === "DCA" && (
            <div id="dca">
              <ul id="dca-list" className="shown-services">
                <li>Sidewalk Cafe License</li>
              </ul>
            </div>
          )}
          {activeService === "OATH" && (
            <div id="oath">
              <ul id="oath-list" className="shown-services">
                <li>Resolve Violation(s)</li>
                <li>Representation for OATH Hearings</li>
                <li>Reschedule Hearings</li>
                <li>Reopen Default Judgements</li>
              </ul>
            </div>
          )}
          {activeService === "ECB" && (
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
          )}
          {activeService === "TOPO" && (
            <div id="topo">
              <ul id="topo-list" className="shown-services">
                <li>House Number Verification</li>
                <li>Change House Number</li>
                <li>Property Line Disputes</li>
                <li>Topographic Survey</li>
                <li>Final Survey</li>
                <li>Street Deed Verification</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React from "react";

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
    <div>
      <div style="width: 100%; height: 75vh;">
        <img
          loading="lazy"
          src="/img/pageTopper.png"
          class="top-bg"
          alt="image"
        />
        <h1 class="header-text">About Us</h1>
      </div>

      <div class="responsive-two-column-grid" style="margin-top: 5%">
        <div class="left-container1">
          <h2 style="text-align: center">- Who We Are -</h2>
          <h1 class="hover-text about-hover" style="text-align: center">
            Building Violation Solutions
          </h1>
          <h4 style="line-height: 1.75; text-align: center">
            Building Violation Solutions Inc., provides expedient resolutions
            and closures to violations issued by New York City Building
            authorities. BVS partners with its sister company of architects,
            engineers and contractors to provide our clients with all-inclusive
            services that are unparalleled in the industry. By guiding our
            clients through the technicalities, procedural forms, and legalities
            concerning their respective properties, we have distinguished
            ourselves from the standard firm.
          </h4>
        </div>
        <div>
          <div class="photo-container">
            <img
              loading="lazy"
              class="parallax"
              src="/img/about1.png"
              style="width: 100%;"
              alt="image"
            />
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

      <div class="responsive-two-column-grid" style="margin-bottom: 3%">
        <div>
          <div class="photo-container2 right-side">
            <img
              loading="lazy"
              class="parallax"
              src="/img/about2.png"
              style="width: 100%;"
              alt="image"
            />
          </div>
        </div>

        <div class="right-container1">
          <h2 style="text-align: center">- What We Do -</h2>
          <h1 class="hover-text about-hover" style="text-align: center">
            Building Violation Solutions
          </h1>
          <h4 class="right-text" style="line-height: 1.75; text-align: center">
            While our seamless incorporation of the various aspects of property
            violations and navigation through them is what distinguishes our
            company as one of the leaders in violation services, our expertise
            and diligence is what our team is best known for. Our in-depth
            knowledge of the procedures, policies, and municipal codes of each
            of the building departments in the five boroughs allows us to assist
            clients with various properties spread around the New York area.{" "}
          </h4>
        </div>
      </div>

      <div class="parallax-view" style="margin-bottom: 5%">
        <h1 class="our-team-heading">Our Team</h1>
        <div class="responsive-two-column-grid">
          <div class="our-team firstone">
            <img loading="lazy" alt="allen" src="/img/allen_azarkian.png" />
            <h1
              class="hover-text white-inside"
              style="-webkit-text-stroke-width: thin"
            >
              Allen Azarkian
            </h1>
            <h2>CEO / Founder</h2>
          </div>
          <div class="our-team">
            <h1
              class="hover-text white-inside"
              style="-webkit-text-stroke-width: thin"
            >
              Ken McVeigh
            </h1>
            <h2 style="border: none">Director of BVS / Code and Zoning</h2>
            <img loading="lazy" alt="ken" src="/img/ken.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

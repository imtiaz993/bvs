import React from "react";
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
    <div>
      <div style="width: 100vw; height: 100vh">
        <img
          loading="lazy"
          alt="topper"
          src="/img/topper.png"
          style="width: 100%; height: 100%; object-fit: cover; position: relative"
        />
        <img
          loading="lazy"
          alt="logo"
          style="position: absolute; z-index: 90; top: 0; left: 7%; right: 0; bottom: 0; margin: auto; width: 25vmax"
          draggable="false"
          src="/img/open_logo.png"
        />
        <img
          loading="lazy"
          alt="filled-logo"
          id="filled-logo"
          style="position: absolute; z-index: 90; top: 0; left: 7%; right: 0; bottom: 0; margin: auto; width: 25vmax"
          draggable="false"
          src="/img/filled_logo.png"
        />
        <h1
          class="hover-text"
          style="position: absolute; top: 20%; left: 0; z-index: 10; font-size: 5vmax; border-bottom: #BA2025 5px solid; padding: 2% 2% 1.5% 0%; font-weight: bold; "
        >
          Your Violations
        </h1>
        <h1
          class="hover-text white-inside"
          style="position: absolute; bottom: 20%; right: 0; z-index: 10; font-size: 5vmax; border-bottom: #fff 5px solid; padding: 2% 0 1.5% 2%; font-weight: bold; -webkit-text-stroke-color: #fff;"
        >
          Our Solutions
        </h1>
      </div>

      <div class="responsive-two-column-grid">
        <div class="outside-about">
          <div class="about-left">
            <h4>Who We Are</h4>
            <h1>About Us</h1>
            <br />
            <h3>
              Our story at BVS, begins with Allen Azarkian AIA. A registered
              Architect, Visionary, and Building Code Expert. Allen has made it
              his mission to provide expert knowledge and services, to
              strategically maneuver and remain compliant with NYC rules and
              regulations in the quickest and most cost-effective manner. We are
              a multidisciplinary tech-enabled project management service, that
              bridges the gaps between the silos of property management and NYC
              municipal agencies. We handle the red tape to ensure you remain
              compliant.
            </h3>
          </div>
        </div>
        <div>
          <div class="about-right">
            <img
              loading="lazy"
              class="parallax"
              src="/img/homeAbout.png"
              style="width: 110%; margin-left: -5%; object-fit: cover; object-position: 0 0"
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

      <section id="process">
        <h1 class="section-title">Our Process</h1>
        <div class="container-fluid">
          <div class="row">
            <div class="steps-timeline text-center">
              <div class="steps-one">
                <div class="setup">
                  <div class="pane-warp">
                    <div class="steps-pane">
                      <h2>
                        Investigate & <br />
                        Due-Diligence
                      </h2>
                      <p>
                        We verify your building’s status of compliance with all
                        NYC city’s regulations and agencies to identify the
                        problematic areas of your property while confirming with
                        utilizing comprehensive public data.{" "}
                      </p>
                      <h1>01</h1>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane"></div>
                  </div>
                </div>
                <div class="step-wrap">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane" style="">
                    <img loading="lazy" src="/img/step1.png" alt="image" />
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>

              <div class="steps-one mobile-only">
                <div class="setup">
                  <div class="pane-warp">
                    <div class="steps-pane">
                      <h2>Survey & Understanding </h2>
                      <p>
                        We assess the previous and current data of your building
                        to verify and confirm existing conditions, while
                        simultaneously conducting on-site property surveys to
                        ensure compliance with all NYC building authorities.{" "}
                      </p>
                      <h1>02</h1>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane"></div>
                  </div>
                </div>
                <div class="step-wrap">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane" style="">
                    <img loading="lazy" src="/img/step2.jpg" alt="image" />
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>

              <div class="steps-two">
                <div class="setup">
                  <div class="pane-warp back-blue">
                    <div class="steps-pane">
                      <img loading="lazy" src="/img/step2.jpg" alt="image" />
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane"></div>
                  </div>
                </div>
                <div class="step-wrap2">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="step-wrap">
                  <div class="steps-stops">
                    <div
                      class="verticle-line back-orange"
                      style="width: 0"
                    ></div>
                  </div>
                </div>
                <div class="pane-warp back-orange">
                  <div class="steps-pane">
                    <h2>Survey & Understanding </h2>
                    <p>
                      We assess the previous and current data of your building
                      to verify and confirm existing conditions, while
                      simultaneously conducting on-site property surveys to
                      ensure compliance with all NYC building authorities.{" "}
                    </p>
                    <h1>02</h1>
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>

              <div class="steps-three">
                <div class="setup">
                  <div class="pane-warp ">
                    <div class="steps-pane">
                      <h2>Propose & Clarify</h2>
                      <p>
                        Our trusted professionals will provide our clientele
                        with innovative design solutions from our comprehensive
                        investigation to ensure we are following through to
                        cure, solve and ensure your building is in compliance
                        with all city agencies in a swift process.{" "}
                      </p>
                      <h1>03</h1>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue"></div>
                </div>
                <div class="step-wrap">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane">
                    <img loading="lazy" src="/img/step3.png" alt="image" />
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>

              <div class="steps-one mobile-only">
                <div class="setup">
                  <div class="pane-warp">
                    <div class="steps-pane">
                      <h2>Resolve & Deliver</h2>
                      <p>
                        Our expert team will submit all documentation to the DOB
                        and/or any other involved entities. We will ensure all
                        client input is addressed and direct any objections that
                        may arise during the review process, while ensuring
                        compliance with applicable regulations. This way we are
                        able to provide you with a unique all inclusive service,
                        from beginning to end.
                      </p>
                      <h1>04</h1>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane"></div>
                  </div>
                </div>
                <div class="step-wrap" style="padding-top: 100%">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane" style="margin-top: -50px">
                    <img loading="lazy" src="/img/step4.png" alt="image" />
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>

              <div class="steps-four">
                <div class="setup">
                  <div class="pane-warp back-blue">
                    <div class="steps-pane">
                      <img loading="lazy" src="/img/step4.png" alt="image" />
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane"></div>
                  </div>
                </div>
                <div class="step-wrap2">
                  <div class="steps-stops">
                    <div class="verticle-line back-orange"></div>
                  </div>
                </div>
                <div class="step-wrap">
                  <div class="steps-stops">
                    <div
                      class="verticle-line back-orange"
                      style="width: 0"
                    ></div>
                  </div>
                </div>
                <div class="pane-warp back-orange" style="height: 100%">
                  <div class="steps-pane">
                    <h2>Resolve & Deliver</h2>
                    <p>
                      Our expert team will submit all documentation to the DOB
                      and/or any other involved entities. We will ensure all
                      client input is addressed and direct any objections that
                      may arise during the review process, while ensuring
                      compliance with applicable regulations. This way we are
                      able to provide you with a unique all inclusive service,
                      from beginning to end.
                    </p>
                    <h1>04</h1>
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="marquee" style="margin-top: 4vh">
          <div class="marquee__group">
            <h2>DOB</h2>
            <h2>FDNY</h2>
            <h2>LPC</h2>
            <h2>HPD</h2>
            <h2>DOT</h2>
            <h2>DEC</h2>
            <h2>DCP</h2>
            <h2>PDST</h2>
            <h2>MTA</h2>
            <h2>DCA</h2>
            <h2>OATH</h2>
            <h2>ECB</h2>
            <h2>TOPO</h2>
            <h2>DOB</h2>
            <h2>FDNY</h2>
            <h2>LPC</h2>
            <h2>HPD</h2>
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

        <div class="parallax-view">
          <div class="responsive-three-column-grid">
            <div class="stat">
              <h1 class="hover-text">5,708</h1>
              <h2>Violations Resolved</h2>
            </div>
            <div class="stat">
              <h1 class="hover-text">689</h1>
              <h2>Properties Monitored</h2>
            </div>
            <div class="stat">
              <h1 class="hover-text">23+</h1>
              <h2>Years In Business</h2>
            </div>
          </div>

          <div class="responsive-two-column-grid">
            <div class="stats-left">
              <h1>
                Where the grey area becomes
                <b
                  class="hover-text white-inside"
                  style="-webkit-text-stroke-color: white; -webkit-text-stroke-width: thin"
                >
                  {" "}
                  clear
                </b>
              </h1>
            </div>
            <div class="stats-right" style="padding-bottom: 5%">
              <h5 style="color: white;     font-family: 'Tenorite', sans-serif;">
                Our team of New York City professionals is dedicated to
                leveraging the most advanced industry technology to seamlessly
                manage and track all permits for your project. We are committed
                to <b>assisting owners and tenants</b> in swiftly securing{" "}
                <b>aggressive permit approvals</b>, ensuring a{" "}
                <b>smooth and timely construction process to completion.</b>{" "}
              </h5>
              <a href="/contact">- Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <div style="display: flex; justify-content: center;">
        <img
          loading="lazy"
          src="/img/pagebreak.png"
          class="page-break"
          alt="image"
        />
      </div>

      <div class="responsive-two-column-grid">
        <div class="contact-left">
          <div class="contact-img">
            <img
              loading="lazy"
              class="parallax"
              src="/img/contact1.png"
              style="width: 100%"
              alt="image"
            />
          </div>
        </div>
        <div>
          <div class="contact-right">
            <h1>
              For more information, business opportunities or any questions;
              reach out below
            </h1>
            <form action="https://formsubmit.co/admin@bvs.nyc" method="POST">
              <input type="hidden" name="_next" value="https://bvs.nyc/" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style="display:none" />

              <input
                type="text"
                placeholder="Name"
                name="Name"
                style="width: 100%"
                required
              />
              <div style="display: flex; justify-content: space-between">
                <input
                  type="text"
                  placeholder="Subject"
                  name="_subject"
                  style="width: 45%"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  style="width: 45%"
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                name="Message"
                style="width: 100%"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

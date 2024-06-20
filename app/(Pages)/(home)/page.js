import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
      <div>
        <div style={{ width: "100vw", height: "100vh" }}>
          <img
            loading="lazy"
            alt="topper"
            src="/img/topper.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
            }}
          />
          <img
            loading="lazy"
            alt="logo"
            style={{
              position: "absolute",
              zIndex: "90",
              top: "0",
              left: "7%",
              right: "0",
              bottom: "0",
              margin: "auto",
              width: "25vmax",
            }}
            draggable="false"
            src="/img/open_logo.png"
          />
          <img
            loading="lazy"
            alt="filled-logo"
            id="filled-logo"
            style={{
              position: "absolute",
              zIndex: "90",
              top: "0",
              left: "7%",
              right: "0",
              bottom: "0",
              margin: "auto",
              width: "25vmax",
            }}
            draggable="false"
            src="/img/filled_logo.png"
          />
          <h1
            className="hover-text"
            style={{
              position: "absolute",
              top: "20%",
              left: 0,
              zIndex: "10",
              fontSize: "5vmax",
              borderBottom: "#BA2025 5px solid",
              padding: "2% 2% 1.5% 0%",
              fontWeight: "bold",
            }}
          >
            Your Violations
          </h1>
          <h1
            className="hover-text white-inside"
            style={{
              position: "absolute",
              bottom: "20%",
              right: 0,
              zIndex: "10",
              fontSize: "5vmax",
              borderBottom: "#fff 5px solid",
              padding: "2% 0 1.5% 2%",
              fontWeight: "bold",
              WebkitTextStrokeColor: "#fff",
            }}
          >
            Our Solutions
          </h1>
        </div>

        <div className="responsive-two-column-grid">
          <div className="outside-about">
            <div className="about-left">
              <h4>Who We Are</h4>
              <h1>About Us</h1>
              <br />
              <h3>
                Our story at BVS, begins with Allen Azarkian AIA. A registered
                Architect, Visionary, and Building Code Expert. Allen has made
                it his mission to provide expert knowledge and services, to
                strategically maneuver and remain compliant with NYC rules and
                regulations in the quickest and most cost-effective manner. We
                are a multidisciplinary tech-enabled project management service,
                that bridges the gaps between the silos of property management
                and NYC municipal agencies. We handle the red tape to ensure you
                remain compliant.
              </h3>
            </div>
          </div>
          <div>
            <div className="about-right">
              <img
                loading="lazy"
                className="parallax"
                src="/img/homeAbout.png"
                style={{
                  width: "110%",
                  marginLeft: "-5%",
                  objectFit: "cover",
                  objectPosition: "0 0",
                }}
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

        <section id="process">
          <h1 className="section-title">Our Process</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="steps-timeline text-center">
                <div className="steps-one">
                  <div className="setup">
                    <div className="pane-warp">
                      <div className="steps-pane">
                        <h2>
                          Investigate & <br />
                          Due-Diligence
                        </h2>
                        <p>
                          We verify your building’s status of compliance with
                          all NYC city’s regulations and agencies to identify
                          the problematic areas of your property while
                          confirming with utilizing comprehensive public data.{" "}
                        </p>
                        <h1>01</h1>
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue">
                      <div className="inverted-steps-pane"></div>
                    </div>
                  </div>
                  <div className="step-wrap">
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="pane-warp back-blue">
                    <div className="steps-pane">
                      <img loading="lazy" src="/img/step1.png" alt="image" />
                    </div>
                  </div>
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>

                <div className="steps-one mobile-only">
                  <div className="setup">
                    <div className="pane-warp">
                      <div className="steps-pane">
                        <h2>Survey & Understanding </h2>
                        <p>
                          We assess the previous and current data of your
                          building to verify and confirm existing conditions,
                          while simultaneously conducting on-site property
                          surveys to ensure compliance with all NYC building
                          authorities.{" "}
                        </p>
                        <h1>02</h1>
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue">
                      <div className="inverted-steps-pane"></div>
                    </div>
                  </div>
                  <div className="step-wrap">
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="pane-warp back-blue">
                    <div className="steps-pane">
                      <img loading="lazy" src="/img/step2.jpg" alt="image" />
                    </div>
                  </div>
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>

                <div className="steps-two">
                  <div className="setup">
                    <div className="pane-warp back-blue">
                      <div className="steps-pane">
                        <img loading="lazy" src="/img/step2.jpg" alt="image" />
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue">
                      <div className="inverted-steps-pane"></div>
                    </div>
                  </div>
                  <div className="step-wrap2">
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="step-wrap">
                    <div className="steps-stops">
                      <div
                        className="verticle-line back-orange"
                        style={{ width: "0" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pane-warp back-orange">
                    <div className="steps-pane">
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
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>

                <div className="steps-three">
                  <div className="setup">
                    <div className="pane-warp ">
                      <div className="steps-pane">
                        <h2>Propose & Clarify</h2>
                        <p>
                          Our trusted professionals will provide our clientele
                          with innovative design solutions from our
                          comprehensive investigation to ensure we are following
                          through to cure, solve and ensure your building is in
                          compliance with all city agencies in a swift process.{" "}
                        </p>
                        <h1>03</h1>
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue"></div>
                  </div>
                  <div className="step-wrap">
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="pane-warp back-blue">
                    <div className="steps-pane">
                      <img loading="lazy" src="/img/step3.png" alt="image" />
                    </div>
                  </div>
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>

                <div className="steps-one mobile-only">
                  <div className="setup">
                    <div className="pane-warp">
                      <div className="steps-pane">
                        <h2>Resolve & Deliver</h2>
                        <p>
                          Our expert team will submit all documentation to the
                          DOB and/or any other involved entities. We will ensure
                          all client input is addressed and direct any
                          objections that may arise during the review process,
                          while ensuring compliance with applicable regulations.
                          This way we are able to provide you with a unique all
                          inclusive service, from beginning to end.
                        </p>
                        <h1>04</h1>
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue">
                      <div className="inverted-steps-pane"></div>
                    </div>
                  </div>
                  <div className="step-wrap" style={{ paddingTop: "100%" }}>
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="pane-warp back-blue">
                    <div className="steps-pane" style={{ marginTop: "-50px" }}>
                      <img loading="lazy" src="/img/step4.png" alt="image" />
                    </div>
                  </div>
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>

                <div className="steps-four">
                  <div className="setup">
                    <div className="pane-warp back-blue">
                      <div className="steps-pane">
                        <img loading="lazy" src="/img/step4.png" alt="image" />
                      </div>
                    </div>
                    <div className="inverted-pane-warp back-blue">
                      <div className="inverted-steps-pane"></div>
                    </div>
                  </div>
                  <div className="step-wrap2">
                    <div className="steps-stops">
                      <div className="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div className="step-wrap">
                    <div className="steps-stops">
                      <div
                        className="verticle-line back-orange"
                        style={{ width: "0" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="pane-warp back-orange"
                    style={{ height: "100%" }}
                  >
                    <div className="steps-pane">
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
                  <div className="inverted-pane-warp back-blue">
                    <div className="inverted-steps-pane bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="marquee" style={{ marginTop: "4vh" }}>
            <div className="marquee__group">
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              loading="lazy"
              src="/img/pagebreak.png"
              className="page-break"
              alt="image"
            />
          </div>

          <div className="parallax-view">
            <div className="responsive-three-column-grid">
              <div className="stat">
                <h1 className="hover-text">5,708</h1>
                <h2>Violations Resolved</h2>
              </div>
              <div className="stat">
                <h1 className="hover-text">689</h1>
                <h2>Properties Monitored</h2>
              </div>
              <div className="stat">
                <h1 className="hover-text">23+</h1>
                <h2>Years In Business</h2>
              </div>
            </div>

            <div className="responsive-two-column-grid">
              <div className="stats-left">
                <h1>
                  Where the grey area becomes
                  <b
                    className="hover-text white-inside"
                    style={{
                      WebkitTextStrokeColor: "white",
                      WebkitTextStrokeWidth: "thin",
                    }}
                  >
                    {" "}
                    clear
                  </b>
                </h1>
              </div>
              <div className="stats-right" style={{ paddingBottom: "5%" }}>
                <h5
                  style={{ color: "white", fontFamily: "Tenorite, sans-serif" }}
                >
                  Our team of New York City professionals is dedicated to
                  leveraging the most advanced industry technology to seamlessly
                  manage and track all permits for your project. We are
                  committed to <b>assisting owners and tenants</b> in swiftly
                  securing <b>aggressive permit approvals</b>, ensuring a{" "}
                  <b>smooth and timely construction process to completion.</b>{" "}
                </h5>
                <a href="/contact">- Get in Touch</a>
              </div>
            </div>
          </div>
        </section>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            loading="lazy"
            src="/img/pagebreak.png"
            className="page-break"
            alt="image"
          />
        </div>

        <div className="responsive-two-column-grid">
          <div className="contact-left">
            <div className="contact-img">
              <img
                loading="lazy"
                className="parallax"
                src="/img/contact1.png"
                style={{ width: "100%" }}
                alt="image"
              />
            </div>
          </div>
          <div>
            <div className="contact-right">
              <h1>
                For more information, business opportunities or any questions;
                reach out below
              </h1>
              <form action="https://formsubmit.co/admin@bvs.nyc" method="POST">
                <input type="hidden" name="_next" value="https://bvs.nyc/" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  style={{ width: "100%" }}
                  required
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                    style={{ width: "45%" }}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    style={{ width: "45%" }}
                    required
                  />
                </div>
                <textarea
                  placeholder="Message"
                  name="Message"
                  style={{ width: "100%" }}
                  required
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

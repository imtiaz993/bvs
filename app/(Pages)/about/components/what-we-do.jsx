"use client";

import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

const WhatWeDo = () => {
  return (
    <div className="responsive-two-column-grid" style={{ marginBottom: "3%" }}>
      <div style={{ zIndex: "10" }}>
        <div className="photo-container2 right-side">
          <SimpleParallax
            scale={1.4}
            delay={0.6}
            transition="cubic-bezier(0,0,0,1)"
            customWrapper=".steps-pane"
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              src="/img/about2.png"
              style={{ width: "100%", height: "100%" }}
              alt="image"
            />
          </SimpleParallax>
        </div>
      </div>

      <div className="right-container1">
        <h2 className="text-center">- What We Do -</h2>
        <h1 className="hover-text about-hover" style={{ textAlign: "center" }}>
          Building Violation Solutions
        </h1>
        <h4
          className="right-text"
          style={{ lineHeight: "1.75", textAlign: "center" }}
        >
          While our seamless incorporation of the various aspects of property
          violations and navigation through them is what distinguishes our
          company as one of the leaders in violation services, our expertise and
          diligence is what our team is best known for. Our in-depth knowledge
          of the procedures, policies, and municipal codes of each of the
          building departments in the five boroughs allows us to assist clients
          with various properties spread around the New York area.{" "}
        </h4>
      </div>
    </div>
  );
};

export default WhatWeDo;

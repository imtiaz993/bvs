import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "85%",
        borderTop: "#BA2025 solid 2px",
        margin: "auto",
      }}
    >
      <footer
        style={{
          position: "relative",
          borderBottom: "#BA2025 solid 2px",
          marginBottom: "3vh",
          display: "flex",
        }}
      >
        <div className="footer-left">
          <img
            loading="lazy"
            src="/img/BVS_Logo.png"
            id="footer-img"
            alt="image"
            style={{ objectFit: "cover" }}
          />
          <p
            style={{
              opacity: ".8",
              marginBottom: "3vh",
              lineHeight: "2.5",
              textAlign: "left",
            }}
          >
            BVS is an all-inclusive filing representative firm that specializes
            in New York City Department of Building Code, Zoning and
            Regulations. We provide fast, cost effective strategic solutions to
            ensure property managers, owner&apos;s and representatives are
            compliant
          </p>
        </div>
        <div className="footer-middle">
          <h2 style={{ textAlign: "left" }}>Contact Us</h2>
          <a
            id="location-mail"
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            href="mailto: admin@bvs.nyc"
          >
            <span
              className="fas fa-envelope text-white"
              style={{
                padding: "2%",
                backgroundColor: "#ad172c",
                borderRadius: "500px",
                margin: "auto 2%",
              }}
            ></span>
            admin@bvs.nyc
          </a>
          <a
            id="location-map"
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            href="https://maps.app.goo.gl/3S2kgXWk48vREADu9"
            target="_blank"
          >
            <span
              className="fas fa-location-arrow text-white"
              style={{
                padding: "2%",
                backgroundColor: "#BA2025",
                borderRadius: "500px",
                margin: "auto 2%",
              }}
            ></span>
            130 W 37th Street New York, NY 10018
          </a>
          <a
            id="location-phone"
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            href="tel:212-547-9000"
          >
            <span
              className="fas fa-phone text-white"
              style={{
                padding: "2%",
                backgroundColor: "#ad172c",
                borderRadius: "500px",
                margin: "auto 2%",
              }}
            ></span>
            212-547-9000
          </a>
        </div>
        <div className="footer-right">
          <h2 style={{ textAlign: "left" }}>Pages</h2>
          <Link className="footer-tab" href="/">
            Home
          </Link>
          <Link className="footer-tab" href="/about">
            About
          </Link>
          <Link className="footer-tab" href="/services">
            Services
          </Link>
          <Link className="footer-tab" href="/contact">
            Contact
          </Link>
          <Link className="footer-tab" href="/blog">
            Blog
          </Link>
        </div>
      </footer>
      <Link className="pptos" href="/privacy-policy">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;

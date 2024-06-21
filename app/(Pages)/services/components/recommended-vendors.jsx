"use client";

const RecommendedVendors = () => {
  return (
    <div>
      {" "}
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
        BVS works hand in hand with our affiliated sister companies to ensure a
        smooth process from beginning to end.
      </h4>
      <div className="ser-container">
        <div
          onClick={() => {
            window.open("https://azark.com");
          }}
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
          onClick={() => {
            window.open("https://aapc.nyc");
          }}
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
          onClick={() => {
            window.open("https://arkco.nyc");
          }}
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
          onClick={() => {
            window.open("https://violerts.com");
          }}
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
          onClick={() => {
            window.open("https://vps.nyc");
          }}
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
  );
};

export default RecommendedVendors;

const Locations = () => {
  return (
    <div className="locational">
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
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
          <h3>admin@bvs.nyc</h3>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
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
          <h3>130 West 37th Street New York, NY 10018</h3>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
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
          <h3>(212) 547-9000</h3>
        </a>
      </div>
    </div>
  );
};

export default Locations;

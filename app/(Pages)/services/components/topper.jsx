const Topper = () => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <img
        loading="lazy"
        src="/img/pageTopper.png"
        className="top-bg"
        alt="image"
      />
      <h1 className="header-text">Services</h1>
    </div>
  );
};

export default Topper;

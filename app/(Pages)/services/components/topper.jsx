import Image from "next/image";

const Topper = () => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
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

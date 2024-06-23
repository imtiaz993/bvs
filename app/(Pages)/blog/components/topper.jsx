import Image from "next/image";

const Topper = () => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src="/img/pageTopper.png"
        className="top-bg"
        alt="image"
      />
      <h1 className="header-text">Blog Posts</h1>
    </div>
  );
};

export default Topper;

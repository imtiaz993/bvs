import Image from "next/image";

const Topper = ({ post }) => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={post.photo}
        className="top-bg"
        alt="Post image"
      />
      <h1 className="header-text">{post.title}</h1>
    </div>
  );
};

export default Topper;

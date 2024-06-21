const Topper = ({ post }) => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <img src={post.photo} className="top-bg" alt="Post image" />
      <h1 className="header-text">{post.title}</h1>
    </div>
  );
};

export default Topper;

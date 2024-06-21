"use client";
import { useRouter } from "next/navigation";

const Posts = ({ filteredPosts }) => {
  const router = useRouter();

  const rfc3986EncodeURIComponent = (str) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);
  };

  return (
    <div id="blog-posts" style={{ marginTop: "5%" }}>
      {filteredPosts &&
        filteredPosts.map((post) => (
          <div key={post.identifier} className="responsive-two-column-grid">
            <div
              className="left-container1"
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(
                  `/blog/${rfc3986EncodeURIComponent(post.identifier)}`
                )
              }
            >
              <h1
                className="hover-text about-hover"
                style={{ textAlign: "center" }}
              >
                {post.title}
              </h1>
              <h3 style={{ textAlign: "center" }}>{post.author}</h3>
              <h3 style={{ textAlign: "center" }}>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <h4 style={{ lineHeight: "1.75", textAlign: "center" }}>
                {post.clincher}
              </h4>
            </div>
            <div>
              <div
                className="photo-container"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    `/blog/${rfc3986EncodeURIComponent(post.identifier)}`
                  )
                }
              >
                <img
                  className="parallax"
                  src={post.photo}
                  style={{
                    width: "100%",
                    height: "50vh",
                    objectFit: "cover",
                  }}
                  alt="Blog Post"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;

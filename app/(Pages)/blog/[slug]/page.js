import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import "../../../../public/css/style.css";
import "../../../../public/css/slider.css";
import "../../../../public/css/about.css";
import PageBreak from "app/components/page-break";
import Topper from "./components/topper";
import PublishInfo from "./components/publish-info";

const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts/title/";

export async function generateMetadata({ params }) {
  const ID = params["slug"];
  const res = await fetch(BLOG_URL + ID);
  const json = await res.json();
  const post = json;

  return {
    title: "BVS | " + post?.title || "",
    description:
      "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies.",
    keywords:
      post?.keywords ||
      "BVS, Violations, Expediters, Design, Solutions, Resolution",
  };
}

const BlogSingle = async ({ params }) => {
  const ID = params["slug"];
  let post;

  try {
    const res = await fetch(BLOG_URL + ID);
    const json = await res.json();
    post = json;
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  return (
    <>
      <Navbar />
      <div>
        <div id="blog-posts"></div>
        <div>
          <Topper post={post} />
          <div style={{ padding: "5% 15% 0" }}>
            <PublishInfo post={post} />
            <PageBreak />
            <div
              id="the-text"
              dangerouslySetInnerHTML={{ __html: post.desc }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;

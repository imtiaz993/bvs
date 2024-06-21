import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import Posts from "./components/posts";
import PageBreak from "app/components/page-break";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "BVS | Blog Posts",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Blog = async () => {
  const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts";
  let filteredPosts;

  try {
    const res = await fetch(BLOG_URL);
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    filteredPosts = data
      .reverse()
      .filter((post) => post.categories.includes("bvs") && post.published);
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  return (
    <>
      <Navbar />
      <Topper />
      <Posts filteredPosts={filteredPosts} />
      <PageBreak />
      <Footer />
    </>
  );
};

export default Blog;

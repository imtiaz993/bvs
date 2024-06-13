import React from "react";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "BVS | Blog Posts",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Blog = () => {
  return (
    <div>
      <div style="width: 100%; height: 75vh;">
        <img src="/img/pageTopper.png" class="top-bg" alt="image" />
        <h1 class="header-text">Blog Posts</h1>
      </div>

      <div id="blog-posts" style="margin-top: 5%;"></div>

      <div style="display: flex; justify-content: center;">
        <img src="/img/pagebreak.png" class="page-break" alt="image" />
      </div>

      {/* <script>
  const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts';

  async function customFetch() {
    try {
      const res = await fetch(BLOG_URL);
      if (!res.ok) {
        throw new Error(`${res.status} : ${res.statusText}`)
      }

      const json = await res.json();
      return json;
    } catch (err) {
      console.error(err.message)
    }
  }

  const createListItem = (item) => {

    function rfc3986EncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, escape);
    }

    if (item.categories.includes("bvs") && item.published === true) {
      const formattedCreated = new Date(item.createdAt).toLocaleDateString('en-US', {
        month: "long", 
        day: "numeric",
        year: "numeric",
      })

      return ` <div class="responsive-two-column-grid">
  <div class="left-container1" style="cursor: pointer" onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');">
    <h1 class="hover-text about-hover" style="text-align: center">${item.title}</h1>
        <h3 style="text-align: center">${item.author}</h3>
        <h3 style="text-align: center">${formattedCreated}</h3>

    <h4 style="line-height: 1.75; text-align: center">${item.clincher}</h4></div>
  <div>
    <div class="photo-container" style="cursor: pointer" onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');">
      <img class="parallax"
           src="${item.photo}"
           style="width: 100%; height: 50vh; object-fit: cover" alt="image"/>
    </div>
  </div>
</div>
`
    }
  }

  const getPosts = async () => {
    const data = await customFetch();
    const posts = data.reverse().map(posts => posts);
    const listItems = posts.map(t => createListItem(t)).join("")

    const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

    const element = document.getElementById("blog-posts");

    return insertBefore(element, `${listItems}`)
  }

  getPosts()



</script> */}
    </div>
  );
};

export default Blog;

import React from "react";
import "../../../../public/css/style.css";
import "../../../../public/css/slider.css";
import "../../../../public/css/about.css";

export const metadata = {
  title: "BVS | About",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const BlogSingle = () => {
  return (
    <div>
      <div id="blog-posts"></div>
      {/* <script>
        function GetURLParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return sParameterName[1];
                }
            }
        }

        const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts/title/';
        const ID = GetURLParameter('id').toString();

        async function customFetch() {
            try {
                const res = await fetch(BLOG_URL + ID);
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
            if (item.categories.includes("bvs")) {
                document.title = `BVS | ${item.title}`;
                document.querySelector('meta[name="keywords"]').setAttribute("content", item.keywords);
                const formattedCreated = new Date(item.createdAt).toLocaleDateString('en-US', {
                    month: "long",  // Use "short" for abbreviated month
                    day: "numeric",
                    year: "numeric",
                })
                const formattedUpdated =  new Date(item.updatedAt).toLocaleDateString('en-US', {
                    month: "long",  // Use "short" for abbreviated month
                    day: "numeric",
                    year: "numeric",
                })

                if (formattedCreated !== formattedUpdated) {

                    return `    <div style={{width: "100%", height: "75vh"}}>
                                    <img src="${item.photo}"
                                         className="top-bg" alt="image"/>
                                    <h1 className="header-text">${item.title}</h1>
                                </div>
                                <div style={{padding: "5% 15% 0"}}>
                                    <h5 style={{padding: "2% 0 0", textAlign: "center"}}>${item.author} | Created: ${formattedCreated} | Updated: ${formattedUpdated} </h5>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img src="/img/pagebreak.png" className="page-break" alt="image">
                                    </div>

                                    <div id="the-text">${item.desc}</div>

                                </div>`
                }
                return `    <div style={{width: "100%", height: "75vh"}}>
                                    <img src="${item.photo}"
                                         className="top-bg" alt="image"/>
                                    <h1 className="header-text">${item.title}</h1>
                                </div>
                                <div style={{padding: "5% 15% 0"}}>
                                    <h5 style={{padding: "2% 0 0", textAlign: "center">${item.author} | Created: ${formattedCreated}</h5>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img src="/img/pagebreak.png" className="page-break" alt="image">
                                    </div>

                                    <div id="the-text">${item.desc}</div>

                                </div>`

            }
        }

        const getPosts = async () => {
            const data = await customFetch();
            const post = createListItem(data)


            const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

            const element = document.getElementById("blog-posts");

            return insertBefore(element, `${post}`)
        }

        getPosts()

    </script> */}
    </div>
  );
};

export default BlogSingle;

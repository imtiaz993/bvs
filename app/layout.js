import Script from "next/script";
import Calendly from "./components/calendly";

export const metadata = {
  title: "BVS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#AA182C" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="author" href="Azark Inc" />
        <link rel="canonical" href="https://bvs.nyc/" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oov2wcw.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oov2wcw.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@latest/dist/leaflet.css"
        />
      </head>
      <body id="root">
        {children}
        <Calendly />
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js" />
        <Script src="/js/script.js" />
        <Script src="/js/service-script.js" />
        <Script src="/js/simpleParallax.js" />
      </body>
    </html>
  );
}

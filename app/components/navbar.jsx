"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    function test() {
      const tabsNewAnim = document.querySelector("#navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim.querySelector(".active");

      if (!activeItemNewAnim) return;

      const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

      document.querySelector(".hori-selector").style.cssText = `
        top: ${itemPosNewAnimTop}px;
        left: ${itemPosNewAnimLeft}px;
        height: ${activeWidthNewAnimHeight}px;
        width: ${activeWidthNewAnimWidth}px;
      `;

      tabsNewAnim.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
          tabsNewAnim
            .querySelectorAll("li")
            .forEach((li) => li.classList.remove("active"));
          e.target.classList.add("active");

          const activeWidthNewAnimHeight = e.target.offsetHeight;
          const activeWidthNewAnimWidth = e.target.offsetWidth;
          const itemPosNewAnimTop = e.target.offsetTop;
          const itemPosNewAnimLeft = e.target.offsetLeft;

          document.querySelector(".hori-selector").style.cssText = `
            top: ${itemPosNewAnimTop}px;
            left: ${itemPosNewAnimLeft}px;
            height: ${activeWidthNewAnimHeight}px;
            width: ${activeWidthNewAnimWidth}px;
          `;
        }
      });
    }

    function onResize() {
      setTimeout(test, 500);
    }

    function onNavbarToggle() {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.style.display === "block") {
        navbarCollapse.style.display = "none";
      } else {
        navbarCollapse.style.display = "block";
      }
      setTimeout(test, 300);
    }

    // Initial call
    setTimeout(test);

    // Attach event listeners
    window.addEventListener("resize", onResize);
    document
      .querySelector(".navbar-toggler")
      .addEventListener("click", onNavbarToggle);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      document
        .querySelector(".navbar-toggler")
        .removeEventListener("click", onNavbarToggle);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-custom navbar-mainbg"
      style={{ position: "fixed", width: "100%", zIndex: "100" }}
    >
      <Link className="navbar-brand navbar-logo" href="/">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          id="logoimg"
          src="/img/BVS_Logo.png"
          alt="BVS"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ paddingRight: "0", marginRight: "2%", paddingLeft: "10px" }}
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              pathname.includes("/about") ? "active" : ""
            }`}
          >
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li
            className={`nav-item ${
              pathname.includes("/services") ? "active" : ""
            }`}
          >
            <Link className="nav-link" href="/services">
              Services
            </Link>
          </li>
          <li
            className={`nav-item ${
              pathname.includes("/contact") ? "active" : ""
            }`}
          >
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

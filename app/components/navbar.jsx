import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
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

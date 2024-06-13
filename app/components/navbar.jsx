const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-custom navbar-mainbg"
      style="position: fixed; width: 100%; z-index: 100"
    >
      <a class="navbar-brand navbar-logo" href="/">
        <img loading="lazy" id="logoimg" src="/img/BVS_Logo.png" alt="BVS" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="padding-right: 0; margin-right: 2%; padding-left: 10px"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <div class="hori-selector">
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

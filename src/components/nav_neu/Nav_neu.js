import { useRef } from "react";

//Icons
import CloseIcon from "../../img/closeIcon";
import Burgermenu from "../../img/burgermenuIcon";

import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("ressponsiv_nav");
  };

  return (
    <header>
      <div className="logo-wrapper">
        <NavLink to="/">
          <img src="../../img/supercode_logo.svg" alt="" />
        </NavLink>
      </div>

      <nav ref={navRef}>
        <NavHashLink to="#allCourses">Kurse</NavHashLink>
        <NavHashLink to="#wiesoWir">Wieso Wir</NavHashLink>
        <NavHashLink to="#alumniSection">Alumni</NavHashLink>
        <NavHashLink to="#ourStory">Unsere Story</NavHashLink>
        <NavHashLink to="#newsletter">Newsletter</NavHashLink>
        <NavHashLink className="last-link" to="#faq">FAQ</NavHashLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button className="nav-btn open-btn" onClick={showNavbar}>
        <Burgermenu />
      </button>
    </header>
  );
};

export default Navbar;

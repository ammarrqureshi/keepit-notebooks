import React from "react";
import NavItem from "./NavItem";
import brandLogo from "../brand-logo.png";
import "../css/Navbar.css";
import AboutIcon from "../assets/about-icon.png";
import UserIcon from "../assets/user-ion.png";
import NotebookIcon from "../assets/all-notebooks-icon.png";
import ExploreIcon from "../assets/explore-icon.png";

const NavBar = () => {
  return (
    <div className="hidden-nav-block">
      <div className="navbar">
        <div className="brand-logo">
          <a href="#">
            <img src={brandLogo} />
          </a>
          {/* <h1> keep.it</h1> */}
        </div>
        <div className="navitem-container">
          <NavItem id="1" callout="Notebooks" src={NotebookIcon} />
          <NavItem id="2" callout="Explore" src={ExploreIcon} />
          <NavItem id="3" callout="About" src={AboutIcon} />
          <NavItem id="4" callout="Account" src={UserIcon} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

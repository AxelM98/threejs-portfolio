import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbarSection">
      <div className="navbarContainer">
        <div className="navbarLinks">
          <h1 className="navbarLogo">Logo.</h1>
          <ul className="navbarUl">
            <li className="navbarLi">Home</li>
            <li className="navbarLi">Portfolio</li>
            <li className="navbarLi">About</li>
            <li className="navbarLi">Contact</li>
          </ul>
        </div>
        <div className="navbarIcons">
          <SearchIcon className="navbarSearchIcon" />
          <button className="navbarButton">Hire Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

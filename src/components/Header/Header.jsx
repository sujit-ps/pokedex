import React from "react";
import labels from "../../labels/label.json";
import "./Header.css";

function Nav() {
  return (
    <header className="header font-roboto">
      <h1 className="header-name">{labels?.brandName}</h1>
      <span className="header-spacing"></span>
      <h2 className="header-sideHeading">{labels?.header?.brandTag}</h2>
    </header>
  );
}

export default Nav;

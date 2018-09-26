import React from "react";
import  "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-styles">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/first">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>
      </div>
  );
}


export default Header;
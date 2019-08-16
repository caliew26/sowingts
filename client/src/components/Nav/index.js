import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        Sowing The Seed
      </a>
      <span>
      <a href="/">Welcome |</a>
      <a href="../about">About Us |</a>
      <a href="../Books"> Details</a>
      </span>
    </nav>
  );
}

export default Nav;

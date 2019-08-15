import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <a className="navbar-brand" href="/">
        Sowing The Seed
      </a>
      <a href="/">Welcome |</a>
      <a href="../about">About Us |</a><br></br>
      <a href="../Books"> Details</a>
    </nav>
  );
}

export default Nav;

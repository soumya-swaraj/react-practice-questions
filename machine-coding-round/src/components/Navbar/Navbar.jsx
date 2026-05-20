import React from "react";
import { NavLink } from "react-router";

import { navbarItems } from "./Navbar.constants";

function Navbar() {
  return (
    <div>
      <NavLink to={navbarItems.otp.path}>{navbarItems.otp.label}</NavLink>
    </div>
  );
}

export default Navbar;

import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
import { navbarItems } from "./Navbar.constants";

function Navbar() {
  return (
    <div className={styles.navLinksBox}>
      <NavLink to={navbarItems.otp.path}>{navbarItems.otp.label}</NavLink>
      <NavLink to={navbarItems.countDownTimer.path}>
        {navbarItems.countDownTimer.label}
      </NavLink>
    </div>
  );
}

export default Navbar;

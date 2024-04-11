import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        // activeClassName={styles.activeLink}
      >
        <span className={styles.navSpan}>Register</span>
      </NavLink>
      <NavLink
        to="/login"
        className={`${styles.link} ${styles.linkRight}`}
        // activeClassName={styles.activeLink}
      >
        <span className={styles.navSpan}>Log In</span>
      </NavLink>
    </div>
  );
};

export default AuthNav;

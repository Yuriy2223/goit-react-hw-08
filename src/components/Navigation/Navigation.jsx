import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { DocumentTitle } from "../../hooks/index";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <DocumentTitle>Navigation</DocumentTitle>
      <NavLink
        className={`${styles.link} ${styles.linkRight}`}
        // activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={styles.link}
          // activeClassName={styles.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

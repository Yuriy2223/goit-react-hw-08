import styles from "./HeaderApp.module.css";
import { NavLink } from "react-router-dom";

const HeaderApp = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.button}>Home</NavLink>
      <NavLink to="/contacts" className={styles.button}>Contacts</NavLink>
      <NavLink to="/button3" className={styles.button}>Button 3</NavLink>
      <NavLink to="/button4" className={styles.button}>Button 4</NavLink>
      <NavLink to="/button5" className={styles.button}>Button 5</NavLink>
    </div>
  );
};

export default HeaderApp;

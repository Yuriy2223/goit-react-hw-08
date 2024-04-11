import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import { DocumentTitle } from "../../hooks/index";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    
    <div className={styles.wrapper}>
       <DocumentTitle>UserMenu</DocumentTitle>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

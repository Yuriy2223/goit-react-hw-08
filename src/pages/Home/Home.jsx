import { DocumentTitle } from "../../hooks/index";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Welcome to your own Phonebook</h1>
      </div>
    </>
  );
};

export default Home;

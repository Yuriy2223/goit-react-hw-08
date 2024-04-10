import { DocumentTitle } from "../../hooks/index";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Task manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}

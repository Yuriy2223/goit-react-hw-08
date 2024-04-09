// import { Watch } from "react-loader-spinner";
// import { Hourglass } from "react-loader-spinner";
import { DNA } from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loading}>Loading...</div>
      <div className={styles.loadingLoader}>
        <DNA
          visible={true}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};
export default Loader;
{
  /* <div className="">
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          // color="#4fa94d"
          color="blue"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <div className="">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div> */
}

/**використай іншим разом */

// import Loader from "./components/Loader/Loader"
// import { useState, useEffect } from "react";

// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   setTimeout(() => {
//     setLoading(false);
//   }, 10000);
// }, []);

// if (loading) {
//   return (
//     <div className="wrapper">
//       <Header />
//       <Loader />
//     </div>
//   );
// }

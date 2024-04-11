import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { DocumentTitle } from "../../hooks/index";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <DocumentTitle>LoginForm</DocumentTitle>
      <label className={styles.inputLabel}>
        Email
        <input className={styles.formImput} type="email" name="email" />
      </label>
      <label className={styles.inputLabel}>
        Password
        <input className={styles.formImput} type="password" name="password" />
      </label>
      <button className={styles.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;

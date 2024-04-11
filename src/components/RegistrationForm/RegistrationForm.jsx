import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.inputLabel}>
        Username
        <input className={styles.formImput} type="text" name="name" />
      </label>
      <label className={styles.inputLabel}>
        Email
        <input className={styles.formImput} type="email" name="email" />
      </label>
      <label className={styles.inputLabel}>
        Password
        <input className={styles.formImput} type="password" name="password" />
      </label>
      <button className={styles.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

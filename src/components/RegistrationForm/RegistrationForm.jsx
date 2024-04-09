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
      <label className={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

/**================================ */
// import { Formik, Field, Form } from "formik";
// import { useDispatch } from "react-redux";
// import { register } from "../redux/auth/authSlice";

// export default function RegistrationForm() {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ name: "", email: "", password: "" }}
//       onSubmit={(values) => dispatch(register(values))}
//     >
//       <Form>
//         <label>
//           Name
//           <Field type="text" name="name" />
//         </label>
//         <label>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// }
/**================================ */
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
// import css from './RegisterForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

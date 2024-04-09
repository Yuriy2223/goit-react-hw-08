import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
/**=============== */
// import { Formik, Field, Form } from "formik";
// import { useDispatch } from "react-redux";
// import { logIn } from "../redux/auth/authSlice";

// export default function LoginForm() {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       onSubmit={(values) => dispatch(logIn(values))}
//     >
//       <Form>
//         <label>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">Log in</button>
//       </Form>
//     </Formik>
//   );
// }
/**=============== */

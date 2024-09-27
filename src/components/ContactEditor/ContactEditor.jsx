import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactEditor.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Minimum 3 digits")
    .max(12, "Maximum 10 digits")
    .required("Required field"),
});

const ContactEditor = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className={styles.inputLabel}>
        Name
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.errorMessage}>{formik.errors.name}</div>
        ) : null}
      </label>

      <label htmlFor="number" className={styles.inputLabel}>
        Number
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.errorMessage}>{formik.errors.number}</div>
        ) : null}
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactEditor;

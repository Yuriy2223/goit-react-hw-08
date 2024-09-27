import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Minimum 3 digits")
    .max(50, "Maximum 50 digits")
    .required("Required field"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.name && values.number) {
        dispatch(addContact(values));
        resetForm();
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className={styles.inputLabel}>
        Name
        <input
          className={styles.formImput}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Rosie Simpson"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.errorMessage}>{formik.errors.name}</div>
        ) : null}
      </label>

      <label htmlFor="number" className={styles.inputLabel}>
        Number
        <input
          className={styles.formImput}
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
          placeholder="38(066)-555-55-55"
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.errorMessage}>{formik.errors.number}</div>
        ) : null}
      </label>

      <button type="submit" className={styles.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

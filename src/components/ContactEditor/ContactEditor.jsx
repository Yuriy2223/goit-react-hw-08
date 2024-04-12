import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactEditor.module.css";

const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== "") {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert("Task cannot be empty. Enter some text!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="text" className={styles.input} />
      <button type="submit" className={styles.button}>
        Add task
      </button>
    </form>
  );
};

export default ContactEditor;

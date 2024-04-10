// import { useSelector } from "react-redux";
// import Contact from "../Contact/Contact";
// import { selectAllContacts } from "../../redux/contacts/selectors";

// import styles from "./ContactList.module.css";

// const ContactList = () => {
//   const contacts = useSelector(selectAllContacts);

//   return (
//     <>
//       <h2 className={styles.title}>List of contacts</h2>
//       <ul className={styles.list}>
//         {contacts?.map((contact) => {
//           return <Contact key={contact.id} {...contact} />;
//         })}
//       </ul>
//     </>
//   );
// };

// export default ContactList;
/**===================== */
import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectAllContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};

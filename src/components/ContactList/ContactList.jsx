import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slise";
import { DocumentTitle } from "../../hooks/index";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <DocumentTitle>UserMenu</DocumentTitle>
      <h2 className={styles.title}>List of contacts</h2>
      <ul className={styles.list}>
        {contacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;

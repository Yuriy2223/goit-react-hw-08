import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slise";
import { DocumentTitle } from "../../hooks/index";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      <DocumentTitle>ContactList</DocumentTitle>
      <h2 className={styles.title}>List of contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;

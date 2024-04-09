import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectAllContacts } from "../../redux/contacts/selectors";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <>
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
/**===================== */

// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { selectAllTasks } from '../../redux/tasks/selectors';
// import css from './TaskList.module.css';

// export const TaskList = () => {
//   const tasks = useSelector(selectAllTasks);

//   return (
//     <ul className={css.list}>
//       {tasks.map(({ id, text }) => (
//         <li key={id}>
//           <Task id={id} text={text} />
//         </li>
//       ))}
//     </ul>
//   );
// };

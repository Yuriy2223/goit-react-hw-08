// import { useDispatch } from "react-redux";
// // import { deleteContact } from "../../redux/contactsOps";
// import { deleteContact } from "../../redux/contacts/operations";

// import { FaPhoneAlt } from "react-icons/fa";
// import { RiContactsFill } from "react-icons/ri";

// import styles from "./Contact.module.css";

// const Contact = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   return (
//     <li className={styles.item} key={id}>
//       <div className={styles.itemConteiner}>
//         <div>
//           <RiContactsFill />
//           {name}
//         </div>
//         <div>
//           <FaPhoneAlt />
//           {number}
//         </div>
//       </div>
//       <button
//         type="button"
//         className={styles.deleteBtn}
//         onClick={() => dispatch(deleteContact(id))}
//       >
//         Delete
//       </button>
//     </li>
//   );
// };

// export default Contact;

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

 const Contact = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
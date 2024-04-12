import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className={styles.item} key={id}>
      <div className={styles.itemConteiner}>
        <div>
          <RiContactsFill />
          {name}
        </div>
        <div>
          <FaPhoneAlt />
          {number}
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

/*====================початок================================*/

// import { useDispatch } from "react-redux";
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

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// // import { useEffect, lazy } from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';

// import { fetchContacts } from "../../redux/contacts/operations";
// import {
//   ErrorMessage,
//   ContactList,
//   SearchBox,
//   ContactForm,
//   Loader,
// } from "../../hooks/index";

// const Contacts = () => {
//   const dispatch = useDispatch();

//   const loading = useSelector((state) => state.contacts.loading);
//   const error = useSelector((state) => state.contacts.error);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="wrapper">
//       <ToastContainer />
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           {/* <Header /> */}
//           <ContactForm />
//           <SearchBox />
//           <ContactList />
//           <ErrorMessage message={error} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Contacts;
/**================== */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList, DocumentTitle, ContactEditor } from "../../hooks/index";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}

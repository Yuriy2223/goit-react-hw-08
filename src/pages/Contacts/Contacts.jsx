import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { useEffect, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import {
  ErrorMessage,
  ContactList,
  SearchBox,
  ContactForm,
  Loader,
} from "../../hooks/index";

import { ToastContainer } from "react-toastify";

const Contacts = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Header /> */}
          <ContactForm />
          <SearchBox />
          <ContactList />
          <ErrorMessage message={error} />
        </>
      )}
    </div>
  );
};

export default Contacts;

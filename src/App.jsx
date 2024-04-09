import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import Layout from "./components/Layout/Layout";
// import PrivateRoute from "./components/routes/PrivateRoute";
// import RestrictedRoute from "./components/routes/RestrictedRoute";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import {
  Layout,
  PrivateRoute,
  RestrictedRoute,
  ErrorMessage,
  Loader,
} from "./hooks/index";

import { refreshUser } from "./redux/auth/operations";
import useAuth from "./hooks/useAuth";

const Home = lazy(() => import("./pages/Home/Home"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Login = lazy(() => import("./pages/Login/Login"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="wrapperApp">
      <Loader />
      <ErrorMessage />
      <Toaster />
      {isRefreshing ? (
        <h2>Refreshing user...</h2>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;

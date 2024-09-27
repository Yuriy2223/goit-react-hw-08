import { toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return null;
};

export default ErrorMessage;




import { useLinkClickHandler } from "react-router-dom";
import auth from "../services/authService";

const LogOut = () => {
  auth.logoutUser();
  window.location = "/";
  return null;
};

export default LogOut;

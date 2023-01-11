import { useNavigate } from "react-router-dom";
import Joi from "joi";
import Form from "./form";
import { registerUser } from "./../../services/registerService";
import auth from "./../../services/authService";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();

  const schemaTemplates = {
    username: Joi.string().max(40).required().label("Username"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(40)
      .required()
      .label("Email"),
    password: Joi.string().max(40).required().label("Password"),
  };

  const handleSave = (data) => {
    try {
      const registerResult = registerUser(
        data.email,
        data.username,
        data.password
      );
      const jwt = auth.loginUser(data.username, data.password);
    } catch (error) {
      toast.warning(error);
    }
  };

  return (
    <Form
      formHeader="Register"
      schemaTemplates={schemaTemplates}
      handleSave={handleSave}
      buttonLabel="Register"
    ></Form>
  );
};

export default RegisterForm;

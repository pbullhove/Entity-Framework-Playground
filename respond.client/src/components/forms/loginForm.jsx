import { useNavigate } from "react-router-dom";
import Joi from "joi";
import Form from "./form";
import auth from "./../../services/authService";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const schemaTemplates = {
    username: Joi.string().max(40).required().label("Username"),
    password: Joi.string().max(40).required().label("Password"),
  };

  const handleSave = async (data) => {
    try {
      const jwt = auth.loginUser(data.username, data.password);
    } catch (error) {
      toast.warning(error);
    }
  };

  return (
    <Form
      formHeader="Login"
      schemaTemplates={schemaTemplates}
      handleSave={handleSave}
      buttonLabel="Login"
    ></Form>
  );
};

export default LoginForm;

import { useState, useEffect } from "react";
import Input from "../common/input";
import SubmitFormButton from "../common/submitButton";

const Form = (props) => {
  const {
    formHeader,
    schemaTemplates,
    handleSave,
    buttonLabel,
    initialValues,
  } = props;

  const inputFields = Object.keys(schemaTemplates);
  const stateObject = {};
  inputFields.forEach((field) => (stateObject[field] = ""));

  const [dataValues, setDataValues] = useState({
    ...stateObject,
  });
  const [errors, setErrors] = useState({});

  const validateProperty = (schema, value) => {
    const { error: err } = schema.validate(value);
    return err ? err.details[0].message : null;
  };

  useEffect(() => {
    initialValues &&
      Object.keys(initialValues) !== 0 &&
      setDataValues(initialValues);
  }, [initialValues]);

  const handleChange = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const { value: inputValue, name } = currentTarget;

    const err = { ...errors };
    const errorMessage = validateProperty(schemaTemplates[name], inputValue);
    if (errorMessage) err[name] = errorMessage;
    else delete err[name];
    setErrors(err);

    let dv = { ...dataValues };
    dv[name] = inputValue;
    setDataValues(dv);
  };

  const validate = () => {
    const err = {};
    Object.keys(dataValues).forEach((key) => {
      const propertyError = validateProperty(
        schemaTemplates[key],
        dataValues[key]
      );
      if (propertyError) {
        err[key] = propertyError;
      }
    });
    return Object.keys(err).length === 0 ? null : err;
  };

  String.prototype.toPascalCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const getFieldType = (textString) => {
    const text = textString.toLowerCase();
    if (text.includes("password")) return "password";
    if (text.includes("email")) return "email";
    return "text";
  };

  return (
    <div className="container default-form mx-auto text-center">
      <h1>{formHeader}</h1>
      <div>
        {inputFields.map((field) => (
          <Input
            key={field}
            name={field}
            label={field.toPascalCase()}
            value={dataValues[field]}
            error={errors[field]}
            onChange={handleChange}
            type={getFieldType(field)}
          />
        ))}
      </div>
      <SubmitFormButton
        label={buttonLabel}
        validationFunction={validate}
        onClick={() => {
          handleSave(dataValues);
        }}
      ></SubmitFormButton>
    </div>
  );
};

export default Form;

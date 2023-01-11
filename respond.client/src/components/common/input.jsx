import React from "react";

const Input = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className="form-group my-3">
      <input
        value={value}
        onChange={onChange}
        placeholder={label}
        name={name}
        type={type}
        className="form-control"
        id={name}
      />
      <small id="emailHelp" className="form-text text-muted"></small>
      {error && <div className="alert alert-warning">{error}</div>}
    </div>
  );
};

export default Input;

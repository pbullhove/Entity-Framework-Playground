const SubmitFormButton = ({ label, validationFunction, onClick }) => {
  return (
    <div className="d-grid gap-2 mt-4">
      <button
        type="submit"
        disabled={validationFunction()}
        className="btn btn-primary"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitFormButton;

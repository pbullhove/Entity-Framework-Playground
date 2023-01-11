import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi";
import Form from "./form";
import { getMovie } from "../../services/fakeMovieService";
import { saveMovie } from "./../../services/fakeMovieService";

const MovieForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const schemaTemplates = {
    title: Joi.string().max(40).required().label("Title"),
    genre: Joi.string().max(40).required().label("Genre"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
  };
  const intialObject = {};
  Object.keys(schemaTemplates).forEach((field) => (intialObject[field] = ""));
  const [initialValues, setInitialValues] = useState(intialObject);

  const createMovieFromFormData = (data) => {
    return {
      title: data.title,
      genre: data.genre,
      numberInStock: data.numberInStock,
      dailyRentalRate: data.dailyRentalRate,
    };
  };

  const handleSave = (data) => {
    const movie = createMovieFromFormData(data);
    saveMovie(movie);
    navigate("/movies");
  };

  useEffect(() => {
    if (params.id === "new") {
      return;
    }
    const movie = getMovie(params.id);
    if (!movie) {
      navigate("/not-found");
      return;
    }
    setInitialValues({
      title: movie.title,
      genre: movie.genre,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    });
  }, []);

  return (
    <Form
      formHeader={`${
        params.id === "new" ? "Create Movie" : `Edit '${initialValues.title}'`
      } `}
      schemaTemplates={schemaTemplates}
      initialValues={initialValues}
      useEffect={useEffect}
      handleSave={handleSave}
      buttonLabel="Save"
    ></Form>
  );
};

export default MovieForm;

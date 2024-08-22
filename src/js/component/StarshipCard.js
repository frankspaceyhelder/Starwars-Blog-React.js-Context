import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const StarshipCard = ({ starships }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    navigate(`/starships/${starships.uid}`);
  };

  const addToFavorites = () => {
    actions.addFavorite(starships, "starships");
  };

  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
        className="card-img-top"
        alt={`${starships.name} Image`}
        onError={(e) =>
          (e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg")
        }
      />
      <div className="card-body">
        <h5 className="card-title">{starships.name}</h5>
        <p className="card-text">
          Model: {starships.model} <br />
          Length: {starships.length} <br />
          Crew: {starships.crew}
        </p>
        <div className="button-container">
          <button className="btn btn-custom" onClick={goToDetailsPage}>
            Learn more
          </button>
          <button className="btn btn-custom2" onClick={addToFavorites}>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

StarshipCard.propTypes = {
  starships: PropTypes.object.isRequired,
};

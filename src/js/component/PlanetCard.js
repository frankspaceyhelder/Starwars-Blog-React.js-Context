import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const PlanetCard = ({ planets }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    navigate(`/planets/${planets.uid}`);
  };

  const addToFavorites = () => {
    actions.addFavorite(planets, "planets");
  };

  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${planets.uid}.jpg`}
        className="card-img-top"
        alt={`${planets.name} Image`}
        onError={(e) =>
          (e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg")
        }
      />
      <div className="card-body">
        <h5 className="card-title">{planets.name}</h5>
        <p className="card-text">
          Climate: {planets.climate} <br />
          Population: {planets.population} <br />
          Terrain: {planets.terrain}
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

PlanetCard.propTypes = {
  planets: PropTypes.object.isRequired,
};

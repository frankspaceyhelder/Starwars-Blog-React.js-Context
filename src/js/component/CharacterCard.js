import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({ character }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    navigate(`/character/${character.uid}`);
  };

  const addToFavorites = () => {
    actions.addFavorite(character, "character");
  };

  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
        className="card-img-top"
        alt={`${character.name} Image`}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          Gender: {character.gender} <br />
          Hair Color: {character.hair_color} <br />
          Eye Color: {character.eye_color}
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

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

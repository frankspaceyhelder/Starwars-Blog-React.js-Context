import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewStarshipDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      actions.getStarshipDetails(id);
    }
  }, [id]);

  const details = store.listStarshipDetails;

  return (
    <div>
      {details ? (
        <div className="starship-details">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            alt={`${details.name} Image`}
            className="img-fluid"
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
          />
          <div className="starship-info">
            <h1>{details.name}</h1>
            <div className="prop-text">
              <p>Manufacturer: {details.manufacturer}</p>
              <p>Length: {details.length}</p>
              <p>Crew: {details.crew}</p>
              <p>Passengers: {details.passengers}</p>
              <p>Consumables: {details.consumables}</p>
              <p>Max Atmosphering Speed: {details.max_atmosphering_speed}</p>
              <p>Hypderdrive Rating: {details.hyperdrive_rating}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

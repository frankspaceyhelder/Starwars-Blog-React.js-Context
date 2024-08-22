import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewPlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      actions.getPlanetDetails(id);
    }
  }, [id]);

  const details = store.listPlanetDetails;

  return (
    <div>
      {details ? (
        <div className="planet-details">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={`${details.name} Image`}
            className="img-fluid"
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
          />
          <div className="planet-info">
            <h1>{details.name}</h1>
            <div className="prop-text">
              <p>Climate: {details.climate}</p>
              <p>Population: {details.population}</p>
              <p>Terrain: {details.terrain}</p>
              <p>Gravity: {details.gravity}</p>
              <p>Diameter: {details.diameter}</p>
              <p>Surface Water: {details.surface_water}</p>
              <p>Rotation Period: {details.rotation_period}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

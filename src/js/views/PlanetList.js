import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/PlanetCard";

export const PlanetList = () => {
  const { store } = useContext(Context);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="container">
      <h1>Planets</h1>
      <div className="row">
        <div ref={carouselRef} className="card-carousel">
          {store.listPlanets.map((planets, index) => (
            <div key={index} className="card-carousel-item">
              <PlanetCard planets={planets} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

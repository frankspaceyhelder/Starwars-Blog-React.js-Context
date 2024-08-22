import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { StarshipCard } from "../component/StarshipCard";

export const StarshipList = () => {
  const { store } = useContext(Context);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="container">
      <h1>Starships</h1>
      <div className="row">
        <div ref={carouselRef} className="card-carousel">
          {store.listStarships.map((starships, index) => (
            <div key={index} className="card-carousel-item">
              <StarshipCard starships={starships} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

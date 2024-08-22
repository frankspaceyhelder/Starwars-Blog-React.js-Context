import React from "react";
import "../../styles/home.css";
import { CharacterList } from "./CharacterList";
import { StarshipList } from "./StarshipList";
import { PlanetList } from "./PlanetList";

export const Home = () => (
  <div className="text-center mt-5">
    <CharacterList />
    <StarshipList />
    <PlanetList />
  </div>
);

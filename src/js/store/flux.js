const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      listCharacters: [],
      listCharacterDetails: {},
      listStarships: [],
      listStarshipDetails: {},
      listPlanets: [],
      listPlanetDetails: {},
      favorites: [],
    },
    actions: {
      getPeople: async (elementType) => {
        try {
          const resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) throw new Error(`Error in the request: ${resp.status}`);
          const data = await resp.json();

          if (elementType === "people") {
            const detailedCharacters = await Promise.all(
              data.results.map(async (character) => {
                try {
                  const detailResp = await fetch(character.url);
                  if (!detailResp.ok) throw new Error(`Error fetching details: ${detailResp.status}`);
                  const detailData = await detailResp.json();
                  return {
                    ...character,
                    gender: detailData.result.properties.gender,
                    hair_color: detailData.result.properties.hair_color,
                    eye_color: detailData.result.properties.eye_color,
                  };
                } catch (error) {
                  console.error(`Error fetching details for ${character.name}:`, error);
                  return character; 
                }
              })
            );

            setStore({ listCharacters: detailedCharacters });
          }
        } catch (error) {
          console.error(`Error in the promise:`, error);
        }
      },
      getPeopleDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/people/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listCharacterDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      getStarships: async (elementType) => {
        try {
          const resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) throw new Error(`Error in the request: ${resp.status}`);
          const data = await resp.json();

          if (elementType === "starships") {
            const detailedStarships = await Promise.all(
              data.results.map(async (starship) => {
                try {
                  const detailResp = await fetch(starship.url);
                  if (!detailResp.ok) throw new Error(`Error fetching details: ${detailResp.status}`);
                  const detailData = await detailResp.json();
                  return {
                    ...starship,
                    model: detailData.result.properties.model,
                    length: detailData.result.properties.length,
                    crew: detailData.result.properties.crew,
                  };
                } catch (error) {
                  console.error(`Error fetching details for ${starship.name}:`, error);
                  return starship; 
                }
              })
            );

            setStore({ listStarships: detailedStarships });
          }
        } catch (error) {
          console.error(`Error in the promise:`, error);
        }
      },
      getStarshipDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/starships/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listStarshipDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      getPlanets: async (elementType) => {
        try {
          const resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) throw new Error(`Error in the request: ${resp.status}`);
          const data = await resp.json();

          if (elementType === "planets") {
            const detailedPlanets = await Promise.all(
              data.results.map(async (planet) => {
                try {
                  const detailResp = await fetch(planet.url);
                  if (!detailResp.ok) throw new Error(`Error fetching details: ${detailResp.status}`);
                  const detailData = await detailResp.json();
                  return {
                    ...planet,
                    climate: detailData.result.properties.climate,
                    population: detailData.result.properties.population,
                    terrain: detailData.result.properties.terrain,
                  };
                } catch (error) {
                  console.error(`Error fetching details for ${planet.name}:`, error);
                  return planet; 
                }
              })
            );

            setStore({ listPlanets: detailedPlanets });
          }
        } catch (error) {
          console.error(`Error in the promise:`, error);
        }
      },

      getPlanetDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/planets/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listPlanetDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      addFavorite: (item, type) => {
        const store = getStore();
        const newItem = { ...item, type };
        if (
          !store.favorites.some(
            (fav) => fav.name === item.name && fav.type === type
          )
        ) {
          setStore({ favorites: [...store.favorites, newItem] });
        }
      },
      removeFavorite: (item) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((fav) => fav.name !== item.name),
        });
      },
    },
  };
};

export default getState;

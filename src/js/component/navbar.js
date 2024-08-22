import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeFromFavorites = (item) => {
    actions.removeFavorite(item);
  };

  return (
    <nav className="navbar navbar-light bg-secondary mb-3">
      <Link className="sw-btn" to="/">
        <img
          src="https://i.pinimg.com/originals/34/74/ec/3474ecfdf3821bb5cf51eaba871ce312.png"
          className="navbar-img"
          alt="Star Wars Logo"
        />
      </Link>
      <div className="ml-auto">
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-black dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite, index) => (
                <li key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="dropdown-item">
                      {favorite.name} ({favorite.type})
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => removeFromFavorites(favorite)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <span className="dropdown-item">No favorites added</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

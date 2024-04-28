import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (favorite) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavoriteHandler = (idToBeAdded) => {
    setFavoriteMealIds((prevFavoriteIds) => [...prevFavoriteIds, idToBeAdded]);
  };

  const removeFavoriteHandler = (idToBeRemoved) => {
    setFavoriteMealIds((prevFavoriteIds) =>
      prevFavoriteIds.filter((mealId) => mealId !== idToBeRemoved)
    );
  };

  const contextValue = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

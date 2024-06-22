import React, { useEffect, useState } from "react";
import DefaultLayoutHOC from "../layouts/DefaultLayout";
import ArticleCategoryCard from "../components/ArticleCategoryCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const toggleFavorite = (article) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.name === article.name)) {
      updatedFavorites = favorites.filter(fav => fav.name !== article.name);
    } else {
      updatedFavorites = [...favorites, article];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Favorite Articles</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 justify-center px-3">
        {favorites.map((article, index) => (
          <ArticleCategoryCard
            key={index}
            {...article}
            isFavorite={true}
            toggleFavorite={() => toggleFavorite(article)}
          />
        ))}
      </div>
    </>
  );
};

export default DefaultLayoutHOC(Favorites);

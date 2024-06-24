import React, { useEffect, useState } from "react";
import DefaultLayoutHOC from "../layouts/DefaultLayout";
import ArticleCategoryCard from "../components/ArticleCategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// importing swiper package css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      // el: '.swiper-pagination',
      type: "bullets",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    modules: [Pagination, Navigation],
    className: "mySwiper",
    // navigation: true,
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (article) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.name === article.name)) {
      updatedFavorites = favorites.filter((fav) => fav.name !== article.name);
    } else {
      updatedFavorites = [...favorites, article];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Favorite Articles</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet!</p>
      ) : (
        <>
          <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center px-3">
            {favorites.map((fav, index) => (
              <ArticleCategoryCard
                key={index}
                {...fav}
                isFavorite={true}
                toggleFavorite={() => toggleFavorite(fav)}
              />
            ))}
          </div>
          <div className="hidden lg:block px-5">
            <Swiper {...slideConfig}>
              {favorites.map((fav, index) => (
                <SwiperSlide key={index}>
                  <ArticleCategoryCard
                    key={index}
                    {...fav}
                    isFavorite={true}
                    toggleFavorite={() => toggleFavorite(fav)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default DefaultLayoutHOC(Favorites);

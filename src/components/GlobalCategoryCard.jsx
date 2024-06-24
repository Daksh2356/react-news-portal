import React from "react";
import { Link } from "react-router-dom";

const GlobalSmCard = ({ source: { name }, title, description, url, urlToImage }) => {
  return (
    <>
      <Link
        to={`/article/${name}`}
        state={{ name, description, url, urlToImage, title }}
        className="lg:hidden w-full bg-sky-100 rounded-sm overflow-hidden"
      >
        <div className="my-5 text-center">
          <h2 className="truncate">{name}</h2>
          {urlToImage ? (
            <div className="flex items-center justify-center">
              <img src={urlToImage} height={200} width={150} alt={name}></img>
            </div>
          ) : null}
          <p className=" font-light px-2 truncate-multiline">{description}</p>
        </div>
      </Link>
    </>
  );
};

const GlobalLgCard = ({ source: { name }, title, description, url, urlToImage }) => {
  return (
    <>
      <Link
        to={`/article/${name}`}
        state={{ name, description, url, urlToImage, title }}
        className="hidden lg:block h-72 bg-sky-100 border-black border-2 rounded-md shadow-md overflow-hidden"
      >
        <div className="my-5 text-center">
          <h2 className="truncate">{name}</h2>
          {urlToImage ? (
            <div className="flex items-center justify-center">
              <img src={urlToImage} height={300} width={250} alt={name}></img>
            </div>
          ) : null}
          <p className=" font-light px-2 truncate-multiline">{description}</p>
        </div>
      </Link>
    </>
  );
};

const GlobalCategoryCard = (props) => {
  return (
    <>
      <GlobalSmCard {...props} />
      <GlobalLgCard {...props} />
    </>
  );
};

export default GlobalCategoryCard;

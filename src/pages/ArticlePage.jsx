// ArticlePage.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import DefaultLayoutHOC from "../layouts/DefaultLayout";

const ArticlePage = () => {

  const location = useLocation();
  const {name, description, url, urlToImage, title} = location.state  || {};

  return (
    <div className="m-8">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        {title ?  <h3 className="text-xl mb-8">{title}</h3> : null}
        {urlToImage ? (
            <div className="flex items-center justify-center">
              <img src={urlToImage} height={500} width={500} alt={name}></img>
            </div>
          ) : null}
        <p className="text-lg mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read more by clicking on this URL
        </a>
      </div>
    </div>
  );
};

export default DefaultLayoutHOC(ArticlePage);

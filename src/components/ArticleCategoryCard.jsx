import React from "react";
import { Link } from "react-router-dom";

const ArticleSmCard = ({  name, description, url }) => {
  return (
    <>
      <Link to={`/article/${name}`} 
      state ={{name, description, url}}
      className="lg:hidden w-full bg-blue-300 rounded-sm overflow">
      <div className="my-5 text-center">
          <h2 className="truncate">{name}</h2>
          <p className="text-sm font-light px-2 truncate-multiline">{description}</p>
        </div>
      </Link>
    </>
  );
};

const ArticleLgCard = ({ name,description, url}) => {
  return (
    <>
     <Link to={`/article/${name}`}
     state={{ name, description, url }}
        className="hidden lg:block h-48 bg-blue-300 border-black border-2 rounded-md shadow-md overflow">
        <div className="my-5 text-center">
          <h2 className="truncate">{name}</h2>
          <p className="text-sm font-light px-2 truncate-multiline">{description}</p>
        </div>
      </Link>
    </>
  );
};

const ArticleCategoryCard = (props) => {
  return (
    <>
      <ArticleSmCard {...props} />
      <ArticleLgCard {...props} />
    </>
  );
};

export default ArticleCategoryCard;
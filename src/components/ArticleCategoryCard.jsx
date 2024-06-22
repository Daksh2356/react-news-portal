import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticleSmCard = ({  name, description, url }) => {
  return (
    <>
      <Link to={`/article/${name}`} 
      state ={{name, description, url}}
      className="lg:hidden w-full bg-blue-300 rounded-sm overflow">
     <div className="my-5 text-center">
          <div className="flex w-full justify-evenly">
            <h2 className="truncate w-2/3">{name}</h2>
            <FaStar className="text-white hover:text-black"/>
          </div>
          <p className=" font-light px-2 truncate-multiline">{description}</p>
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
          <div className="flex w-full justify-evenly">
            <h2 className="truncate w-2/3">{name}</h2>
            <FaStar className="text-white hover:text-black"/>
          </div>
          <p className=" font-light px-2 truncate-multiline">{description}</p>
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

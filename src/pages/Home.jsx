import React, { useEffect, useState } from "react";
import DefaultLayoutHOC from "../layouts/DefaultLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosCnfig";
import ArticleCategoryCard from "../components/ArticleCategoryCard";

// importing swiper package css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../index.css";
import SearchBar from "../components/SearchBar";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Home = () => {
  const [category, setCategory] = useState("entertainment");
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

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
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/top-headlines/sources", {
          params: {
            category,
          },
        });
        // console.log(category);
        // console.log(response.data.sources);
        setArticles(response.data.sources);
      } catch (error) {
        console.error("Error fetching articles", error);
        if (error.response.status === 429) {
          toast.error("Too many requests. API Limit reached!! ");
        }
        if (error.response.status === 500) {
          toast.error("Internal Server Error. Please try again later.");
        }
        if (error.response.status === 502) {
          toast.error("Bad Gateway. Please try again later.");
        }
        if (error.response.status === 503) {
          toast.error("Service Unavailable. Please try again later.");
        }
        toast.error("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [category]);


  const handleSearch = async (query) => {

    var result = articles.filter((article) => { 
      console.log(query);
      console.log(article.name.toLowerCase().includes(query.toLowerCase()));
      return article.name.toLowerCase().includes(query.toLowerCase());
    });

    if (result.length === 0) {
      toast.error("No articles found with the given search query.");
    } else {
      setArticles(result);
    }
    
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Top Headlines</h1>
      <p className="text-center text-sm text-gray-500">
        Get the latest news on business, entertainment, health, science, sports
        and technology. Select a category to get started.
      </p>

      <div className="flex flex-wrap justify-center gap-2 my-5">
        {categories.map((cat) => (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 "
            key={cat}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center px-3">
            {articles.map((article, index) => (
              <ArticleCategoryCard key={index} {...article} />
            ))}
          </div>
          <div className="hidden lg:block px-5">
            <Swiper {...slideConfig}>
              {articles.map((article, index) => (
                <SwiperSlide key={index}>
                  <ArticleCategoryCard {...article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
      <div className="flex flex-col justify-center items-center my-10 gap-5">
        <p className="texts-m text-gray-500 text-center">
          Type any character and hit Search button to filter results!
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>
    </>
  );
};

export default DefaultLayoutHOC(Home); // passing the Home page to the DefaultLayoutHOC
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import down_arrow_dark from "../../Assets/Images/down_arrow_dark.svg";
import ArticleCard from "../../Components/Cards/ArticleCard";
// import PopularConversationsCard from "../../Components/Cards/PopularConversationsCard";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import { useNalsarContext } from "../../Hooks/useData";
const Articles = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All Articles");
  const { categories, data } = useNalsarContext();
  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="page-content-flex">
          <div className="page-title-flex">
            <div className="page-title">Articles</div>
            <div className="categories-dowpdown-flex">
              <div
                className="categories-dropdown"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                <div className="categories-dropdown-text">{categoryFilter}</div>
                <img src={down_arrow_dark} className="icon-small" />
              </div>
              {isDropdown ? (
                <div className="dropdown">
                  {categoryFilter !== "All Articles" ? (
                    <span
                      className="dropdown-text"
                      onClick={() => setCategoryFilter("All Articles")}
                    >
                      All Articles
                    </span>
                  ) : null}
                  {categories.map((category, id) => {
                    return category !== categoryFilter ? (
                      <span
                        className="dropdown-text"
                        onClick={() => setCategoryFilter(category)}
                        key={id}
                      >
                        {category}
                      </span>
                    ) : null;
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <div className="Card-flex">
            {categoryFilter === "All Articles"
              ? data.map((article, id) => {
                  return (
                    <div>
                      <ArticleCard data={article} key={id} />
                    </div>
                  );
                })
              : data
                  .filter((article) =>
                    article.res.tags.includes(categoryFilter)
                  )
                  .map((article, id) => {
                    return (
                      <div key={id}>
                        <ArticleCard data={article} />
                      </div>
                    );
                  })}
          </div>
          {/* <div className="load-more">Load more</div> */}
        </div>
        {/* <div className="page-content-flex">
          <div className="page-title-flex">
            <div className="page-title">Popular Reads</div>
          </div>
          <div className="Card-flex">
            <PopularConversationsCard />
            <PopularConversationsCard />
            <PopularConversationsCard />
          </div>
        </div> */}
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Articles;

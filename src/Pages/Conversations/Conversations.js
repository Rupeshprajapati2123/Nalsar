import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PodcastCard from "../../Components/Cards/PodcastCard";
import down_arrow_dark from "../../Assets/Images/down_arrow_dark.svg";
import PopularConversationsCard from "../../Components/Cards/PopularConversationsCard";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import { useNalsarContext } from "../../Hooks/useData";
const Conversations = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All Articles");
  const { conversations, categoriesPod } = useNalsarContext();

  return (
    <div>
      <Navbar />
      {conversations.length == 0 ? (
        <div className="flex justify-center align-middle">
          <img
            className="object-cover"
            src="https://t3.ftcdn.net/jpg/03/15/92/94/360_F_315929483_O3zCF74h869pep9L2WMi6cWS2bhO2AjH.jpg"
          />
        </div>
      ) : (
        <div className="page">
          <div className="page-content-flex">
            <div className="page-title-flex">
              <div className="page-title">Podcasts</div>
              <div className="categories-dowpdown-flex">
                <div
                  className="categories-dropdown"
                  onClick={() => setIsDropdown(!isDropdown)}
                >
                  <div className="categories-dropdown-text">
                    {categoryFilter}
                  </div>
                  <img src={down_arrow_dark} className="icon-small" />
                </div>
                {isDropdown ? (
                  <div className="dropdown">
                    {categoryFilter !== "All Articles" ? (
                      <span
                        className="dropdown-text"
                        onClick={() => setCategoryFilter("All articles")}
                      >
                        All Articles
                      </span>
                    ) : null}
                    {categoriesPod.map((category, id) => {
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
              {conversations.map((conversation) => {
                return <PodcastCard data={conversation.res} />;
              })}
            </div>
            {/* <div className="load-more">Load more</div> */}
          </div>
          {/* <div className="page-content-flex">
          <div className="page-title-flex">
            <div className="page-title">Popular Conversations</div>
          </div>
          <div className="Card-flex">
            <PopularConversationsCard />
            <PopularConversationsCard />
            <PopularConversationsCard />
          </div>
        </div> */}
        </div>
      )}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Conversations;

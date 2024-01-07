import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import carImg from "../../Assets/Images/CarImg.png";
import ArticleCard from "../../Components/Cards/ArticleCard";
import TopPicsCard from "../../Components/Cards/TopPicsCard";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import BackToTop from "../../Components/BackToTop/BackToTop";
import { useNalsarContext } from "../../Hooks/useData";
import { MoonLoader } from "react-spinners";
const Home = () => {
  const { data, categories, isLoading, searchResults, isSearchResultReady } =
    useNalsarContext();
    console.log(searchResults)
    console.log(isSearchResultReady)
  if (isLoading) {
    return <div className="class-loader">
      <MoonLoader  />;
      </div>
  }
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-carousel-flex">
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            stopOnHover={false}
          >
            {data.map((article, id) => {
              return id < 5 ? (
                <img
                  src={article.res.img}
                  alt="title"
                  className="car-img hide-img"
                />
              ) : null;
            })}
          </Carousel>
          <div className="carousel-title-block">
            <Carousel
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              stopOnHover={false}
            >
              {data.map((article, id) => {
                return (
                  <>
                    <div className="carousel-credits">
                      <div className="carousel-title">{article.res.title}</div>
                      <div className="caro_name">
                        {article.res.writers.map((temp) => {
                          return (
                            <div className="carousel-small-text">
                              {temp.name}&nbsp;&nbsp;&nbsp;
                            </div>
                          );
                        })}
                      </div>
                      <div className="carousel-hr" />
                      <div className="card-credits">
                        <div className="card-small-text-car">
                          {article.res.date}
                        </div>
                        <div className="card-small-dot" />
                        <div className="card-small-text-car">
                          {article.res.duration} Min Read
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="home-content">
          <div className="home-con-flex">
            <div className="page-title-flex">
              <div className="page-title">Recent Articles</div>
            </div>
            <div className="Card-flex">
              {!isSearchResultReady 
                ? data.map((article, id) => {
                    return (
                      <div>
                        <ArticleCard data={article} key={id} />
                      </div>
                    );
                  })
                : searchResults.map((article, id) => {
                    return (
                      <div>
                        <ArticleCard data={article} key={id} />
                      </div>
                    );
                  })}
            </div>
            <Link to="/articles">
              <div className="load-more">Read More</div>
            </Link>
          </div>
          <div className="home-side-con">
            <div className="home-side-con-top">
              <div className="page-title-flex">
                <div className="page-title">Top Picks</div>
              </div>
              <div className="home-toppic-flex">
                {data.map((article, id) => {
                  return id < 3 ? (
                    <div>
                      <TopPicsCard data={article} key={id} />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="home-side-con-btm">
              <div className="page-title-flex">
                <div className="page-title">Categories</div>
              </div>
              <div className="home-side-con-btm-flex">
                {categories.map((cat, id) => {
                  return (
                    <Link to="/articles">
                      <div className="category-box" key={id}>
                        {cat}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;

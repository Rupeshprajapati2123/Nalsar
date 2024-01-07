import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import down_arrow_dark from "../../Assets/Images/down_arrow_dark.svg";
import ArticleCard from "../../Components/Cards/ArticleCard";
import PopularConversationsCard from "../../Components/Cards/PopularConversationsCard";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import BackToTop from "../../Components/BackToTop/BackToTop";
import SaarcCard from "../../Components/Cards/saarcCard";
const Articles = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [data, setdata] = useState([]);
  const usercollectionref = collection(db, "Saarc");
  useEffect(() => {
    const getArticles = async () => {
      const temp = await getDocs(usercollectionref,orderBy('createdAt', 'desc'));
      setdata(temp.docs.map((doc) => ({ res: doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);
  return (
    <div>
      <Navbar />
      {data.length===0?<div className="flex justify-center align-middle" >
      <img className="object-cover"src="https://t3.ftcdn.net/jpg/03/15/92/94/360_F_315929483_O3zCF74h869pep9L2WMi6cWS2bhO2AjH.jpg"/>
      </div>:<div className="page">
        <div className="page-content-flex">
          <div className="page-title-flex">
            <div className="page-title">Articles</div>
            <div className="categories-dowpdown-flex">
              <div
                className="categories-dropdown"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                <div className="categories-dropdown-text">Categories</div>
                <img src={down_arrow_dark} className="icon-small" />
              </div>
              {/* {isDropdown ? (
                <div className="dropdown">
                  <span className="dropdown-text">Category 1</span>
                  <span className="dropdown-text">Category 2</span>
                  <span className="dropdown-text">Category 3</span>
                  <span className="dropdown-text">Category 4</span>
                </div>
              ) : null} */}
            </div>
          </div>
          <div className="Card-flex">
            {data.map((article, id) => {
              return (
                <div>
                 <SaarcCard data={article} key={id}/>
                </div>
              );
            })}
          </div>
          <div className="load-more">Load more</div>
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
      </div>}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Articles;

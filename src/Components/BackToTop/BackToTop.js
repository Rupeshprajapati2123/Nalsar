import React, { useState, useEffect } from "react";
import arrow_up from "../../Assets/Images/arrow_up.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isVisible ? "btt" : "btt-none"} onClick={scrollToTop}>
      <img src={arrow_up} alt="Go to top of the page" className="btt-img"></img>
    </div>
  );
};

export default BackToTop;

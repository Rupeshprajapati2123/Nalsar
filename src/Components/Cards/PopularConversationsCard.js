import React from "react";
import popularImg from "../../Assets/Images/popularImg.png";

const PopularConversationsCard = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-tags">
          <div className="card-tag">Criminal Law</div>
          <div className="card-tag">Criminal Law</div>
        </div>
        <img src={popularImg} alt="title" className="card-img non-draggable hide-img" />
      </div>
      <div className="card-con">
        <div className="card-credits">
          <div className="card-small-text">Rishab Ranjan</div>
          <div className="card-small-dot" />
          <div className="card-small-text">July 28th, 2013</div>
          <div className="card-small-dot" />
          <div className="card-small-text">10 Min Read</div>
        </div>
        <div className="card-title-popular">
          Explainer: Ashwini Kumar Upadhyay v. Union of India- A challenge to
          The Places of Worship Act, 1991
        </div>
      </div>
    </div>
  );
};

export default PopularConversationsCard;

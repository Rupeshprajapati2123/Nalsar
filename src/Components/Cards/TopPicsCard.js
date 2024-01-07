import React from "react";
// import topImg from "../../Assets/Images/topImg.png";
import { NavLink } from "react-router-dom";

const TopPicsCard = ({ data }) => {
  return (
    <NavLink to={`/posts/${data.res.link}`}>
      <div className="hori-card">
        <img
          src={data.res.img}
          alt="title"
          className="hori-card-img hide-img"
        />
        <div className="hori-card-body">
          <div className="hori-card-title">{data.res.title}</div>
          <div className="card-credits">
            <div className="card-small-text">{data.res.date}</div>
            <div className="card-small-dot" />
            <div className="card-small-text">{data.res.duration} Min Read</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TopPicsCard;

import React from "react";
import "./cards.css";
import podcastImg from "../../Assets/Images/podcastImg.png";
import timer from "../../Assets/Images/timer.svg";
import { Link, NavLink } from "react-router-dom";

const PodcastCard = ({ data }) => {
  
  return (
    <NavLink to={`/podcasts/${data.link}`} className="card">
      <div className="card-top">
        <div className="card-tags">
          {data.tags.map((tag) => {
            return <div className="card-tag">{tag}</div>;
          })}
        </div>
        <img src={data.img} alt="title" className="card-img non-draggable hide-img" />
      </div>
      <div className="card-credits">
        {data.writers.map((writer)=>{

          return    <div className="card-small-text">{writer.name}</div>
        })}
        <div className="card-small-dot" />
        <div className="card-small-text">{data.date}</div>
      </div>
      <div className="card-title">
        {data.title}
      </div>
      <div className="card-btm">
        <div className="card-timer">
          <img src={timer} alt="duration" className="card-timer-img" />
          <div className="card-timer-time">{data.duration} Min</div>
        </div>
        <div className="card-play-btn">
          <div className="card-play-triangle" />
        </div>
      </div>
    </NavLink>
  );
};

export default PodcastCard;

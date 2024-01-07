import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ArticleCard = ({ data }) => {
  const [st, setSt] = useState("");
  useEffect(() => {
    setSt({
      st: data.res.data,
    });
  }, []);
  const locator = useLocation();
  return (
    <NavLink to={`/posts/${data.res.link}`} className="card">
      <div className="card-top">
        <div className="card-tags">
          {data.res.tags.map((tag, id) => {
            return (
              <div className="card-tag" key={id}>
                {tag}
              </div>
            );
          })}
        </div>
        <img
          src={data.res.img}
          alt="title"
          className="card-img non-draggable hide-img"
        />
      </div>
      <div className="card-credits">
        {data.res.writers.map((writer, id) => {
          return (
            <div className="card-small-text" key={id}>
              {writer.name}
            </div>
          );
        })}
        <div className="card-small-dot" />
        <div className="card-small-text">{data.res.date}</div>
        <div className="card-small-dot" />
        <div className="card-small-text">{data.res.duration} Min Read</div>
      </div>
      <div className="card-title">{data.res.title}</div>
      {locator.pathname === "/articles" ? (
        <div className="card-para">{data.res.description}</div>
      ) : null}
      <div className="card-btn">View Post</div>
    </NavLink>
  );
};

export default ArticleCard;

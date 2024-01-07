import React from "react";
import "./cards.css";
import author from "../..//Assets/Images/author.png";


const EditBoardCard = ({data,links}) => {
 
  return (
    <div className="editboard-card">
      <div className="editboard-title">{data.position}</div>
      <div className="author-card">
        <img src={data.img} alt="Author" className="edit-car-img non-draggable hide-img" />
        <div className="author-credits">
          <div className="author-name">{data.name}</div>
          {/* <div className="author-desc"></div> */}
        </div>
        <div className="author-para">
          {data.job}
        </div>
        <div className="author-links">
          {data.authorLinks.map((link, id) => {
            return (
              link.url=="no"?null
              :<a href={link.url} target="_blank" rel="noreferrer" key={id}>
                <img src={link.img} alt="Link" className="author-link" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditBoardCard;

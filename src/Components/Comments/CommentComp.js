import React from "react";
import "./comment.css";
import commProfile from "../../Assets/Images/commProfile.svg";

const CommentComp = ({data}) => {
  return (
    <div className="comm-single">
      
      <span className="comm-name">- {data.name}</span>
      <div className="comm-text">
      {data.comment}
      </div>
    </div>
  );
};

export default CommentComp;

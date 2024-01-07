import React, { useState } from "react";
import "./comment.css";
import CommentComp from "./CommentComp";
import { db } from "../../firebaseconfig";
import { doc, updateDoc } from "@firebase/firestore";

const Comments = ({id ,comments}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const handelPost = async() => {
    
    const userDoc=doc(db,"Articles",id);
    const newfield={comments:[{comment,name},...comments]};
    await updateDoc(userDoc,newfield)
    window.location.reload();
  
  };
  
  return (
    <div className="comments">
      <div className="comments-title">Comments</div>
      <div className="com-line" />
      <div className="comments-box">
        {comments.map((comment)=>
        {
          return (
            <CommentComp data={comment}/>
            )
        })}
      </div>
      <div className="comments-input-flex">
        <input
          placeholder="Share your thoughts"
          type="text"
          className="comment-input-big"
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          placeholder="Your Name"
          type="text"
          className="comment-input-small"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="load-more-comm" onClick={handelPost}>
          Post
        </div>
      </div>
    </div>
  );
};

export default Comments;

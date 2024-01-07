import React, { useEffect, useState } from "react";
import "./cards.css";
import author from "../..//Assets/Images/author.png";
import authorFacebook from "../../Assets/Images/authorFacebook.svg";
import authorInsta from "../../Assets/Images/authorInsta.svg";
import authorLinkedin from "../../Assets/Images/authorLinkedin.svg";
import authorTwitter from "../../Assets/Images/authorTwitter.svg";
import authorYoutube from "../../Assets/Images/authorYoutube.svg";

const AuthorCard = ({ data }) => {
  

 const [social, setSocial]=useState([]);
  const authorLinks = [
    authorInsta,
    authorTwitter,
    authorFacebook,
    authorLinkedin,
  ];
  const parsedata=()=>{
    const combinedArray = authorLinks.map((item, index) => ({
      key: item,
      value: data.socialMediaLinks[index],
    }));

    setSocial(combinedArray)
  }
useEffect(()=>{
  parsedata();
},[]);
  return (
    <div className="author-card">
      <img src={data.authorImage} alt="Author" className="aut-omg non-draggable hide-img" />
      
      <div className="author-credits">
        <div className="author-name">{data.name}</div>
        {/* <div className="author-desc">Product Designer</div> */}
      </div>
      <p className="author-para">
        {data.description}
      </p>
      <div className="author-links">
      {social.map((author) => {
        return (  
            author.value=="no"?<></>:
            <a href={author.value} target="_blank" rel="noreferrer" >
              <img src={author.key} alt="Link" className="author-link" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorCard;

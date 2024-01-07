import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import "../Blogs/blogs.css";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PopularConversationsCard from "../../Components/Cards/PopularConversationsCard";
import AuthorCard from "../../Components/Cards/AuthorCard";
import blogLink from "../../Assets/Images/blogLink.svg";
import blogFacebook from "../../Assets/Images/blogFacebook.svg";
import blogLinkedin from "../../Assets/Images/blogLinkedin.svg";
import blogMail from "../../Assets/Images/blogMail.svg";
import blogTwitter from "../../Assets/Images/blogTwitter.svg";
import Comments from "../../Components/Comments/Comments";
import BackToTop from "../../Components/BackToTop/BackToTop";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";
const Saarc = () => {
  const { id } = useParams()
  const [post, setPost] = useState([])
  const [comment,setComment]=useState([])
  const postCollectionRef = collection(db, "Saarc")
  const [isLoading, setIsLoading] = useState(true)
  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);

    // Select the URL text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);
    // Display a notification or perform any desired action
    alert('URL copied to clipboard: ' + window.location.href);
  };
 
  const links = [
    {
      id:0,
      img: blogLink,
      url: "/",
    },
    {
      id:1,
      img: blogFacebook,
      url: "https://www.facebook.com/",
    },
    {
      id:2,
      img: blogTwitter,
      url: "https://twitter.com/",
    },
    {
      id:3,
      img: blogLinkedin,
      url: "https://www.linkedin.com/",
    },
    {
      id:4,
      img: blogMail,
      url: "https://mail.google.com/mail/u/0/",
    },
  ];
  const getPost = async () => {
    const data = await getDocs(query(postCollectionRef, where("link", "==", `${id}`)))
    setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
    setIsLoading(false)
  }
  useEffect(() => {
    getPost();
    if (post) {
     } else {
      console.log("bt");
     }
  }, [])
 const currurl=window.location.href;
  return (
    <div>
      <Navbar />
      {post && post.map((data, id)=>{
         return         <div className="page" key={id}>
        <div className="blogs-con-flex">
          <div className="blogs-links">
            {/* {links.map((link, id) => {
              return (
                id==0?
                <div>
                  
                <div onClick={()=>copyToClipboard()}  key={id}>
                  <img
                    src={link.img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  
                </div></div>:
                
                <a href={link.url} target="_blank" rel="noreferrer" key={id}>
                  <img
                    src={link.img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                </a>
              );
            })} */}
            <div onClick={()=>copyToClipboard()}  key={id}>
                  <img
                    src={links[0].img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  </div>
                  <LinkedinShareButton url={currurl}>
                  <img
                    src={links[3].img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  </LinkedinShareButton>
                  <EmailShareButton url={currurl}>
                  <img
                    src={links[4].img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  </EmailShareButton>
                  <TwitterShareButton url={currurl}>
                  <img
                    src={links[2].img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  </TwitterShareButton>
                  <FacebookShareButton url={currurl}>
                  <img
                    src={links[1].img}
                    key={id}
                    alt="Share"
                    className="blog-link"
                  />
                  </FacebookShareButton>
          </div>
          <div className="blog-main-con">
            <div className="blog-img-flex">
              <img src={data.img} alt="Title" className="blog-img hide-img" />
              <div className="blog-img-tags">
                {data.tags.map((tag)=>{
                  return                 <div className="blog-img-tag">{tag}</div>;
                })}
              </div>
            </div>
            <div className="card-credits">
              <div className="card-small-text">{data.date}</div>
              <div className="card-small-dot" />
              <div className="card-small-text">{data.duration} Min Read</div>
            </div>
            <div className="blog-title">
              {data.title}
            </div>
            {console.log(data.data)}
            <div  dangerouslySetInnerHTML={{ __html: data.data }} />
            <Comments id={data.id} comments={data.comments}/>
            </div>
          <div className="blog-credits-flex">
            <div className="blog-credits-title-flex">
              <div className="blog-credits-title">AUTHOR</div>
              <div className="credits-hr" />
            </div>
            {data.writers.map((writer, id)=>{
              return <AuthorCard data={writer} key={id}/>
            })}
            {/* <div className="credits-and">&</div> */}
          </div>
        </div>
        <div className="page-content-flex">
          {/* <div className="page-title-flex">
            <div className="page-title">More Like This</div>
          </div> */}
          {/* <div className="Card-flex">
            <PopularConversationsCard />
            <PopularConversationsCard />
            <PopularConversationsCard />
          </div> */}
        </div>
      </div>
        })
      }
      <Footer />
    </div>
  );
};

export default Saarc;

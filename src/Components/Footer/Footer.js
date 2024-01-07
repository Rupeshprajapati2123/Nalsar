import React from "react";
import "./footer.css";
import Facebook from "../../Assets/Images/Facebook.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import LinkedIn from "../../Assets/Images/LinkedIn.svg";
import Twitter from "../../Assets/Images/Twitter.svg";
import YouTube from "../../Assets/Images/YouTube.svg";
import mail from "../../Assets/Images/mail.svg";
import call from "../../Assets/Images/call.svg";
import down_arrow from "../../Assets/Images/down_arrow.svg";
import footerLogo from "../../Assets/Images/footerLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const NavLinks = [
    // {
    //   img: Facebook,
    //   alt: "Facebook",
    //   url: "https://www.facebook.com/sbcnalsar",
    // },
    {
      img: Twitter,
      alt: "Twitter",
      url: "https://twitter.com/CLIC_nalsar",
    },
    {
      img: YouTube,
      alt: "YouTube",
      url: "https://www.youtube.com/channel/UCnDQyZ0neEnz7iUmM6SgtrA",
    },
    {
      img: LinkedIn,
      alt: "Linkedin",
      url: "https://www.linkedin.com/in/constitutional-law-and-information-collective-nalsar-882b02294/",
    },
    {
      img: Instagram,
      alt: "Instagram",
      url: "https://instagram.com/clic_nalsar?igshid=OGQ5ZDc2ODk2ZA==",
    },
  ];
  const NavItems = [
    {
      title: "Home",
      type: "normal",
      url: "/",
    },
    {
      title: "About Us",
      type: "normal",
      url: "/about-us",
    },
    {
      title: "Articles",
      type: "normal",
      url: "/articles",
    },
    {
      title: "Conversations",
      type: "normal",
      url: "/conversations",
    },
    {
      title: "SAARC corner",
      type: "normal",
      url: "/saarc-corner",
    },
    {
      title: "Write for us",
      type: "normal",
      url: "/write-for-us",
    },
    {
      title: "IJCL",
      type: "external",
      url: "https://ijcl.nalsar.ac.in/",
    },
  ];
  return (
    <div className="footer">
      {/* <div className="footer-sus-flex">
        <div className="footer-sus-text-flex">
          <div className="footer-sus-title">Subscribe to our Newsletter</div>
          <div className="footer-sus-subtitle">
            Subscribe to our newsletter and receive a selection of cool articles
            every weeks
          </div>
        </div>
        <div className="footer-sus-input-flex">
          <input type="email" placeholder="Enter your email" />
          <button className="footer-sus-btn">Subscribe</button>
        </div>
      </div> */}
      <div className="footer-map">
        <div className="footer-map-first">
          <div className="footer-map-first-top">
            <img src={footerLogo} alt="Logo" className="footer-logo" />
            <div className="footer-map-first-top-title">
               Constitutional Law & Information Collective
            </div>
            <p className="footer-map-first-top-para">
              NALSAR University of Law, Justice City, <br />
              Shamirpet, Hyderabad,
              <br />
              Telangana 500101
            </p>
          </div>
          <div className="footer-links">
            {NavLinks.map((navLink, id) => {
              return (
                <a href={navLink.url} target="_blank" rel="noreferrer" key={id}>
                  <img src={navLink.img} alt={navLink.alt} className="icon" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-map-second">
          <div className="footer-map-top-title">Contact us:</div>
          <div className="footer-map-contact-flex">
            <img src={mail} alt="Mail" className="footer-imgs" />
            <a
              href="mailto:cls@nalsar.ac.in"
              className="footer-map-contact-sub"
            >
              cls@nalsar.ac.in
            </a>
          </div>
          {/* <div className="footer-map-contact-flex">
            <img src={call} alt="Mail" className="footer-imgs" />
            <div className="footer-map-contact-sub">+91 0000 000 000</div>
          </div> */}
        </div>
        <div className="footer-map-third">
          <div className="footer-map-top-title">Menu</div>
          <div className="footer-menu-items">
            {NavItems.map((navItem, id) => {
              return navItem.type === "normal" ? (
                <Link
                  to={navItem.url}
                  className={
                    window.location.pathname === navItem.url
                      ? "footer-item-active"
                      : "footer-item"
                  }
                  title={navItem.title}
                  key={id}
                >
                  {navItem.title}
                </Link>
              ) : (
                <a
                  href={navItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-item"
                  title={navItem.title}
                  key={id}
                >
                  {navItem.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

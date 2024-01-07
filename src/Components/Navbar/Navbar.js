import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./navbar.css";
import navLogo from "../../Assets/Images/navLogo.png";
import Facebook from "../../Assets/Images/Facebook.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import LinkedIn from "../../Assets/Images/LinkedIn.svg";
import Twitter from "../../Assets/Images/Twitter.svg";
import YouTube from "../../Assets/Images/YouTube.svg";
import search from "../../Assets/Images/search.svg";
import accessibility from "../../Assets/Images/accessibility.svg";
import access1 from "../../Assets/Images/access1.svg";
import access2 from "../../Assets/Images/access2.svg";
import navLogoMobile from "../../Assets/Images/navLogoMobile.png";
import cross from "../../Assets/Images/cross.png";
import ham from "../../Assets/Images/ham.png";
import { useNalsarContext } from "../../Hooks/useData";

const Navbar = () => {
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [isAccessOn, setIsAccessOn] = useState(false);
  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [hideImg, setHideImg] = useState(false);
  const [show,setShow]=useState(false);
  const { searchQuery, setSearchQuery, handelSearch } = useNalsarContext();
  const settings = [
    {
      title: "Size",
      img: access1,
      id: 1,
    },
    {
      title: "Cursor",
      img: access2,
      id: 2,
    },
    {
      title: "Hide Img",
      img: access2,
      id: 3,
    },
  ];
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
      type: "drop",
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
      url: "/write_for_us",
    },
    {
      title: "IJCL",
      type: "",
      url: "https://ijcl.nalsar.ac.in/",
    },
  ];
  const handelSettingChange = (id) => {
    if (id === 1) {
      if (size === 2) {
        setSize(0);
      } else {
        setSize(size + 1);
      }
    } else if (id === 2) {
      if (cursor === 2) {
        setCursor(0);
      } else {
        setCursor(cursor + 1);
      }
    } else if (id === 3) {
      setHideImg(!hideImg);
    }
  };
  const handelReset = () => {
    setSize(0);
    setCursor(0);
    setHideImg(false);
  };
  useEffect(() => {
    if (size === 0) {
      document.documentElement.style.setProperty("--font-size", "16px");
    }
    if (size === 1) {
      document.documentElement.style.setProperty("--font-size", "18px");
    }
    if (size === 2) {
      document.documentElement.style.setProperty("--font-size", "20px");
    }
    if (hideImg) {
      document.documentElement.style.setProperty("--hide-img", 0);
    }
    if (!hideImg) {
      document.documentElement.style.setProperty("--hide-img", 1);
    }
    if (cursor === 0) {
      document.documentElement.style.setProperty("--cursor-size", "16px");
    }
    if (cursor === 1) {
      document.documentElement.style.setProperty("--cursor-size", "20px");
    }
    if (cursor === 2) {
      document.documentElement.style.setProperty("--cursor-size", "24px");
    }
  });
  return (
    <div className="nav">
      <div className="nav-top">
        <img src={navLogo} alt="NALSAR" className="nav-top-img non-draggable" />
      </div>
      <div className="nav-btm">
        <div className="nav-links">
          {NavLinks.map((navLink, id) => {
            return (
              <a href={navLink.url} target="_blank" rel="noreferrer" key={id}>
                <img src={navLink.img} alt={navLink.alt} className="icon" />
              </a>
            );
          })}
        </div>
        <div className="nav-items">
          {NavItems.map((navItem, id) => {
            return navItem.type != "" ? navItem.type==="drop"?(
              <div
                
                onMouseEnter={()=>setShow(true)}
                onMouseLeave={()=>setShow(false)}
                className={
                  window.location.pathname === navItem.url
                    ? "nav-item nav-active"
                    : "nav-item"
                }
                title={navItem.title}
                key={id}
              >
                {navItem.title}
                {show?<div className="showdiv">
                <Link
                to='/about-clic'
                
                
                title={navItem.title}
                key={id}
              >
                  <p className="showdi">About CLIC</p>
                  </Link>
                <Link
                to='/core_members'
                title={navItem.title}
                key={id}
              >
                <p className="showdi">Core Members</p>
                </Link>
                <Link
                to='/our_team'               
                title={navItem.title}
                key={id}
              >
              <p className="showdi">Our Team</p>
              </Link>
              </div>:null}
              </div>
            ):(
              <NavLink
                to={navItem.url}
                className={
                  window.location.pathname === navItem.url
                    ? "nav-item nav-active"
                    : "nav-item"
                }
                title={navItem.title}
                key={id}
              >
                {navItem.title}
              </NavLink>
            ) : (
              <a
                href={navItem.url}
                target="_blank"
                rel="noreferrer"
                className="nav-item"
                title={navItem.title}
                key={id}
              >
                {navItem.title}
              </a>
            );
          })}
        </div>
        <div className="nav-utils">
          {window.location.pathname === "/" ? (
            <div className="nav-search">
              {isSearchOn ? (
                <input
                  placeholder="Search"
                  type="text"
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              ) : null}
              <img
                src={search}
                alt="Search"
                className="icon"
                onClick={() => setIsSearchOn(!isSearchOn)}
              />
            </div>
          ) : null}
          <div className="access-set">
            <div
              className="accesibility-settings"
              onClick={() => setIsAccessOn(!isAccessOn)}
            >
              <img
                src={accessibility}
                alt="Accesibility"
                className="icon access"
              />
            </div>
            {isAccessOn ? (
              <div className="access-dropdown">
                {settings.map((setting) => {
                  return (
                    <div
                      className="setting-flex"
                      key={setting.id}
                      onClick={() => handelSettingChange(setting.id)}
                    >
                      <img
                        src={setting.img}
                        alt={setting.title}
                        className="setting-flex-img"
                      />
                      <div className="setting-flex-title">{setting.title}</div>
                      <div className="setting-progress-flex">
                        <div
                          className={
                            setting.id === 1
                              ? size > 0
                                ? "setting-progress-tab-active"
                                : "setting-progress-tab"
                              : setting.id === 2
                              ? cursor > 0
                                ? "setting-progress-tab-active"
                                : "setting-progress-tab"
                              : hideImg
                              ? "setting-progress-tab-active"
                              : "setting-progress-tab"
                          }
                        />
                        {setting.id !== 3 ? (
                          <div
                            className={
                              setting.id === 1
                                ? size > 1
                                  ? "setting-progress-tab-active"
                                  : "setting-progress-tab"
                                : cursor > 1
                                ? "setting-progress-tab-active"
                                : "setting-progress-tab"
                            }
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                })}
                <div className="access-btn" onClick={() => handelReset()}>
                  Reset
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="nav-mobile">
          <img src={navLogoMobile} alt="LOGO" className="nav-logo-mobile" />
          <img
            src={menu ? cross : ham}
            alt="Menu"
            className="ham"
            onClick={() => setMenu(!menu)}
          />
          {menu ? (
            <div className="nav-dropdown">
              <div className="nav-hr" />
              {NavItems.map((navItem, id) => {
                return navItem.type === "drop" ? (
                  <NavLink
                    to={navItem.url}
                    
                    className={
                      window.location.pathname === navItem.url
                        ? "nav-item-mobile nav-active-mobile"
                        : "nav-item-mobile"
                    }
                    title={navItem.title}
                    key={id}
                  >
                    {navItem.title}
                  </NavLink>
                ) : (
                  <a
                    href={navItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-item-mobile"
                    title={navItem.title}
                    key={id}
                  >
                    {navItem.title}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

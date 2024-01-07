import React, { useEffect, useState } from "react";
import "./adminNav.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseconfig";
const Navigation = () => {
  const [forceRender, setForceRender] = useState(false);
  const navigate = useNavigate();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="adminnav">
      <div className="nav-title">Admin Page</div>
      <div className="adminNav-controls">
        <div
          className="load-more-small"
          onClick={() => navigate("/create-article")}
        >
          Write An Article
        </div>
        <div
          className="load-more-small"
          onClick={() => navigate("/create-podcast")}
        >
          Create a Podcast
        </div>
        <div
          className="load-more-small"
          onClick={userSignOut}
        >
          SignOut
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import "./App.css";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Conversations from "./Pages/Conversations/Conversations";
import Articles from "./Pages/Articles/Articles";
import Test from "./Pages/Test/Test";
import Login from "./Pages/Admin/Login/Login";
import AdminHome from "./Pages/Admin/Home";
import CreatePost from "./Pages/Admin/Create/CreatePost";
import Post from "./Pages/Admin/Post";
import Podcast from "./Pages/Podcast/Podcast";
import AboutClic from "./Pages/AboutUs/AboutUs";
import SaarcPage from "./Pages/SaarcPage/SaarcPage";
import CreatePodcast from "./Pages/Admin/Create/CreatePodcast";
import Saarc from "./Pages/SaarcPage/Saarcs";
import OurTeam from "./Pages/AboutUs/our_team";
import CoreMembers from "./Pages/AboutUs/CoreMembers";

function App() {
  return (
    <div className="App custom-cursor">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/saarc-corner" element={<SaarcPage />} />
          <Route path="/write_for_us" element={<SaarcPage />} />
          <Route path="/about-clic" element={<AboutClic />} />
          <Route path="/our_team" element={<CoreMembers/>} />
          <Route path="/core_members" element={<OurTeam />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/adminpage" element={<AdminHome />} />
          <Route path="/test" element={<Test />} />
          <Route path="/create-article" element={<CreatePost />} />
          <Route exact path="/post/:id" element={<Post />} />
          <Route exact path="/posts/:id" element={<Blogs />} />
          <Route exact path="/saarc_posts/:id" element={<Saarc />} />
          <Route exact path="/podcast/:id" element={<Podcast />} />
          <Route exact path="/podcasts/:id" element={<Podcast />} />
          <Route exact path="/podcast" element={<Podcast />} />
          <Route exact path="/create-podcast" element={<CreatePodcast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

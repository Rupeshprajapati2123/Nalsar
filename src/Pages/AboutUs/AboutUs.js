import React from "react";
import "./aboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EditBoardCard from "../../Components/Cards/EditBoardCard";
import BackToTop from "../../Components/BackToTop/BackToTop";
import authorFacebook from "../../Assets/Images/authorFacebook.svg";
import authorInsta from "../../Assets/Images/authorInsta.svg";
import authorLinkedin from "../../Assets/Images/authorLinkedin.svg";
import authorTwitter from "../../Assets/Images/authorTwitter.svg";
import authorYoutube from "../../Assets/Images/authorYoutube.svg";
import { useLocation } from "react-router-dom";

const AboutClic = () => {

 

  const links = [];
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <div className="about-top">
          <h1 className="about-heading">About Us</h1>
          <p className="abut-para">
          The Constitutional Law Society(CLS) was created as an informal organisation of interested students, faculty members and members of the judiciary to promote engagement with constitutional issues. The society was created in the initial years of establishing the University and through the society the Indian Journal of Constitutional Law(IJCL) and later the Centre for Constitutional Law was set up. In recent years, the Centre has organised an annual conference “Courts and the Constitution” which is an annual exercise of examining the major constitutional law developments of the preceding calendar year by inviting speakers from the academia, bar and the bench. The IJCL has focussed on publishing rigorous research on constitutional law and comparative constitutional law. Constitutional Law & Information Collective (CLIC) has been the latest endeavour of CLS to promote and encourage conversations in Constitutional Law and serve as a platform where 'All Things Constitutional' can be found.
          </p>
          <h1 className="about-heading">Objective</h1>
          <p className="about-para">
          The current objective of the CLIC is to facilitate the dissemination of materials on constitutional law via an online platform in a variety of forms, such as blog posts, podcasts, and online panel discussions to reach a wider audience. Constitutional Law has diversified over the years, with many areas which previously were not portrayed as 'constitutional' questions now being framed as such.
          </p>
          <p className="about-para">
            The wide availability of materials on social media has generated an interest in constitutional law and this interest is not restricted to the academia or the bar and bench. An engagement with constitutional matters is a prerequisite for an informed and engaged civil society. This engagement with constitutional matters in India pre-dates the Constitution of India and is not confined to the intelligentsia or the lawyering community. Several popular movements have been based on constitutional values of fraternity, social justice, and social equality.
          </p>
          <p className="about-para">
          The present initiative of the CLIC is to discuss constitutional law questions in a broader social, historical and cultural context. CLIC aims to engage with both the foundational ideas of constitutional law as well as emerging areas of intersections with politics as well as law and society scholarship. It aims to bring these niche discussions to those who may not necessarily have a background in law..
          </p>
          <p className="about-para">
          Intersectional analysis is emerging as an area without disciplinary boundaries and these discussions enrich the understanding of constitutional law. This effort is to build capacities and provide credible, accessible, and engaging materials. This would work towards enhancing the quality of discourse on constitutional matters. CLIC aims to engage in issues that have a constitutional angle which could be rights-based issues or issues of democratic governance. These could include analysis of important developments or emerging issues of public concern.
          </p>
          
          <p className="about-para">
          CLIC is presently composed of faculty members and students with an advisory board who are members drawn from alumni, lawyers and scholars in the field of constitutional law.
          </p>
        </div>
        
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default AboutClic;

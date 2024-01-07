import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import EditBoardCard from '../../Components/Cards/EditBoardCard';
import "./aboutUs.css";
import authorFacebook from "../../Assets/Images/authorFacebook.svg";
import authorInsta from "../../Assets/Images/authorInsta.svg";
import authorLinkedin from "../../Assets/Images/authorLinkedin.svg";
import authorTwitter from "../../Assets/Images/authorTwitter.svg";
import authorYoutube from "../../Assets/Images/authorYoutube.svg";
import Footer from '../../Components/Footer/Footer';
export default function OurTeam() {
    const people = [
        {
          position: "CLIC Core Team Member",
          name: "Ms. Rashika Bodh",
          job: "Student at NALSAR",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Ffeature-image8458978?alt=media&token=335eccfb-4ff2-40c9-96e0-bd8267a0d513",
          about: "",
          authorLinks: [
            {
              img: authorFacebook,
              url: "no",
            },
            {
              img: authorInsta,
              url: "no",
            },
            {
              img: authorLinkedin,
              url: "https://www.linkedin.com/in/rashika-bodh-69636a208?originalSubdomain=in",
            },
            {
              img: authorTwitter,
              url: "no",
            },
          ]
        },
        {
          position: "Faculty Coordinator",
          name: "Prof. (Dr.) Vasanthi Nimushakavi",
          job: "Faculty at NALSAR",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image4243395?alt=media&token=a72b7eec-eef7-49f8-ac1d-745523d5963d",
          about: "Centre for Constitutional Law, Public Policy and Good Governance",
          authorLinks: [
            {
              img: authorFacebook,
              url: "no",
            },
            {
              img: authorInsta,
              url: "no",
            },
            {
              img: authorLinkedin,
              url: "no",
            },
            {
              img: authorTwitter,
              url: "no",
            },
          ]
        },
        {
          position: "CLIC Core Team Member",
          name: "Ms. Ishika Garg",
          job: "Student at NALSAR",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image1157781?alt=media&token=e85f9afe-e9a8-4cf4-95ca-35941d24011a",
          about: "Student at NALSAR",
          authorLinks: [
            {
              img: authorFacebook,
              url: "no",
            },
            {
              img: authorInsta,
              url: "https://www.instagram.com/ish_ika_",
            },
            {
              img: authorLinkedin,
              url: "https://www.linkedin.com/in/ishikagarg12",
            },
            {
              img: authorTwitter,
              url: "no",
            },
          ]
        },
        {
          position: "CLIC Advisory Board Member",
          name: "Ms. Malavika Prasad",
          job: "",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image1685550?alt=media&token=c1608bfb-8ba0-4067-bef8-929b4a647176",
          about: "",
          authorLinks: [
           
          ]
        },
        {
          position: "CLIC Advisory Board Member",
          name: "Prof. (Dr.) Rangin Tripathy",
          job: "",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image9867843?alt=media&token=2eb4146c-f085-4479-aedb-4702c947bd03",
          about: "",
          authorLinks: [
          ]
        },
        {
          position: "CLIC Advisory Board Member",
          name: "AOR K Parameshwar",
          job: "",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image4715746?alt=media&token=ef71ea45-70c8-436f-86e6-068fe73c7608",
          about: "",
          authorLinks: [
            
          ]
        },
        {
          position: "CLIC Advisory Board Member",
          name: "Prof. (Dr.) Anup Surendranath",
          job: "",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image7616815?alt=media&token=3f29bad4-1eb2-4acd-a46f-620450341042",
          about: "",
          authorLinks: [
          ]
        },
        {
          position: "CLIC Advisory Board Member",
          name: "Prof. (Dr.) Bipin Adhikari",
          job: "",
          img: "https://firebasestorage.googleapis.com/v0/b/test-a07c4.appspot.com/o/images%2Fauthor-image7026570?alt=media&token=1d36bedb-6c83-481c-9dfc-d1df6b4a0a2f",
          about: "",
          authorLinks: [
           
          ]
        },
       
      ];
  return (
    <div>
    <Navbar />
    <div className="about-btm">
          <h1 className="about-heading mt-10">Core Team</h1>
          <div className="about-flex">
            {people.map((peop) => {
              return <EditBoardCard data={peop} />;
            })}
          </div>
        </div>
        <Footer />
    </div>
  )
}

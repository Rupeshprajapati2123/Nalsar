import React, { useEffect, useState } from "react";
import Navigation from "./AdminNav/Navigation";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebaseconfig";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { onAuthStateChanged } from "firebase/auth";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const postCollectionRef = collection(db, "Articles");
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    const data = await getDocs(
      query(postCollectionRef, where("link", "==", `${id}`))
    );
    setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    
    setIsLoading(false);
  };
  const updateTitle = async (id, title) => {
    const userDoc = doc(db, "Articles", id);
    const newfield = { title: title };
    await updateDoc(userDoc, newfield);
    window.location.reload();
  };
  const navigate = useNavigate();
  const listen = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("ok");
    } else {
      navigate("/");
    }
  });
  // const updateTags=async(id,a)
  useEffect(() => {
    listen();
    getPost();
    if (post) {

    } else {

    }
  }, []);
  return (
    <div>
      <Navigation />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex pt-[5rem] container px-2">
          {post &&
            post.map((data) => {
              return (
                <div className="flex flex-col w-full">
                  {data.comments &&
                    data.comments.map((comment) => {
                      return (
                        <div className="flex flex-col w-full">
                          <div>{comment.name}</div>
                          <div>{comment.data}</div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Post;

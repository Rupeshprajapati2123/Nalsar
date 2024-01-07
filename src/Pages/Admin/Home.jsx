import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseconfig";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Navigation from "./AdminNav/Navigation";
import { auth } from "../../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
const AdminHome = () => {
  const [posts, setPosts] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [saarc,setSaarc]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const postCollectionRef = collection(db, "Articles");
  const saarcCollectionRef = collection(db, "Saarc");
  const podcastCollectionRef = collection(db, "conversations");
  const getPost = async () => {
    const data = await getDocs(query(postCollectionRef));
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };
  const getSaarc = async () => {
    const data = await getDocs(query(saarcCollectionRef));
    setSaarc(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };
  const getPodcast = async () => {
    const data = await getDocs(query(podcastCollectionRef));
    setPodcasts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };
  const navigate = useNavigate();
  const deletePost = (id) => {
    const docRef = doc(db, "Articles", id);
    deleteDoc(docRef)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteSaarc = (id) => {
    const docRef = doc(db, "Saarc", id);
    deleteDoc(docRef)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deletePodcast = (id) => {
    const docRef = doc(db, "conversations", id);
    deleteDoc(docRef)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        getPost();
        getPodcast();
        getSaarc();
      } else {
        navigate("/");
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <div>
      <Navigation />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex w-full align-center justify-center py-20">
          <div className="flex-row flex-wrap container align-center justify-center mt-10 gap-8 w-[80rem] md:w-[50rem] lg:w-[80rem]">
            <div>
              <p className="page-title">posts</p>
            </div>
            <div className="flex flex-row gap-8 w-full">
              {posts &&
                posts.map((post) => {
                  return (
                    <div className="" key={post.id}>
                      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                          className="rounded-t-lg thumbnail-image"
                          src={post.img}
                          alt={post.title}
                        />
                        <div className="p-5">
                          <h5 className="text-gray-900 title font-bold text-2xl tracking-tight mb-2">
                            {post.title}
                          </h5>
                          <div className="font-normal text-gray-700 mb-3 content">
                            {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
                          </div>
                          {post.writers.map((writer, id) => {
                            <div
                              className="mt-4 flex items-center gap-3 profile-image"
                              key={id}
                            >
                              {" "}
                              <p className="font-semibold">{writer}</p>
                            </div>;
                          })}
                          <div className="adminNav-controls">
                            {/* <Link to={`/post/${post.link}`}>
                            <button className="load-more-small" href="#">
                              Edit Blog
                            </button>
                          </Link> */}
                            <button
                              className="load-more-small"
                              onClick={() => deletePost(post.id)}
                            >
                              Delete Blog
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div>
              <p className="page-title">Saarc Articles</p>
            </div>
            <div className="flex flex-row gap-8 w-full">
              {saarc &&
                saarc.map((post) => {
                  return (
                    <div className="" key={post.id}>
                      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                          className="rounded-t-lg thumbnail-image"
                          src={post.img}
                          alt={post.title}
                        />
                        <div className="p-5">
                          <h5 className="text-gray-900 title font-bold text-2xl tracking-tight mb-2">
                            {post.title}
                          </h5>
                          <div className="font-normal text-gray-700 mb-3 content">
                            {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
                          </div>
                          {post.writers.map((writer, id) => {
                            <div
                              className="mt-4 flex items-center gap-3 profile-image"
                              key={id}
                            >
                              {" "}
                              <p className="font-semibold">{writer}</p>
                            </div>;
                          })}
                          <div className="adminNav-controls">
                            {/* <Link to={`/post/${post.link}`}>
                            <button className="load-more-small" href="#">
                              Edit Blog
                            </button>
                          </Link> */}
                            <button
                              className="load-more-small"
                              onClick={() => deleteSaarc(post.id)}
                            >
                              Delete Blog
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div>
              <p className="page-title">podcsts</p>
            </div>
            <div className="flex flex-row gap-8 w-full items-start justify-start">
              {podcasts &&
                podcasts.map((post) => {
                  // {
                  //   console.log(post.link);
                  // }
                  return (
                    <div className="max-w-lg mx-auto" key={post.id}>
                      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                          className="rounded-t-lg thumbnail-image"
                          src={post.img}
                          alt={post.title}
                        />
                        <div className="p-5">
                          <h5 className="text-gray-900 title font-bold text-2xl tracking-tight mb-2">
                            {post.title}
                          </h5>
                          <div className="font-normal text-gray-700 mb-3 content">
                            {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
                          </div>
                          {post.writers.map((writer, id) => {
                            <div
                              className="mt-4 flex items-center gap-3 profile-image"
                              key={id}
                            >
                              {" "}
                              <p className="font-semibold">{writer}</p>
                            </div>;
                          })}
                          <div className="adminNav-controls">
                            {/* <Link to={`/post/${post.link}`}>
                            <button className="load-more-small" href="#">
                              Edit Blog
                            </button>
                          </Link> */}
                            <button
                              className="load-more-small"
                              onClick={() => deletePodcast(post.id)}
                            >
                              Delete Podcast
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;

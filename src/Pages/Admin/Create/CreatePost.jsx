import React, { useEffect, useState } from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../../../firebaseconfig";
import { modules, formats } from "../quill";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import MoonLoader from "react-spinners/MoonLoader";
import { v4 as uuidv4 } from "uuid";
import "./create.css";
import { onAuthStateChanged } from "firebase/auth";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatePost = () => {
  const navigate = useNavigate();
  const [snackMsg, setSnackMsg] = useState("");

  const [snackSeverity, setSnackSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState([]);
  const [writers, setWriters] = useState([
    { name: "", authorImage: "", description: "", socialMediaLinks: [""] },
  ]);
  const [link, setLink] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [authorupload, setAuthorUpload] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [showUploadBtn, setShowUploadBtn] = useState(false);

  const scenesCollectionRef = collection(db, "Articles");
  const saarcCollectionRef = collection(db, "Saarc");

  const uniqueID = uuidv4();
  const handleLink = () => {
    const removeSpace = title.toLowerCase().replace(/ /g, "-");
    setLink(removeSpace);
  };
  //Feature Image upload
  const uploadImage = () => {
    if (featureImage === "") {
      return;
    } else {
      setUploading(true);

      handleUploadToStorage();
    }
  };
  const uploadauthorImage = (index) => {
    if (authorImage === "") { // Check if an author image is selected
      
      return;
    } else {
      setUploading(true);

      handleauthorUploadToStorage(index);
    }
  };
  const handleauthorUploadToStorage = async (index) => {
    const imageRef2 = ref(
      storage,
      `images/${`author-image` + Math.floor(Math.random() * 10000000)}`
    );

    const uploadTask = uploadBytesResumable(imageRef2, authorupload);
    try {
      await uploadBytes(imageRef2, authorupload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setSnackMsg("Image Uploaded Sucessfully!");
          setSnackSeverity("success");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        },
        (err) => {
          setSnackMsg(err.msg);
          setSnackSeverity("error");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setAuthorImage(url);
            handleChangeWriters(index, "authorImage", url);
            
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    setShowUploadBtn(false);
    setAuthorImage({ authorImage: null })

  };
  const handleUploadToStorage = async () => {
    const imageRef = ref(
      storage,
      `images/${`feature-image` + Math.floor(Math.random() * 10000000)}`
    );

    const uploadTask = uploadBytesResumable(imageRef, imageUpload);
    try {
      await uploadBytes(imageRef, imageUpload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          // console.log("Image Uploaded Sucessfully! ");
          setSnackMsg("Image Uploaded Sucessfully!");
          setSnackSeverity("success");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        },
        (err) => {
          setSnackMsg(err.msg);
          setSnackSeverity("error");
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFeatureImage(url);

          });
        }
      );
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    setShowUploadBtn(false);
  };

  const handleChangeTags = (index, event) => {
    const updatedTags = [...tags];
    updatedTags[index] = event.target.value;
    setTags(updatedTags);
  };
  const handleSubmitTags = (event) => {
    event.preventDefault();

  };
  const handleChangeWriters = (index, field, value) => {
    const updatedWriters = [...writers];
    updatedWriters[index][field] = value;
    setWriters(updatedWriters);
  };

  const addNewTag = () => {
    setTags([...tags, ""]);
  };
  const addNewWriter = () => {
    setWriters([
      ...writers,
      { name: "", authorImage: "", description: "", socialMediaLinks: [] },
    ]);
  };
  const addNewSocialMediaLink = (index) => {
    const updatedWriters = [...writers];
    updatedWriters[index].socialMediaLinks.push("");
    setWriters(updatedWriters);
  };

  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };
  const removeWriter = (index) => {
    const updatedWriters = [...writers];
    updatedWriters.splice(index, 1);
    setWriters(updatedWriters);
  };
  const handleSubmitWriters = (event) => {
    event.preventDefault();
  };
  const handlePublish = async () => {

    if (title === "") {
      // console.log("Title cant be empty");
      setSnackMsg("Title cant be empty");
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }
    if (featureImage === null) {
      // console.log("Please add a feature image");
      setSnackMsg("Please add a feature image");
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }

    setPublishing(true);
    try {
      await addDoc(scenesCollectionRef, {
        link: link + "-" + uniqueID,
        title,
        description: description,
        data: content,
        writers: writers,
        tags: tags,
        date: date,
        duration: duration,
        img: featureImage,
        createdAt: serverTimestamp(),
        comments: [],
      });
      setPublishing(false);
      setSnackMsg("Blog Published");
      setSnackSeverity("success");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate("/adminpage");
      }, 3000);
      // console.log("Blog Published");
    } catch (error) {
      console.log(error);

      setSnackMsg(error.msg);
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  const handlesaarcPublish = async () => {

    if (title === "") {
      // console.log("Title cant be empty");
      setSnackMsg("Title cant be empty");
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }
    if (featureImage === null) {
      // console.log("Please add a feature image");
      setSnackMsg("Please add a feature image");
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return;
    }

    setPublishing(true);
    try {
      await addDoc(saarcCollectionRef, {
        link: link + "-" + uniqueID,
        title,
        description: description,
        data: content,
        writers: writers,
        tags: tags,
        date: date,
        duration: duration,
        img: featureImage,
        createdAt: serverTimestamp(),
        comments: [],
      });
      setPublishing(false);
      setSnackMsg("Blog Published");
      setSnackSeverity("success");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate("/adminpage");
      }, 3000);
      // console.log("Blog Published");
    } catch (error) {
      console.log(error);

      setSnackMsg(error.msg);
      setSnackSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  const listen = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("ok");
    } else {
      navigate("/");
    }
  });
  useEffect(() => {
    listen();
    handleLink();
  });
  return (
    <div>
      <div className="create-page">
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert severity={snackSeverity} sx={{ width: "100%" }}>
            {snackMsg}
          </Alert>
        </Snackbar>
        <div className="create-input-flex">
          <div className="create-label">Title</div>
          <input
            placeholder="Title of the post"
            className="create-input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="create-input-flex">
          <h3 className="create-label">Feature Image</h3>
          <div className="sidebar w-full flex flex-col align-start gap-6">
            <h3 className="font-semibold text-2xl">Upload feature image</h3>
            <label htmlFor="inputTag" className="upload-btn">
              Select Image
              <input
                id="inputTag"
                type="file"
                onChange={(event) => {
                  setShowUploadBtn(true);
                  setImageUpload(event.target.files[0]);
                }}
              />
            </label>

            {showUploadBtn ? (
              <button
                className="text-white w-[5rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                onClick={uploadImage}
              >
                Upload
              </button>
            ) : null}
            {uploading ? (
              <MoonLoader />
            ) : (
              <img
                className="imageupload"
                src={featureImage}
                alt="Image not uploaded"
              />
            )}
          </div>
        </div>
        <div className="create-input-flex">
          <div className="create-label">Article</div>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={setContent}
          />
        </div>
        <div className="create-input-flex">
          <div className="create-label">Description </div>
          <input
            placeholder="Description"
            className="create-input-small"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="create-input-flex">
          <div className="create-label">Date</div>
          <input
            placeholder="Date of the publishing"
            className="create-input-small"
            type="text"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="create-input-flex">
          <div className="create-label">Duration</div>
          <input
            placeholder="Duration of article(in mins)"
            className="create-input-small"
            type="number"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="create-input-flex">
          <div className="create-label">Tags</div>
          {tags.map((tag, index) => (
            <div key={index} className="create-tag-input-flex">
              <input
                className="create-input-small"
                type="text"
                value={tag}
                onChange={(e) => handleChangeTags(index, e)}
              />
              <button
                type="button"
                className="load-more"
                onClick={() => removeTag(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="create-tag-input-flex">
            <button type="button" className="load-more" onClick={addNewTag}>
              Add New Tag
            </button>
            <button onClick={handleSubmitTags} className="load-more">
              Submit
            </button>
          </div>
        </div>
        <div className="create-input-flex">
          <div className="create-label">Writers</div>
          {writers.map((writer, index) => (
            <div key={index} className="create-tag-input-flex">
              <input
                className="create-input-small"
                type="text"
                placeholder="Name"
                value={writer.name}
                onChange={(e) =>
                  handleChangeWriters(index, "name", e.target.value)
                }
              />
              <div className="create-input-flex">
                <h3 className="create-label">Author Image</h3>
                <div className="sidebar w-full flex flex-col align-start gap-6">
                  <h3 className="font-semibold text-2xl">Upload Author image</h3>
                  <label htmlFor="inputTag" className="load-more">
                    
                    <input
                      id="inputTag2"
                      type="file"
                      onChange={(event) => {
                        setShowUploadBtn(true);
                        setAuthorUpload(event.target.files[0]); // Set the selected author image file
                      }}
                    />
                  </label>

                  {showUploadBtn ? (
                    <button
                      className="text-white w-[5rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      onClick={()=>uploadauthorImage(index)}
                    >
                      Upload
                    </button>
                  ) : null}
                  {uploading ? (
                    <MoonLoader />
                  ) : (
                    <img
                      className="imageupload"
                      src={writers[index].authorImage}
                      alt="Image not uploaded"
                    />
                  )}
                </div>
              </div>
              <textarea
                className="create-input-small"
                placeholder="Description"
                value={writer.description}
                onChange={(e) =>
                  handleChangeWriters(index, "description", e.target.value)
                }
              />
              <input
                className="create-input-small"
                type="text"
                placeholder="Instagram"
                value={writer.socialMediaLinks[0] || ""}
                onChange={(e) =>
                  handleChangeWriters(index, "socialMediaLinks", [
                    e.target.value,
                    writer.socialMediaLinks[1],
                    writer.socialMediaLinks[2],
                    writer.socialMediaLinks[3],
                  ])
                }
              />
              <input
                className="create-input-small"
                type="text"
                placeholder="Twitter"
                value={writer.socialMediaLinks[1] || ""}
                onChange={(e) =>
                  handleChangeWriters(index, "socialMediaLinks", [
                    writer.socialMediaLinks[0],
                    e.target.value,
                    writer.socialMediaLinks[2],
                    writer.socialMediaLinks[3],
                  ])
                }
              />
              <input
                className="create-input-small"
                type="text"
                placeholder="Facebook"
                value={writer.socialMediaLinks[2] || ""}
                onChange={(e) =>
                  handleChangeWriters(index, "socialMediaLinks", [
                    writer.socialMediaLinks[0],
                    writer.socialMediaLinks[1],
                    e.target.value,
                    writer.socialMediaLinks[3],
                  ])
                }
              />
              <input
                className="create-input-small"
                type="text"
                placeholder="Medium"
                value={writer.socialMediaLinks[3] || ""}
                onChange={(e) =>
                  handleChangeWriters(index, "socialMediaLinks", [
                    writer.socialMediaLinks[0],
                    writer.socialMediaLinks[1],
                    writer.socialMediaLinks[2],
                    e.target.value,
                  ])
                }
              />
              <button
                type="button"
                className="load-more"
                onClick={() => removeWriter(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="create-tag-input-flex">
            <button type="button" className="load-more" onClick={addNewWriter}>
              Add Writer
            </button>
            <button onClick={handleSubmitWriters} className="load-more">
              Submit
            </button>
          </div>
        </div>
        <div className="flex ">

        <button className="load-more mr-10" onClick={handlePublish}>
          {!publishing ? "Publish Article Blog" : "Publishing..."}
        </button>
        <button className="load-more" onClick={handlesaarcPublish}>
          {!publishing ? "Publish Saarc Blog" : "Publishing..."}
        </button>
        </div>
        {publishing ? <MoonLoader /> : null}
      </div>
    </div>
  );
};

export default CreatePost;

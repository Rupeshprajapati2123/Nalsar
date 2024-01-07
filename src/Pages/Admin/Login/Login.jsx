import React, { useState } from "react";
import "./login.css";
import { auth, provider } from "../../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = ({ setIsAuth }) => {
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log("userCredential signnnned innn");
        setSnackMsg("Successfully Logged In");
        setSnackSeverity("success");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          navigate("/adminpage");
        }, 3000);
      })
      .catch((error) => {
        setSnackMsg(error.message);
        setSnackSeverity("error");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
        // console.log(error);
      });
  };

  return (
    <div className="login">
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity={snackSeverity} sx={{ width: "100%" }}>
          {snackMsg}
        </Alert>
      </Snackbar>
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>
        <img
          src="https://img.freepik.com/premium-vector/modern-promotion-strategy-keywords-research-online-advertising-business-seo-optimization_566886-3851.jpg"
          alt="Login"
          className="login-top-img"
        />
        <input
          id="email"
          label="Enter the Email"
          variant="outlined"
          className="login-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          label="Enter the Password"
          variant="outlined"
          type="password"
          placeholder="password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="load-more-full" onClick={signIn}>
          Log In
        </div>
      </div>
    </div>
  );
};
export default Login;

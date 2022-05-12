/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google-logo.png";
import "./Login.css";

const Login = () => {
  // const [data] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passHandler = (event) => {
    setPassword(event.target.value);
  };

  const from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/userToken", {
      email: email,
    });
    // console.log(data);
    localStorage.setItem("storageAccessToken", data.userAccessToken);
  };
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((data) => {
      navigate(from, { replace: true });
    });
  };

  const notify = () => toast.error(error?.message);

  useEffect(() => {
    if (error) {
      notify();
    }
    if (user?.user?.accessToken) {
      navigate(from);
    }
  }, [error, user]);

  return (
    <div className="form-container">
      <div className="section-title">
        <h2>Please login now</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email :
          </label>
          <input
            type="email"
            onBlur={emailHandler}
            className="form-control"
            id="name"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Password :
          </label>
          <input
            type="password"
            onBlur={passHandler}
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <h6 style={{ color: "red" }}>{error?.message}</h6>

        <input
          type="submit"
          disabled={loading}
          className="btn"
          value={loading ? "Loading..." : "Login"}
        />
      </form>
      <p>
        <Link to={"/sendPasswordReset"}>Forgotten password?</Link>
      </p>
      <p>
        If new user ? <Link to="/registration">Registration</Link>
      </p>
      <button className="btn signIn" onClick={handleGoogleSignIn}>
        <img src={google} alt="" /> Sign In with Google
      </button>
      {/* <span>Or</span> */}
      {/* <button className="btn signIn" onClick={handleGoogleSignIn}>
        <img src={facebook} alt="" /> Sign In with Facebook
      </button> */}
    </div>
  );
};

export default Login;

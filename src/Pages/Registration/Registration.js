/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const passHandler = (event) => {
    setPassword(event.target.value);
  };
  const ConPasswordHandler = (event) => {
    setConPassword(event.target.value);
  };
  const notify = () => toast.error(error?.message);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (password !== conPassword) {
      setCustomError("Your two password did not match");
      return;
    }
    if (password.length < 6) {
      setCustomError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification(email);
  };

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
      <h1>Please Registration now</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email :
          </label>
          <input
            type="email"
            onBlur={emailHandler}
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
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
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Your Confirm Password :
          </label>
          <input
            type="password"
            onBlur={ConPasswordHandler}
            className="form-control"
            id="cPassword"
            placeholder="Confirm password"
          />
        </div>
        <h6 style={{ color: "red" }}>{error?.message || customError}</h6>
        <input
          type="submit"
          disabled={loading}
          className="btn"
          value={loading ? "Loading..." : "Create an account"}
        />
      </form>

      <p>
        Already Have an account ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Registration;

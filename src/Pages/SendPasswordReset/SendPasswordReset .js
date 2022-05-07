/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const SendPasswordReset = () => {
  const [email, setEmail] = useState("");
  const notify = () => toast.error(error?.message);

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(email);
    toast.success("Sent Email");
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        notify();
      }, 3000);
    }
  }, [error]);

  return (
    <div className="container my-5 row mx-auto">
      <form onSubmit={handleFormSubmit} className="offset-xl-4 col-xl-4">
        <label htmlFor="email" className="form-label">
          Your Email :
        </label>
        <input
          type="email"
          onBlur={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="form-control mb-2"
          id="email"
          required
        />

        <input
          type="submit"
          disabled={sending}
          className="btn"
          value={sending ? "Sending..." : "Reset password"}
        />
      </form>
    </div>
  );
};
export default SendPasswordReset;

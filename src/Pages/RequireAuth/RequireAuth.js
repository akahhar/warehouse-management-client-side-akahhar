import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, myError: error] =
    useSendEmailVerification(auth);
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center py-5">
        <h2 className="text-danger mb-3">Your Email is not verified!!</h2>
        <h3 className="text-success mb-3"> Please Verify your email address</h3>
        <h4>Your email address : {user.email}</h4>
        <button
          className="btn"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent Email");
          }}
        >
          Send Verification Email Again
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;

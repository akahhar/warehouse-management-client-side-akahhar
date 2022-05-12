import axios from "axios";
import { useEffect, useState } from "react";

export default function useToken(user) {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://morning-atoll-43412.herokuapp.com/userToken",
          {
            email: email,
          }
        );
        setToken(data.userAccessToken);
        localStorage.setItem("storageAccessToken", data.userAccessToken);
      }
    };
    getToken();
  }, [user]);

  return [token];
}

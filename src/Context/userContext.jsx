import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("pintrigue_token"));
  const [authed, setAuthed] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // token management
  useEffect(() => {
    const fetchToken = async () => {
      const requestOptions = {
        headers: {
          "Context-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get(
        "http://localhost:8000/api/auth/me",
        requestOptions
      );

      if (!response.ok) {
        setToken(null);
        setAuthed(false);
      }

      localStorage.setItem("pintrigue_token", token);
      setAuthed(true);
    };
    fetchToken();
  }, [token]);

  // get current user
  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        headers: {
          "Context-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      await axios
        .get("http://localhost:8000/api/auth/me", requestOptions)
        .then((res) => setCurrentUser(res.data));
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={[token, setToken, authed, setAuthed, currentUser, setCurrentUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

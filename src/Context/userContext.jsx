import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setToken } from "../slices/tokenSlice";
import { setAuthed } from "../slices/authedSlice";
import { setUser } from "../slices/userSlice";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  console.log("Token ", token);

  // token management
  useEffect(() => {
    const fetchToken = async () => {
      console.log("fetching token");

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

      console.log("token response", response);

      if (!response.ok) {
        dispatch(setToken(null));
        dispatch(setAuthed(false));
      }

      localStorage.setItem("pintrigue_token", token);
      setAuthed(true);
    };
    fetchToken();
  }, [token]);

  // get current user
  useEffect(() => {
    const fetchUser = async () => {
      console.log("fetching user");

      const requestOptions = {
        headers: {
          "Context-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      await axios
        .get("http://localhost:8000/api/auth/me", requestOptions)
        .then((res) => dispatch(setUser(res.data)));
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[]}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;

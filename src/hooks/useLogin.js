import { useEffect, useContext } from "react";
import axios from "axios";

// context
import { UserContext } from "./../Context/userContext";

const useLogin = (props) => {
  const [, setToken] = useContext(UserContext);
  const [, setAuthed] = useContext(UserContext);

  console.log("Credentials received: ", props.username, props.password);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      const formData = new FormData();
      formData.append("username", props.username);
      formData.append("password", props.password);

      axios
        .post("http://localhost:8000/api/auth/login/access-token", formData)
        .then((res) => res.data)
        .then((data) => setToken(data.access_token));

      setAuthed(true);
    }

    return () => {
      APICall = false;
    };
  }, [setAuthed, setToken, props.username, props.password]);
};

export default useLogin;

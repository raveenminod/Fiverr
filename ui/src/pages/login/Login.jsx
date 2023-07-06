import React, { useState } from "react";
import "./login.scss";
import createRequest from "../../utils/newRequest.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createRequest.post("auth/login", {username, password});
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="raveenminod"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;

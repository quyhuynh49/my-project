import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { setupUser, isLoading, errorText, user } = useAppContext();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setupUser({ currentUser: formData, endPoint: "login" });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {errorText ?? <div>{errorText}</div>}
      <h1>Log in</h1>
      <p>It's quick and easy.</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            placeholder="enter email"
            value={formData?.email || ""}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="password"
            id="password"
            placeholder="enter password"
            value={formData?.password || ""}
          />
        </p>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;

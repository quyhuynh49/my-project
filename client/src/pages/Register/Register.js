import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

function Register() {
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
    setupUser({ currentUser: formData, endPoint: "register" });
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
      <h1>Register</h1>
      <p>It's quick and easy.</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            value={formData?.name || ""}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
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
            id="password"
            name="password"
            placeholder="enter password"
            value={formData?.password || ""}
          />
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;

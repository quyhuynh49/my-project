import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";

function Register() {
  const [formData, setFormData] = useState({});
  const { setupUser, isLoading } = useAppContext();

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
  console.log(isLoading);
  return (
    <div>
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
          />
        </p>
        <button type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;

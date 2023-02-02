import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./registration.css";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://3.138.186.88";
const registerUser = async (formData) => {
  try {
    const user = await fetch(`${BASE_URL}/register`, {
      method: "post",
      body: formData,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = (e) => {
    e.preventDefault();
    console.log(userDetails);
    const { firstname, lastname, password, email, username } = userDetails;
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("passwd", password);
    formData.append("username", username);
    registerUser(formData)
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        console.log(d, "userdetails");
        navigate("/user", { state: { userDetails: d } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="registration">
      <Form className="registration-form">
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={userDetails.firstname}
            name="firstname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={userDetails.lastname}
            name="lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={userDetails.username}
            name="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="joe@gmail.com"
            onChange={handleChange}
            value={userDetails.email}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={userDetails.password}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onClick}>
          Register
        </Button>
        <Link to="/" className="login-link">
          <span>Already have an account?</span>
        </Link>
      </Form>
    </div>
  );
};

export default Registration;

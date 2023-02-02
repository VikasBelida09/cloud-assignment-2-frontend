import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = "http://3.138.186.88";
const loginUser = async (formData) => {
  try {
    const user = await fetch(`${BASE_URL}/login`, {
      method: "post",
      body: formData,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
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
    const { password, username } = userDetails;
    const formData = new FormData();
    formData.append("passwd", password);
    formData.append("username", username);
    loginUser(formData)
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
    <div className="login">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={userDetails.username}
            name="username"
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
          Login
        </Button>
        <Link to="/register" className="register-link">
          <span>create account</span>
        </Link>
      </Form>
    </div>
  );
};
export default Login;

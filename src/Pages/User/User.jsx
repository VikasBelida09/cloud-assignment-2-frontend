import React from "react";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./user.css";
const BASE_URL = "http://3.138.186.88";
const User = () => {
  const location = useLocation();
  const { firstname, lastname, email, filename, count } =
    location.state?.userDetails;
  const onDownload = async () => {
    try {
      console.log('here')
      const file = await fetch(`${BASE_URL}/download`, {
        method: "POST",
        body: JSON.stringify({
          filename: filename,
        }),
      });
      const blob = await file.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="user-details">
      <h2>User Details</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>firstname:</td>
            <td>{firstname}</td>
          </tr>
          <tr>
            <td>lastname:</td>
            <td>{lastname}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Your uploaded file name is <b>{filename}</b> and it has <b>{count} </b>{" "}
        words
      </p>
      <Button variant="primary" type="submit" onClick={onDownload}>
        Download
      </Button>
    </div>
  );
};

export default User;

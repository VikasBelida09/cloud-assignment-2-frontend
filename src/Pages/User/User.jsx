import React from 'react'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';
import './user.css'
const User = () => {
  const location=useLocation();
  const {firstname,lastname,email}=location.state?.userDetails;
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
    </div>
  )
}

export default User

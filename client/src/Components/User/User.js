import React from "react";
import { Link } from "react-router-dom";

function User(props) {
  const { _id, name, gmail, age, address } = props.user;
  return (
    <div>
      <h1>User Display</h1>
      <h2>ID : {_id} </h2>
      <h2>Name : {name} </h2>
      <h2>Gmail : {gmail}</h2>
      <h2>Age : {age} </h2>
      <h2>Address : {address} </h2>
      <Link to={`/user-details/${_id}`}>
        <button>Update</button>
      </Link>
      <button>Delete</button>
      <br />
      <br />
    </div>
  );
}

export default User;

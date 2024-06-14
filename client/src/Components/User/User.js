import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function User(props) {
  const { _id, name, gmail, age, address } = props.user;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/user-details"));
  };

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
      <button onClick={deleteHandler}>Delete</button>
      <br />
    </div>
  );
}

export default User;

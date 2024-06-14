import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  //   Fetch deta from DB to frontend
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  //   Send request - Updated details from the DB
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: Number(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/user-details"));
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        ></input>
        <br />
        <br />
        <label>Gmail</label>
        <br />
        <input
          type="text"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        ></input>
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={inputs.age}
          required
        ></input>
        <br />
        <br />
        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;

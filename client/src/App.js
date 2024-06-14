import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/Add User/AddUser";
import Users from "./Components/User Details/Users";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/mainhome" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-details" element={<Users />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

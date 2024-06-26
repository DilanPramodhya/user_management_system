import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentRef.current,
    DocumentTitle: "Users Report",
    onafterprint: () => alert("Users Report has Successfully Downloaded !"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  // Search function
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  // Function for send whatsApp message
  const handleSendReport = () => {
    // Create the whatsApp chat URL
    const phoneNumber = "+94712364352";
    const message = `selected User Reports`;
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open the whats app chat in new window
    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Users Details"
      ></input>
      <button onClick={handleSearch}>Search</button>

      {noResults ? (
        <div>
          <p>No users founded</p>
        </div>
      ) : (
        <div ref={ComponentRef}>
          {users &&
            users.map((user, i) => (
              <div key={i}>
                <User user={user} />
              </div>
            ))}
        </div>
      )}
      <button onClick={handlePrint}>Download Report</button>
      <br />
      <button onClick={handleSendReport}>Send WhatsApp Message</button>
    </div>
  );
}

export default Users;

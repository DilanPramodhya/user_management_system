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

  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
      <div ref={ComponentRef}>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default Users;

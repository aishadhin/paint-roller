import React, { useEffect, useState } from "react";
import AdminTable from "./AdminTable";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://lit-sands-52499.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  return (
    <div>
      <h2>All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => <AdminTable key={user._id} user={user}></AdminTable>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

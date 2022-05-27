import React from "react";

const AdminTable = ({ user }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://lit-sands-52499.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <tr>
      <td>{email}</td>
      <td>
        {role!== 'admin' &&
          <button onClick={makeAdmin} class="btn btn-primary text-white btn-xs">
            Make Admin
          </button>
        }
      </td>
      <td>
        <button class="btn btn-primary text-white btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default AdminTable;

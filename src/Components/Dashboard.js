import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "./Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile px-12">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
          <h2>Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">my Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">Add a review</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
          <li>
            {admin && <>
              <Link to="/dashboard/allusers">All Users</Link>
              <Link to="/dashboard/addnewproduct">Add New Product</Link>
            </>  }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

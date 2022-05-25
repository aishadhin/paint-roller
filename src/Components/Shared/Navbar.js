import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/ai2.png";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div class="navbar bg-tertiary justify-between">
      <div class="flex justify-between w-full">
        <img src={logo} className="w-[50px]" alt="" />

        <div class="dropdown ml-5">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class=" text-primary menu menu-compact dropdown-content ml-[-155px] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="">Item 1</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="text-primary menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/addreview">Add Review</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            {user ? (
              <button onClick={logout} className="">
                SignOut <span>{user.displayName}</span>
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-start">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
    </div>
  );
};

export default Navbar;

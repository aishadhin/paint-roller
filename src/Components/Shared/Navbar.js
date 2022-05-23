import React from "react";

const Navbar = () => {
  return (
    <div class="navbar justify-between" style={{backgroundImage: 'linear-gradient(to right, #00D29F, #0E83CC, #6A469B, #C40B6C, #D49A12)'}}>
      <div class="flex justify-between w-full">
        <a class="btn btn-ghost normal-case text-xl mr-5 text-white">
          Ai Paint Roller
        </a>

        <div class="dropdown ml-5">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
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
            tabindex="0"
            class="menu menu-compact dropdown-content ml-[-155px] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="text-white menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
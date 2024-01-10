import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <hr />
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/users">Users</Link>
        </span>
      </div>
      <hr />
    </>
  );
};

export default NavBar;

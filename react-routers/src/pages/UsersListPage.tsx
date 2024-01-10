import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import usersData from "../examples/usersData";

const UsersListPage = () => {
  const [users, setUsers] = useState(usersData);
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <>
      <h1>UsersPage</h1>
      <NavBar />
      <ul className="list-group">
        {users.map((u) => (
          <li className="list-group-item">
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <button className="btn btn-success" onClick={handleClick}>
        Go Home!
      </button>
    </>
  );
};

export default UsersListPage;

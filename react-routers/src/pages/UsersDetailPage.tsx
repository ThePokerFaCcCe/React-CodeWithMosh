import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import usersData from "../examples/usersData";


const UsersDetailPage = () => {
  const [user, setUser] = useState({ id: 0, name: "" });

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id ?? "-1";

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    setUser(usersData.filter((u) => u.id == parseInt(id))[0]);
  }, []);

  const handleClick = () => navigate("/users");

  return (
    <>
      <h1>User Detail Page</h1>
      <NavBar />
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <hr />
      <button className="btn btn-success" onClick={handleClick}>
        Go Back To Users!
      </button>
    </>
  );
};

export default UsersDetailPage;

import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function NavUser() {
  let navigate = useNavigate();
  const handleClick = (e) =>{
    // e.preventDefault();
    navigate('/login');
  }
  return (
    <div className="container">
      <nav>
        <Link to="">Home</Link> | <a onClick={handleClick} href='#' style={{textDecoration: 'underline'}}>Logout</a>
      </nav>
      <Outlet />
    </div>
  );
}

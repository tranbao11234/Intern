import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavUser({logout, user}) {
  // let navigate = useNavigate();
  const handleClick = (e) =>{
    // e.preventDefault();
    logout();
    // navigate('/login');
  }
  return (
    <div className="container">
      <nav>
        <Link to="">Home</Link> | <a onClick={handleClick} href='#' style={{textDecoration: 'underline'}}>Logout</a>
      </nav>
      <h2>Hello {user.username}!!!</h2>
      <Outlet />
    </div>
  );
}

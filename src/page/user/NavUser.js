import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { delete_user } from "../../action/userAction";

export default function NavUser() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () =>{
    localStorage.removeItem('user');
    dispatch(delete_user());
    navigate('/login');
  };

  return (
    <div className="App-header">
      <nav>
        <Link to="/user">Home</Link> | <span>Hello, <i>{user.username}</i>!! | Email: <i>{user.email}</i></span>
        <button onClick={handleLogout} style={{textDecoration: 'underline', float: 'right'}}>Logout</button>
      </nav>
    </div>
  );
}

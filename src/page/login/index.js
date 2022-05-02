import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_user } from "../../action/userAction";
import { getUserByUnPw, getUserByUserName } from "../../constants/ListUser";
import "./Login.css";

export default function Login() {
  const [formState, setFormState] = useState({});
  let navigate = useNavigate();
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getUserByUnPw(formState.username, formState.password) !== undefined){
          // navigate('/user');
          const {email, fullname, role, username} = getUserByUserName(formState.username);
          const user = {
            email,
            fullname,
            username,
            role
          }
          localStorage.setItem('user',JSON.stringify(user));
          dispatch(add_user(user));
          navigate('/user');
        }
        else
            alert('The username or password is incorrect');
    };

    const handleChangeInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setFormState({...formState, [key]: value});
    };

    return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="username" onChange={handleChangeInput} required/>

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChangeInput} required/>

          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

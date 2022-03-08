import React, {useState} from "react";
// import { useNavigate } from 'react-router-dom';
import { getUserByUnPw } from "./ListUser";
import "./Login.css";

export default function Login({authenticate}) {
    // let navigate = useNavigate();
    const [formState, setFormState] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // const isSuccess = listUser.some(user =>{
        //     return user.username === formState.username && user.password === formState.password;
        // })
        if (getUserByUnPw(formState.username,formState.password) !== undefined)
            // navigate('/user');
            authenticate(formState);
        else
            alert('The username or password is incorrect');
    };

    const handleChangeInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setFormState({...formState, [key]: value});
    }
    return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div class="container">
          <label for="username">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="username" onChange={handleChangeInput} required/>

          <label for="password">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChangeInput} required/>

          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

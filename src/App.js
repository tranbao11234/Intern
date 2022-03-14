import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import NavUser from "./page/NavUser";
import User from "./page/index";
// import UserForm from "./page/UserForm";
import Login from "./page/Login";
// import AuthExample from "./example/AuthExample";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const us = localStorage.getItem("user");
    us && JSON.parse(us).isLoggedIn
      ? setUser({ ...user, isLoggedIn: true })
      : setUser({ ...user, isLoggedIn: false });
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Link to="login">Login</Link>} />
        {/* <Route path="user" element={<NavUser />} >
          <Route index element={<User/>}/>
          <Route path="add" /> 
          <Route path="edit/:id" />
        </Route>
        <Route path="login" element={<Login />} /> */}
        {!user.isLoggedIn && (
          <Route
            path="login"
            element={
              <Login
                authenticate={(item) => setUser({ ...item, isLoggedIn: true })}
              />
            }
          />
        )}
        {user.isLoggedIn && (
          <>
            <Route
              path="user"
              element={
                <NavUser
                  logout={() => setUser({ ...user, isLoggedIn: false })}
                  user={user}
                />
              }
            >
              <Route index element={<User user={user} />} />
              <Route path="add" />
              <Route path="edit/:id" />
            </Route>
            {/* <Route path='/dashboard' element ={<Dashboard/>}/> */}
          </>
        )}
        <Route path='*' element={<Navigate to = {user.isLoggedIn ? '/user' : '/login'} />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

function Layout() {
  return (
    <div className="container">
      <h1>Welcome to the Bao Nho Vlog!</h1>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavUser from './page/NavUser';
import User from "./page/index";
// import UserForm from "./page/UserForm";
import Login from "./page/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Link to='login'>Login</Link>
        }/>
        <Route path="user" element={<NavUser />} >
          <Route index element={<User/>}/>
          <Route path="add" /> 
          <Route path="edit/:id" />
        </Route>
        <Route path="login" element={<Login />} />
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

import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavUser from "./page/user/NavUser";
import User from "./page/user";
import Login from "./page/login";
import "./App.css";
import { useSelector } from "react-redux";
import UserForm from "./page/user/UserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user" element={<User />} />
        <Route path="user/create" element={<UserForm />} />
        <Route path="edit/:id" element={<UserForm />} />
      </Route>
      <Route path="/login" element={<Login />} />
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
  const user = useSelector((state) => state.user);

  if (user.username === "") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h1>Welcome to the Bao Nho Vlog!</h1>
      <div className="content">
        <NavUser />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

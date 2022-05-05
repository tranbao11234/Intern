import React, { useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import NavUser from "./page/user/NavUser";
import User from "./page/user";
import Login from "./page/login";
import { useSelector } from "react-redux";
import UserForm from "./page/user/UserForm";
// import Form from "./page/user/form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="test" element={<Form />}/> */}
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
  const navigate = useNavigate();
  console.log('ngoai layout', user);
  
  useEffect(()=>{
    if (user.username === "") {
      console.log('Layout user', user);
      navigate("/login", {replace: true})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])

  return (
    <div className="container pt-0 bg-white">
      <NavUser />
      <Outlet />
    </div>
  );
}

export default App;

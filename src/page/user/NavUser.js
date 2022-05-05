import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delete_user } from "../../action/userAction";

export default function NavUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(delete_user());
    // console.log('user nav', user);
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container py-2 px-4 flex flex-wrap text-white items-center justify-between mx-auto font-semibold">
        <Link to={"/user"} className="flex items-center hover:text-gray-600">
          <span className="self-center text-xl whitespace-nowrap dark:text-white">
            Home
          </span>
        </Link>
        <div className="w-full md:w-auto flex justify-center items-center space-x-2">
          <div>
            <p className="font-bold text-lg">{user.fullname}</p>
            <p className="text-sm">{user.email}</p>
          </div>
          <button
            type="button"
            className="md:text-xl md:font-medium block py-2 md:border-l md:border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-600 md:pl-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

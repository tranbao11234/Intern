import { LockClosedIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_user } from "../../action/userAction";
import Modal from "../../components/modal";
import { getUserByUnPw, getUserByUserName } from "../../constants/ListUser";

export default function Login() {
  const [formState, setFormState] = useState({});
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('user redux', user);
    if (user.username !== "")
    {
      console.log('run');
      navigate('/user', {replace:true});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getUserByUnPw(formState.username, formState.password) !== undefined) {
      // navigate('/user');
      const { email, fullname, role, username } = getUserByUserName(
        formState.username
      );
      const user = {
        email,
        fullname,
        username,
        role,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(add_user(user));
      navigate("/user", { replace: true });
    }
    // alert('The username or password is incorrect');
    else setOpen(true);
  };

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormState({ ...formState, [key]: value });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl px-8 py-6 mx-4 mt-4 text-left bg-gray-200 border border-collapse rounded-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h3 className="text-2xl mt-6 font-bold text-center">
              Sign in to your account
            </h3>
          </div>
          <form className="w-full mt-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="username"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="on"
                  required
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  placeholder="Email address"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  placeholder="Password"
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        open={open}
        title={"Login failed"}
        onClose={() => setOpen(false)}
        message={"The username or password is incorrect"}
      />
    </>
  );
}

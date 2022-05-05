import React, { useEffect, useState } from "react";
import { rules } from "../../constants/rules";
import Validator from "../../utils/validator";
// import { getUsers } from './../../constants/ListUser';
import { isEmptyObj } from './../../utils/isEmptyObj';

const validator = new Validator(rules);

const Form = ({ user, isAdd, onClose, onSave, users }) => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormState({ ...user });
  }, [isAdd, user]);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    let newRules;
    if (key === "username") newRules = rules.slice(0, 3);

    if (key === "fullname") newRules = rules.slice(3, 5);

    if (key === "email") newRules = rules.slice(5);

    const newValidator = new Validator(newRules);
    const listErrors = newValidator.validate({ [key]: value });
    setErrors(() => ({ ...listErrors }));

    setFormState({ ...formState, [key]: value });
  };
  const handleRoleChange = (e) => {
    setFormState({ ...formState, role: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listErrors = validator.validate(formState);
    setErrors(() => ({ ...listErrors }));

    // Không có lỗi sẽ đẩy dữ liệu qua index
    if (Object.keys(listErrors).length === 0) {
      const checkUser = users.find((item)=> item.username === formState.username);
      // console.log(checkUser);
      if (isAdd === true && checkUser !== undefined){
        setErrors({...listErrors, username:'Username already exists'})
      }
      else
        onSave(formState);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl px-8 py-6 m-4 text-left bg-slate-300 border border-collapse rounded-md">
        <h3 className="text-2xl font-bold text-center">
          {isAdd ? "Create new" : "Edit"} User
        </h3>
        <form className="w-full mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-username"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 disabled:bg-slate-400"
                id="grid-username"
                type="text"
                placeholder="Username"
                name="username"
                disabled={isEmptyObj(user) ? false : true}
                value={formState.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic">{errors.username}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-email"
                type="text"
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-fullname"
                type="text"
                placeholder="Full name"
                name="fullname"
                value={formState.fullname}
                onChange={handleInputChange}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs italic">{errors.fullname}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Role
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-state"
                  name="role"
                  value={formState.role}
                  onChange={handleRoleChange}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Supporter">Supporter</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  -mx-3 mb-2 mt-8">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button
              type="submit"
              className="w-full block py-4 text-white text-sm bg-green-600 border rounded"
            >
              {isAdd ? 'Create' : 'Update'}
            </button>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <button
              type="button"
              className="w-full block py-4 text-black text-sm bg-red-500 border rounded"
                onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

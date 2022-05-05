import React, { useEffect, useState } from "react";
// import UserForm from "./UserForm";
import { getUsers } from "../../constants/ListUser";
// import "./User.css";
import Modal from "../../components/modal";
import Form from "./form";
import { useSelector } from "react-redux";

const listUser = getUsers();
function User() {
  const [users, setUsers] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [isDelete, setIsDelete] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [userId, setUserId] = useState(-1);
  const [search, setSearch] = useState("");
  const [usersSearch, setUsersSearch] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => setUsers([...listUser]), []);

  useEffect(()=>{
    setUsersSearch([...users]);
  },[users])

  const handleAddUser = () => {
    setSelectedUser({});
    setOpenAddEdit(true);
    setIsAdd(true);
  };
  const handleEditUser = (item) => {
    setSelectedUser({ ...item });
    setOpenAddEdit(true);
    setIsAdd(false);
  };
  const handleDeleteUser = (item, index) => {
    item.username === user.username ? setIsDelete(false) : setIsDelete(true);
    setSelectedUser({ ...item });
    setUserId(index);
    setOpenAddEdit(false);
    setOpenDelete(true);
  };

  const DeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers([...newUsers]);
    setOpenDelete(false);
  };

  const handleSave = (item) => {
    setOpenAddEdit(false);
    const editedUser = users.findIndex((user) => user.id === item.id);
    if (editedUser > -1) {
      users[editedUser] = item;
    } else {
      const userLength = users.length;
      users.push(item);
      users[userLength].id = userLength + 1;
      if (users[userLength].role === undefined)
        users[userLength].role = "Super Admin";
    }

    setUsers([...users]);
  };

  const handleCancel = () => {
    setOpenAddEdit(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSearch = () =>{
    console.log('search', search);
    const newUsers = users.filter((user) => user.username.includes(search));
    
    setUsersSearch([...newUsers]);
  }

  return (
    <div className="pt-10 px-10 bg-slate-200 min-h-screen">
      <div className="font-sans flex justify-between items-center">
        <p className="text-2xl text-green-600 font-bold">User</p>
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="block ml-4 w-32 px-6 text-white bg-green-600 rounded-lg hover:bg-green-900"
          >
            Search
          </button>
        </div>
        <button
          type="button"
          onClick={handleAddUser}
          className="w-32 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-900"
        >
          Add User
        </button>
      </div>
      <table className="font-sans border-collapse w-full my-5 overflow-auto border">
        <thead>
          <tr className="text-left text-white bg-green-600">
            <th className="border px-4 py-2 capitalize">username</th>
            <th className="border px-4 py-2 capitalize">email</th>
            <th className="border px-4 py-2 capitalize">fullname</th>
            <th className="border px-4 py-2 capitalize">role</th>
            <th className="border px-4 py-2 w-56 capitalize">action</th>
          </tr>
        </thead>
        <tbody>
          {usersSearch.map((user, index) => (
            <tr
              key={user.id}
              className="text-gray-600 text-base odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
            >
              <td className="py-2 px-4 border-r">{user.username}</td>
              <td className="py-2 px-4 border-r">{user.email}</td>
              <td className="py-2 px-4 border-r">{user.fullname}</td>
              <td className="py-2 px-4 border-r">{user.role}</td>
              <td className="py-2 px-4 border-r flex lg:space-x-5 items-center flex-wrap">
                <button
                  type="button"
                  className="w-22 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-900"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  className="w-22 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-900"
                  onClick={() => handleDeleteUser(user, index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openAddEdit && (
        <Form
          user={selectedUser}
          isAdd={isAdd}
          users={users}
          onClose={handleCancel}
          onSave={handleSave}
        />
      )}
      <Modal
        open={openDelete}
        onDelete={DeleteUser}
        onClose={() => setOpenDelete(false)}
        data={userId}
        title={"delete User"}
        message={
          isDelete
            ? `Are you sure you want to delete "${selectedUser.username}"`
            : "It is forbidden to delete the account you are using!"
        }
        isDelete={isDelete}
      />
    </div>
  );
}
export default User;

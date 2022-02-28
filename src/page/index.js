import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import './User.css';

const listUser = [
    {
        id: 1,
        username: 'quyenhua123',
        fullname: 'Hua Thi To Quyen',
        email: 'quyenhua@gmail.com',
        role: "Supper Admin"
    },
    {
        id: 2,
        username: 'baonho',
        fullname: 'Bao Nho',
        email: 'Baonho@gmail.com',
        role: "Admin"
    },
    {
        id: 3,
        username: 'baotran',
        fullname: 'Tran Gia Bao',
        email: 'Baotran@gmail.com',
        role: "Supporter"
    },
    {
        id: 4,
        username: 'tungdang',
        fullname: 'Dang Vu Thanh Tung',
        email: 'tungdang@gmail.com',
        role: "Admin"
    }
];

function User() {
    const [users, setUsers] = useState([]);
    const [isAdd, setIsAdd] = useState(true);
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => setUsers([...listUser]), []);

    const handleAddUser = () => {
        setSelectedUser({});
        setOpenAddEdit(true);
        setIsAdd(true);
    }
    const handleEditUser = (item) => {
        setSelectedUser({ ...item });
        setOpenAddEdit(true);
        setIsAdd(false);
    }
    const handleDeleteUser = (index) => {
        users.splice(index, 1);
        setUsers([...users]);
    }

    const handleSave = (item) => {
        setOpenAddEdit(false);
        const editedUser = users.findIndex(user => user.id === item.id);
        if (editedUser > -1) {
            users[editedUser] = item;
        }
        else {
            const userLength = users.length;
            users.push(item);
            users[userLength].id = userLength + 1;
            if (users[userLength].role === undefined)
                users[userLength].role = 'Super Admin';
        }
        
        setUsers([...users]);
    }

    const handleCancel = () => {
        setOpenAddEdit(false);
    }

    return (
        <div className='listUser'>
            <div>
                <h1 id='heading'>List User</h1>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <table id='users'>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>FullName</th>
                        <th>email</th>
                        <th>role</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)}>edit</button>
                                <button onClick={() => handleDeleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {openAddEdit && <UserForm user={selectedUser} isAdd={isAdd} onClose={handleCancel} onSave={handleSave} />}
        </div>
    );
}
export default User;
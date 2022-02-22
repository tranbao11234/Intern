import React from 'react';
import './User.css';

class UserRow extends React.Component{
    render(){
        const user = this.props.User;
        return (
            <tr>
                <td>{user.username}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
            </tr>
        );
    }
}
class UserTable extends React.Component{
    render() {
        const rows = [];
        const users = this.props.users;
        users.forEach(user => {
            rows.push(
                <UserRow User = {user} />
            );
        });
        return (
            <table id='users'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class Heading extends React.Component{
    render(){
        return (
            <h1 id='heading'>List User</h1>
        );
    }
}

class FilterableUserTable extends React.Component{
    render(){
        return (
            <div>
                <Heading />
                <UserTable users={Users} />
            </div>
        );
    }
}

const Users = [
    {
        username: 'quyenhua1234',
        fullname: 'Hua Thi To Quyen',
        email: 'huathitoquyen1234@gmail.com',
        role: 'Super Admin'
    },
    {
        username: 'admin',
        fullname: 'Bảo Nhỏ Nek',
        email: 'admin@gmail.com',
        role: 'Admin'
    },
    {
        username: 'tranbao',
        fullname: 'Tran Gia Bao',
        email: 'baonho@gmail.com',
        role: 'Supporter'
    },
    {
        username: 'ThanhTung',
        fullname: 'Dang Thanh Tung',
        email: 'tungbo@gmail.com',
        role: 'Supporter'
    }
];

export default FilterableUserTable;
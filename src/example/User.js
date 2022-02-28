import React from 'react';
import './User.css';

class UserRow extends React.Component {
    render() {
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
class UserTable extends React.Component {
    render() {
        const rows = [];
        const users = this.props.users;
        users.forEach(user => {
            rows.push(
                <UserRow User={user} />
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

class Heading extends React.Component {
    render() {
        return (
            <h1 id='heading'>List User</h1>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="username">Username</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="UserName" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fullname">FullName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Full Name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="abc@123" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="role">Role</label>
                    </div>
                    <div className="col-75">
                        <select id="role" name="role" value={this.state.value} onChange={this.handleChange}>
                            <option value="superAdmin">Super Admin</option>
                            <option value="admin">Admin</option>
                            <option value="supporter">Supporter</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

class FilterableUserTable extends React.Component {
    render() {
        return (
            <div>
                <Heading />
                <UserTable users={Users} />
                <NameForm />
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
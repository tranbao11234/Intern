import React, { useEffect, useState } from "react";

export default function UserForm({ user, isAdd, onClose, onSave }) {
    const [formState, setFormState] = useState({});

    console.log(formState);
    useEffect(() => {
        // console.log(user);
        setFormState({ ...user })
    },[isAdd, user]);

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormState({ ...formState, [key]: value });
    };
    const handleRoleChange = (e) => {
        setFormState({ ...formState, role: e.target.value });
    };

    const handleSubmit = () => {
        // console.log(formState);
        onSave(formState);
    };
    const handleCancel = () => {
        onClose();
    };
    return (
        <div className='user-form'>
            <div className='form-title'>{isAdd ? 'Add' : 'Edit'} User</div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="username">Username</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name='username' placeholder="UserName" value={formState.username} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fullname">FullName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name='fullname' placeholder="Full Name" value={formState.fullname} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name='email' placeholder="abc@123" value={formState.email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="role">Role</label>
                    </div>
                    <div className="col-75">
                        <select id="role" name="role" value={formState.role} onChange={handleRoleChange}>
                            <option value="Super Admin">Super Admin</option>
                            <option value="Admin">Admin</option>
                            <option value="Supporter">Supporter</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <button onSubmit={handleSubmit}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
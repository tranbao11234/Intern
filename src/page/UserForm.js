import React, { useEffect, useState } from "react";
import Validator from '../utils/validator';

const rules = [
    {
        field: 'username',
        method: 'isEmpty',
        validWhen: false,
        message: 'The username field is required.',
    },
    {
        field: 'username',
        method: 'isAlphanumeric',
        args: ['en-US'],
        validWhen: true,
        message: 'The username field must not contain spaces or accented.',
    },
    {
        field: 'username',
        method: 'isLength',
        args: [{ max: 20 }],
        validWhen: true,
        message: 'The username field is limited to 20 characters.',
    },
    {
        field: 'fullname',
        method: 'isEmpty',
        validWhen: false,
        message: 'The fullname field is required.',
    },
    {
        field: 'fullname',
        method: 'isLength',
        args: [{ max: 50 }],
        validWhen: true,
        message: 'The fullname field is limited to 50 characters .',
    },
    {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'The email field is required.',
    },
    {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
    },
];
const validator = new Validator(rules);

export default function UserForm({ user, isAdd, onClose, onSave }) {
    const [formState, setFormState] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormState({ ...user });
    }, [isAdd, user]);

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        let newRules;
        if (key == 'username')
            newRules = rules.slice(0,3);

        if(key == 'fullname')
            newRules = rules.slice(3,5);
        
        if(key == 'email')
            newRules = rules.slice(5);
        
        const newValidator = new Validator(newRules);
        const listErrors = newValidator.validate({[key]: value});
        setErrors(() => ({ ...listErrors}));

        setFormState({ ...formState, [key]: value });
        
    };
    const handleRoleChange = (e) => {
        setFormState({ ...formState, role: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const listErrors = validator.validate(formState);
        setErrors(() => ({ ...listErrors}));

        // Không có lỗi sẽ đẩy dữ liệu qua index
        if (Object.keys(listErrors).length === 0)
        {
            onSave(formState);
        }
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
                    {errors.username && <div className="validation" style={{ display: 'block' }}>{errors.username}</div>}
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fullname">FullName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name='fullname' placeholder="Full Name" value={formState.fullname} onChange={handleInputChange} />
                    </div>
                    {errors.fullname && <div className="validation" style={{ display: 'block' }}>{errors.fullname}</div>}
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name='email' placeholder="abc@123" value={formState.email} onChange={handleInputChange} />
                    </div>
                    {errors.email && <div className="validation" style={{ display: 'block' }}>{errors.email}</div>}
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
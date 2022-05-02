export const rules = [
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
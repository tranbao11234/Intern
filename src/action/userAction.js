import { ADD_USER, DELETE_USER } from '../constants/user';

export const add_user = (user) => ({
    type: ADD_USER,
    payload: user
});

export const delete_user = () =>({
    type: DELETE_USER,
});

import { ADD_USER, DELETE_USER } from "../../constants/user";

export let initialUser = {
    username: '',
    fullname: '',
    email:'',
    role: '',
};

const userLocal = JSON.parse(localStorage.getItem('user'));

if (userLocal){
    initialUser = userLocal;
}

function userReducer(state = initialUser, action){
    switch (action.type) {
        case ADD_USER:
            return {
                ...action.payload
            }

        case DELETE_USER:
            return {
                ...initialUser,
            };
    
        default:
            return state;
    }
}

export default userReducer;
import {
    CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_NICKNAME,
    CHANGE_PASSWORD, CHANGE_PASSWORD_CONFIRM,
    CHANGE_EMAIL
} from "../actions";

const user = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_FIRSTNAME:
            return {
                ...state,
                firstname: action.text,
                firstNameError: action.text.length < 2 ? 'Name must be minimum 2 characters long.' : null
            };
        case CHANGE_LASTNAME:
            return {
                ...state,
                lastname: action.text
            };
        case CHANGE_NICKNAME:
            return {
                ...state,
                nickname: action.text
            };
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        case CHANGE_PASSWORD_CONFIRM:
            return {
                ...state,
                passwordConfirm: action.password
            };
        default:
            return state
    }
};

export default user

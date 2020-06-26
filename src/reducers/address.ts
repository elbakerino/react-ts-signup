import {
    TOGGLE_ADDRESS,
    CHANGE_STREET, CHANGE_STREET_NO,
    CHANGE_POSTCODE, CHANGE_CITY,
    CHANGE_ADDRESS_INFO,
} from "../actions";

const address = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_ADDRESS:
            return {
                ...state,
                showAddress: action.showAddress
            };
        case CHANGE_STREET:
            return {
                ...state,
                street: action.text
            };
        case CHANGE_STREET_NO:
            return {
                ...state,
                streetNo: action.text
            };
        case CHANGE_POSTCODE:
            return {
                ...state,
                postcode: action.text
            };
        case CHANGE_CITY:
            return {
                ...state,
                city: action.text
            };
        case CHANGE_ADDRESS_INFO:
            return {
                ...state,
                addressInfo: action.text
            };
        default:
            return state
    }
};

export default address

import { LOGIN, LOGOUT } from '../actions/actionsTypes';

const initialState = {
    isFetching: false,
    isFetched: false,
    lastUpdated: null,
    error: null,
    authenticated: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, authenticated: action.payload };
        case LOGOUT:
            return { ...state, authenticated: action.payload };
        default:
            return state;
    }
};

export default loginReducer;
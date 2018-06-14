import { LOGIN, LOGOUT } from '../actions/actionsTypes';

const initialState = {
    isFetching: false,
    isFetched: false,
    lastUpdated: null,
    error: null,
    authenticated: false,
    text: ''
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, authenticated: action.payload.authenticated, text: action.payload.text };
        case LOGOUT:
            return { ...state, authenticated: action.payload.authenticated, text: action.payload.text };
        default:
            return state;
    }
};

export default loginReducer;
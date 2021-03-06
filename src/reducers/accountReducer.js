import * as actionTypes from '../actions/ActionsTypes';

const initialState = {
    account: null
};

const accountReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_ACCOUNT:
            return { ...state, account: {} };
        default:
            return state;
    }
};

export default accountReducer;
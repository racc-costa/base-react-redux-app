import * as actionTypes from './actions';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            console.log('LOGIN was triggered.')
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.LOGOUT:
            console.log('LOGOUT was triggered.')
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
              return state;
    }
};

export default reducer;

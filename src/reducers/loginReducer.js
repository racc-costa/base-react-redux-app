import * as actionTypes from './actions';
import axios from 'axios';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log('LOGIN was triggered.')

            axios.get('http://www.mocky.io/v2/5b0718412f00006628c6200e')
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                });

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

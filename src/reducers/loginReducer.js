import * as actionTypes from './actions';
import axios from 'axios';

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log('LOGIN was triggered.')

            axios.get('http://api')
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                });

            const newState = Object.assign({}, state);
            return newState;
        case actionTypes.LOGOUT:
            console.log('LOGOUT was triggered.')
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;

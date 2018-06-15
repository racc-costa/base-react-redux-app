import { createStore, combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import accountReducer from '../reducers/accountReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    account: accountReducer
});

const store = createStore(rootReducer);

export default store;
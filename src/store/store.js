import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer';
import accountReducer from '../reducers/accountReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    account: accountReducer
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
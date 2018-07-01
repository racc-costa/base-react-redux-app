import { LOGIN, LOGOUT } from './ActionsTypes';
import store from '../store/store';
import axios from 'axios';

export const login = () => {
    axios.get('http://www.mocky.io/v2/5b229e552e00007b00e31787')
        .then((response) => {
            store.dispatch({ type: LOGIN, payload: { authenticated: true, text: response.data.text } })
        })
        .catch(function (error) {
            if (error.response) {
                store.dispatch({ type: LOGIN, payload: { authenticated: false, text: error.response } })
            } else if (error.request) {
                store.dispatch({ type: LOGIN, payload: { authenticated: false, text: error.request } })
            } else {
                store.dispatch({ type: LOGIN, payload: { authenticated: false, text: error.message } })
            }
        });
}

export const logout = () => {
    axios.get('http://www.mocky.io/v2/5b22b7472e00006000e317ce')
        .then((response) => {
            store.dispatch({ type: LOGOUT, payload: { authenticated: false, text: response.data.text } })
        })
        .catch(function (error) {
            if (error.response) {
                store.dispatch({ type: LOGOUT, payload: { authenticated: false, text: error.response.data.text } })
            } else if (error.request) {
                store.dispatch({ type: LOGOUT, payload: { authenticated: false, text: error.request } })
            } else {
                store.dispatch({ type: LOGOUT, payload: { authenticated: false, text: error.message } })
            }
        });
}
import {
  REGISTER,
  TOKEN_REQUEST,
  TOKEN_RECIEVE,
  TOKEN_REQUSET_ERROR,
} from './types';
import axios from 'axios';

axios.defaults.baseURL = 'https://tripple-a.herokuapp.com/api/v1/';

export function login(data) {
  return dispatch => {
    // dispatch({
    //   type: TOKEN_REQUSET,
    // });
    axios
      .post('auth/token/login/', data)
      .then(res => {
        dispatch({
          type: TOKEN_RECIEVE,
          payload: res.data.auth_token,
        });
      })
      .catch(error => {
        dispatch({
          type: TOKEN_REQUSET_ERROR,
          payload: error,
        });
      });
  };
}

export function register(data) {
  return dispatch => {
    axios
      .post('auth/users/create', data)
      .then(res => {
        //Log in user. REST is bad sometimes
        axios
          .post('auth/token/login/', {
            email: data.username,
            password: data.password,
          })
          .then(res => {
            dispatch({
              type: TOKEN_RECIEVE,
              payload: res.data.auth_token,
            });
          })
          .catch(error => {
            dispatch({
              type: TOKEN_REQUSET_ERROR,
              payload: error,
            });
          });
      })
      .catch(error => {
        dispatch({
          type: TOKEN_REQUSET_ERROR,
          payload: error,
        });
      });
  };
}

export function tokenRequest() {
  return dispatch => {
    dispatch({
      type: TOKEN_REQUEST,
    });
  };
}

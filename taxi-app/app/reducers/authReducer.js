import {
  REGISTER,
  TOKEN_REQUEST,
  TOKEN_RECIEVE,
  TOKEN_REQUSET_ERROR,
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
  token: {},
  isLoading: false,
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TOKEN_REQUEST:
      return update(state, {
        isLoading: {
          $set: true,
        },
      });
    case REGISTER:
      return update(state, {
        // token: {
        //   $set: action.payload,
        // },
        isLoading: {
          $set: true,
        },
      });
    case TOKEN_RECIEVE:
      return update(state, {
        token: {
          $set: action.payload,
        },
        isLoading: {
          $set: false,
        },
      });
    case TOKEN_REQUSET_ERROR:
      return update(state, {
        token: {
          $set: action.payload,
        },
        isLoading: {
          $set: false,
        },
      });
    default:
      return state;
  }
}

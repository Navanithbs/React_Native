import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  location: locationReducer,
  auth: authReducer,
  form: formReducer,
});

import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import authenticationReducer from './authentication-reducer';
import registrationReducer from './registration-reducer'
import { reducer as formReducer } from 'redux-form'
import commonReducer from './common-reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  authenticationState: authenticationReducer,
  registrationState: registrationReducer,
  common: commonReducer,
  form: formReducer
})

export default rootReducer;

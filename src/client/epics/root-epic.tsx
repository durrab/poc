import { combineEpics } from 'redux-observable';
import { authEpic } from './auth/auth-epic';
import { authenticationEpics } from './login/login-epic'
import { registrationEpics } from './registration/registration-epic'

const rootEpic = combineEpics(authEpic, authenticationEpics, registrationEpics);
export {rootEpic}

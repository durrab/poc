import { combineEpics } from 'redux-observable';
import { authEpic } from './auth/auth-epic';

const rootEpic = combineEpics(authEpic);
export {rootEpic}

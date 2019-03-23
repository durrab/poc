import * as actionTypes from '../../actions/login/login-constants'
import * as loginActions from '../../actions/login/login-actions'
import {of, merge} from 'rxjs'
import { mergeMap, delay } from 'rxjs/operators'; 
import { ofType, combineEpics } from 'redux-observable';
import axios from 'axios'

const loginEpic = (action$) => action$.pipe(
ofType(actionTypes.LOGIN_REQUEST),
mergeMap(async (action:any) => {

    try{

        var headers = {
            'Content-Type': 'application/json', 
        }

        var response = await axios.post('/user/authenticate',action.data, {headers: headers});
        return loginActions.loginRequestSuccess(response);
    }
    catch(err){
        return loginActions.loginRequestFailed(err);
    }

})
);

const loginFailedEpic = (action$) => action$.pipe(
    ofType(actionTypes.LOGIN_REQUEST_FAILED),
    mergeMap( (action:any):any => {
        
     let actions = [];
      actions.push(of(loginActions.error(true)));
      if(action.error.response.data.message !== undefined)
      actions.push(of(loginActions.showStatusMessage(action.error.response.data.message)))
      else
      actions.push(of(loginActions.showStatusMessage(action.error.response.data)))
      actions.push(of(loginActions.indicator(false)))
      actions.push(of(loginActions.error(false)).pipe(delay(3000)));
      return merge(...actions);

    })
);

const loginSuccessEpic = (action$) => action$.pipe(
    ofType(actionTypes.LOGIN_REQUEST_SUCCESS),
    mergeMap( (action:any):any => {
        
     let actions = [];
      actions.push(of(loginActions.error(false)));
      actions.push(of(loginActions.indicator(true)));

      if(action.response.data.message !== undefined)
      actions.push(of(loginActions.showStatusMessage(action.response.data.message)))
      actions.push(of(loginActions.indicator(false)).pipe(delay(1000)));
      actions.push(of(loginActions.authenticated(true)).pipe(delay(1000)));
      return merge(...actions);

    })
);



const authenticationEpics = combineEpics(loginEpic, loginFailedEpic, loginSuccessEpic);
export { authenticationEpics }

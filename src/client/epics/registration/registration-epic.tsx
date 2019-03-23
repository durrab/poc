import * as actionTypes from '../../actions/registration/registration-constants'
import * as registrationActions from '../../actions/registration/registration-actions'
import {of, merge} from 'rxjs'
import { mergeMap, delay } from 'rxjs/operators'; 
import { ofType, combineEpics } from 'redux-observable';
import axios from 'axios'

const registrationEpic = (action$) => action$.pipe(
ofType(actionTypes.REGISTRATION_REQUEST),
mergeMap(async (action:any) => {

    try{

        var headers = {
            'Content-Type': 'application/json', 
        }

        var response = await axios.post('/user/register',action.data, {headers: headers});
        return registrationActions.registrationRequestSuccess(response);
    }
    catch(err){
        return registrationActions.registrationRequestFailed(err);
    }

})
);

const registrationFailedEpic = (action$) => action$.pipe(
    ofType(actionTypes.REGISTRATION_REQUEST_FAILED),
    mergeMap( (action:any) => {
        
     let actions = [];
      actions.push(of(registrationActions.error(true)));
      if(action.error.response.data.message !== undefined)
      actions.push(of(registrationActions.showStatusMessage(action.error.response.data.message)))
      else
      actions.push(of(registrationActions.showStatusMessage(action.error.response.data)))
      actions.push(of(registrationActions.indicator(false)))
      actions.push(of(registrationActions.error(false)).pipe(delay(3000)));
      return merge(...actions);

    })
);

const registrationSuccessEpic = (action$) => action$.pipe(
    ofType(actionTypes.REGISTRATION_REQUEST_SUCCESS),
    mergeMap( (action:any) => {
        
     let actions = [];
      actions.push(of(registrationActions.error(false)));
      actions.push(of(registrationActions.indicator(true)));

      if(action.response.data.message !== undefined)
      actions.push(of(registrationActions.showStatusMessage(action.response.data.message)))
      
      actions.push(of(registrationActions.indicator(false)).pipe(delay(1000)));
      actions.push(of(registrationActions.isRegistered(true)).pipe(delay(1000)));
      return merge(...actions);

    })
);



const registrationEpics = combineEpics(registrationEpic, registrationFailedEpic, registrationSuccessEpic);
export { registrationEpics }

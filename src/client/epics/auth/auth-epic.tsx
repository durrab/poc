import * as constants from '../../util/constants'
import * as authActions from '../../actions/auth/auth-actions'
import { of, merge } from 'rxjs'
import { mergeMap, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable'


const authEpic = (action$): any =>  action$.pipe(
  ofType(constants.AUTH_PERMISSION_REQUEST),
  mergeMap(( action:any ): any => {
    let response = {
      showUser: false,
      showAdmin: false,
      showOptional: false,
      isError: false,
    };

    //let request = JSON.stringify(action.request);

    switch(action.request.role.value){
      case 'User':
        response.showUser = true;
        break;
      case 'Admin':
        response.showAdmin = true;
        break;
      case 'Guest':
        response.showOptional = true;
        break;
      default:
      response.isError = true;
    }

    let actions = [];
    if(response.isError){
      let errorMessage = {
        message: 'Cannot validate the user'
      }

      actions.push(of(authActions.authRequestFailed(errorMessage)));
      actions.push(of(authActions.hideAuthRequestIndicator()).pipe(delay(1000)));
      return merge(...actions);
      //return authActions.authRequestFailed(errorMessage);
    }else{
        actions.push(of(authActions.showAuthRequestIndicator("Success...")));
        actions.push(of(authActions.authRequestSuccess(response)));
        actions.push(of(authActions.hideAuthRequestIndicator()).pipe(delay(5000)));
        return merge(...actions);
    }


  })
);


export { authEpic }

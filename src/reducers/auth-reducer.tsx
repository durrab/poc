import * as actionTypes from '../util/constants'

const initialState:any = {
  request: {},
  isLoading: false,
  status: 'Durrab Test',
  isError: false,
  error: {},
  response: {},

}

const authReducer = (state = initialState, action: any) => {

  switch(action.type) {
    case actionTypes.SHOW_REQUEST_LOADING :
      return {
        ...state,
        isLoading: true,
        status: action.status,
      }
    case actionTypes.AUTH_REQUEST_SUCCESS:
    return {
      ...state,
      request: {},
      response: action.response,
    }
    case actionTypes.AUTH_REQUEST_FAILED:
    return {
      ...state,
      isLoading: true,
      status: action.status,
      error: action.error,
      isError: true,
    }
    case actionTypes.HIDE_REQUEST_LOADING:
    return {
      ...state,
      isLoading: action.isLoading,
      error: action.error,
      isError: action.isError,
    }
    case actionTypes.SELECT_ROLE:
    return {
      ...state,
      selectedRole: action.selectedRole,
    }
    case actionTypes.SELECT_USER:
    return {
      ...state,
      selectedUser: action.selectedUser
    }
    default:
    return state;
  }

}

export default authReducer;

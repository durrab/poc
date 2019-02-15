import * as actionTypes from '../../util/constants'

export const showAuthRequestIndicator = (status:any) => {
  return {
    type: actionTypes.SHOW_REQUEST_LOADING,
    isLoading: true,
    status: status,
    isError: false,
  }
}

export const hideAuthRequestIndicator = () => {
  return {
    type: actionTypes.HIDE_REQUEST_LOADING,
    isLoading: false,
    isError: false,
    error: undefined,
  }
}

export const createAuthRequest = (data:any) => {
  return {
    type: actionTypes.AUTH_PERMISSION_REQUEST,
    request: data,
    isError: false,
  }
}

export const authRequestSuccess = (result:any) => {
  return {
    type: actionTypes.AUTH_REQUEST_SUCCESS,
    request: {},
    isError: false,
    response: result
  }
}

export const authRequestFailed = (error:any) => {
  return {
    type: actionTypes.AUTH_REQUEST_FAILED,
    isLoading: true,
    isError: true,
    status: error.message,
    error: error
  }
}

export const  selectRole = (role:any) => {
  return {
    type: actionTypes.SELECT_ROLE,
    selectedRole: role,
  }
}

export const  selectUser = (data:any) => {
  return {
    type: actionTypes.SELECT_USER,
    selectedUser: data,
  }
}

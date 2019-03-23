import * as actionTypes from './login-constants'

export const showStatusMessage = (status) => {
    return {
      type: actionTypes.REQUEST_INDICATOR,
      status: status,
    }
}

export const loginRequestSuccess = (response) => {
    return {
        type: actionTypes.LOGIN_REQUEST_SUCCESS,
        response: response
    }
}

export const loginRequestFailed = (error) => {
    return {
        type: actionTypes.LOGIN_REQUEST_FAILED,
        error: error,
        isError: true,
    }
}

export const loginRequest = (data) => {
    return {
        type: actionTypes.LOGIN_REQUEST,
        data: data
    }
}

export const indicator = (indicator) => {
    return {
        type: actionTypes.SHOW_INDICATOR,
        indicator: indicator,
    }
}

export const error = (isError) => {
    return {
        type: actionTypes.SHOW_ERROR,
        isError: isError,
    }
}
export const authenticated = (authenticate) => {
    return {
        type: actionTypes.AUTHENTICATED,
        authenticate: authenticate
    }
}

export const navigateToDashboard = (dashboard) => {
    return {
        type: actionTypes.NAVIGATE_TO_DASHBOARD,
        dashboard: dashboard
    }
}

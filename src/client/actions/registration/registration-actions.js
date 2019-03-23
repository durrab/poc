import * as actionTypes from './registration-constants'

export const showStatusMessage = (status) => {
    return {
      type: actionTypes.REGISTRATION_REQUEST_INDICATOR,
      status: status,
    }
}

export const registrationRequestSuccess = (response) => {
    return {
        type: actionTypes.REGISTRATION_REQUEST_SUCCESS,
        response: response
    }
}

export const registrationRequestFailed = (error) => {
    return {
        type: actionTypes.REGISTRATION_REQUEST_FAILED,
        error: error,
    }
}

export const registrationRequest = (data) => {
    return {
        type: actionTypes.REGISTRATION_REQUEST,
        data: data
    }
}

export const indicator = (flag) => {
    return {
        type: actionTypes.SHOW_REGISTRATION_INDICATOR,
        indicator: flag,
    }
}

export const error = (flag) => {
    return {
        type: actionTypes.SHOW_REGISTRATION_ERROR,
        isError: flag
    }
}

export const isRegistered = (flag) => {
    return {
        type: actionTypes.IS_REGISTERED,
        registered: flag
    }
}
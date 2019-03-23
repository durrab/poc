import * as actionTypes from '../actions/registration/registration-constants'

const initialState = {
    data: {},
    indicator: false,
    status: '',
    isError: false,
    response: {},
    registered: false,
}

const registrationReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.REGISTRATION_REQUEST_INDICATOR:
            return {
             ...state,
             status: action.status   
            }
        case actionTypes.REGISTRATION_REQUEST_SUCCESS:
            return {
             ...state,
             response: action.response
            }
        case actionTypes.REGISTRATION_REQUEST_FAILED:
            return {
             ...state,
             error: action.error,
            }
        case actionTypes.SHOW_REGISTRATION_INDICATOR:
            return {
             ...state,
             indicator: action.indicator
            }
        case actionTypes.SHOW_REGISTRATION_ERROR:
            return {
             ...state,
             isError: action.isError
            }
        case actionTypes.IS_REGISTERED:
            return {
                ...state,
                registered: action.registered
            }
        default:
        return state;
    }
}

export default registrationReducer

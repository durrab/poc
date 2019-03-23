import * as actionTypes from '../actions/login/login-constants'


const initialState = {
    data: {},
    indicator: false,
    status: '',
    isError: false,
    response: {},
    authenticate: false,
    dashboard: true,
}

const authenticationReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.REQUEST_INDICATOR:
            return {
             ...state,
             indicator: true,
             status: action.status   
            }
        case actionTypes.LOGIN_REQUEST_SUCCESS:
            return {
             ...state,
             response: action.response
            }
        case actionTypes.LOGIN_REQUEST_FAILED:
            return {
             ...state,
             error: action.error,
            }
        case actionTypes.SHOW_INDICATOR:
            return {
             ...state,
             indicator: action.indicator
            }
        case actionTypes.SHOW_ERROR:
            return {
             ...state,
             isError: action.isError
            }
        case actionTypes.AUTHENTICATED:
            return {
                ...state,
                authenticate: action.authenticate
            }
        case actionTypes.NAVIGATE_TO_DASHBOARD:
        {
            return {
                ...state,
                dashboard: action.dashboard
            }
        }
        
        default:
        return state;
    }
}

export default authenticationReducer

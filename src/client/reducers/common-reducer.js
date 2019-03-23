import * as actionTypes from '../actions/common/common-constants'


const initialState = {
    toggle: false,
    cardAnimation: 'cardHidden'
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CARD_ANIMATION:
            if (action.toggle === false) {
                return {
                    ...state,
                    cardAnimation: 'cardHidden'
                }
            } else if(action.toggle === true) {
                return {
                    ...state,
                    cardAnimation: ''
                }

            }
        default:
        return state;
    }

}

export default commonReducer
import * as actionTypes from './common-constants'

export const toggleCardAnimation = (flag) => {
    return {
      type: actionTypes.TOGGLE_CARD_ANIMATION,
      toggle: flag,
    }
}
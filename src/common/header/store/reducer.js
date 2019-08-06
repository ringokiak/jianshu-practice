import * as actionTypes from './actionTypes'

const defaultState = {
  focus: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.INP_FOCUS) {
    return {
      focus: true
    };
  }
  if (action.type === actionTypes.INP_BLUR) {
    return {
      focus: false
    };
  }
  return state;
};

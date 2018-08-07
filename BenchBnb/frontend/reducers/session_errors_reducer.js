import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {[action.errors]: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.errors]: null });
    default:
      return state;
  }
};

export default sessionErrorsReducer;

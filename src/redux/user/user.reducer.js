// its a function that gets 2 properties
// state object - represents the lasts state/initial
// action object
import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  //state is the current state whenever the action is fired
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

      break;

    default:
      return state;
  }
};


export default userReducer;
import * as types from '../const/const';

const initialState = {
  signups: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      console.log('Signup', action.payload);
      return {
        ...state,
        signups: [...state.signups, action.payload],
      };
    case types.SAVE_USER:
      return {
        ...state,
        signups: [...state.signups, action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;

import { SETUP_USER_BEGIN, SETUP_USER_SUCCESS } from "./actions";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return { ...state, isLoading: false, user: action.payload.user };
  }
};

export default reducer;

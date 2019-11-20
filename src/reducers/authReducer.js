import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER_REQUEST,
  LOGIN_HANDLER_SUCCESS,
  LOGIN_HANDLER_FAILED
} from "../constants/AuthConstants";

const authReducer = (state = {}, action) => {
  // console.log("state", state);
  // console.log("action", action);

  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        ...action.payload
      });
    case CLEAR_USER_INFO:
      localStorage.removeItem("token");
      localStorage.removeItem("expiryDate");
      localStorage.removeItem("userId");
      return Object.assign({}, state, { isAuth: false, token: "", userId: "" });
    case LOGIN_HANDLER_REQUEST:
      return { ...state };
    case LOGIN_HANDLER_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        user: { token: action.user.token, userId: action.user.userId }
      };
    case LOGIN_HANDLER_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;

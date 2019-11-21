import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER_REQUEST,
  LOGIN_HANDLER_SUCCESS,
  LOGIN_HANDLER_FAILED,
  SET_USER_TOKEN
} from "../constants/AuthConstants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_INFO:
      return { ...state, user: { ...action.payload } };
    case CLEAR_USER_INFO:
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      return { ...state, token: "" };
    case LOGIN_HANDLER_REQUEST:
      return { ...state };
    case LOGIN_HANDLER_SUCCESS:
      const user = {
        userId: action.user.userId,
        email: action.user.email
      };
      sessionStorage.setItem("token", action.user.token);
      sessionStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user: action.userId
      };
    case LOGIN_HANDLER_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;

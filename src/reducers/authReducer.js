import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER_REQUEST,
  LOGIN_HANDLER_SUCCESS,
  LOGIN_HANDLER_FAILED,
  SET_USER_TOKEN,
  REGISTER_HANDLER_REQUEST,
  REGISTER_HANDLER_SUCCESS,
  REGISTER_HANDLER_FAILED
} from "../constants/AuthConstants";
import history from "../history";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      console.log("action", action);
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

    case REGISTER_HANDLER_REQUEST:
      return { ...state };
    case REGISTER_HANDLER_SUCCESS:
      history.push("/");
      return { ...state };
    case REGISTER_HANDLER_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;

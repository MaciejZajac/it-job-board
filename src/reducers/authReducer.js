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
    // ustawienie tokenu
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };

    // ustawienie użytkownika
    case SET_USER_INFO:
      return { ...state, user: { ...action.payload } };
    // wylogowanie użytkownika
    case CLEAR_USER_INFO:
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      return { ...state, token: "" };

    // logowanie użytkownika
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
        user: user
      };
    case LOGIN_HANDLER_FAILED:
      return { ...state };

    // rejestracja użytkownika
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

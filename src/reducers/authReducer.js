import { SET_USER_INFO, CLEAR_USER_INFO } from "../constants/AuthConstants";

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

    default:
      return state;
  }
};

export default authReducer;

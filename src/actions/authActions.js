import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER
} from "../constants/AuthConstants";

export const setUserInfo = payload => {
  return {
    type: SET_USER_INFO,
    payload
  };
};

export const clearUserInfo = payload => {
  return {
    type: CLEAR_USER_INFO,
    payload
  };
};

export const loginHandler = payload => {
  console.log("payload", payload);
  return {
    type: LOGIN_HANDLER,
    payload
  };
};

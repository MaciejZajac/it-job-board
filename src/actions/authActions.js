import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER_REQUEST,
  SET_USER_TOKEN
} from "../constants/AuthConstants";

export const setUserToken = payload => {
  return {
    type: SET_USER_TOKEN,
    payload
  };
};

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
  return {
    type: LOGIN_HANDLER_REQUEST,
    payload
  };
};

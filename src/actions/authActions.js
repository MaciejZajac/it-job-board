import {
  SET_USER_INFO,
  CLEAR_USER_INFO,
  LOGIN_HANDLER_REQUEST,
  SET_USER_TOKEN,
  REGISTER_HANDLER_REQUEST
} from "../constants/AuthConstants";

export const setUserToken = payload => {
  console.log("payload1", payload);
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
  console.log("payload2", payload);
  return {
    type: LOGIN_HANDLER_REQUEST,
    payload
  };
};

export const registerHandler = payload => {
  return {
    type: REGISTER_HANDLER_REQUEST,
    payload
  };
};

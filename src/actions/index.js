import { ConstantsEnum } from "../constants/Constants";

export function setUserInfo(payload) {
  return {
    type: ConstantsEnum.SET_USER_INFO,
    payload
  };
}

export function clearUserInfo(payload) {
  return {
    type: ConstantsEnum.CLEAR_USER_INFO,
    payload
  };
}

export function addOfferRequest(payload) {
  return {
    type: ConstantsEnum.ADD_NEW_OFFER,
    payload
  };
}

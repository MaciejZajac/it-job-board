import {
  ADD_NEW_OFFER_REQUEST,
  SET_ACTIVE_OFFER,
  GET_JOBS_OFFERS_REQUEST,
  GET_PRIVATE_JOBS_REQUEST,
  DELETE_OFFER_REQUEST
} from "../constants/JobsConstants";

export const addOfferRequest = payload => {
  return {
    type: ADD_NEW_OFFER_REQUEST,
    payload
  };
};

export const setActiveOffer = payload => {
  return {
    type: SET_ACTIVE_OFFER,
    payload
  };
};

export const getJobOffers = payload => {
  return {
    type: GET_JOBS_OFFERS_REQUEST
  };
};

export const getPrivateJobOffers = payload => {
  return {
    type: GET_PRIVATE_JOBS_REQUEST,
    payload
  };
};

export const deleteOneOffer = payload => {
  // @@@@@
  return {
    type: DELETE_OFFER_REQUEST,
    payload
  };
};

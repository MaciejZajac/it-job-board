import {
  ADD_NEW_OFFER_REQUEST,
  SET_ACTIVE_OFFER,
  GET_JOBS_OFFERS_REQUEST
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

import {
  ADD_NEW_OFFER,
  SET_ACTIVE_OFFER,
  GET_JOBS_OFFERS
} from "../constants/JobsConstants";

export const addOfferRequest = payload => {
  return {
    type: ADD_NEW_OFFER,
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
    type: GET_JOBS_OFFERS
  };
};

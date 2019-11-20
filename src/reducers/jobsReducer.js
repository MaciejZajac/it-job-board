import {
  GET_JOBS_OFFERS_REQUEST,
  GET_JOBS_OFFERS_SUCCEEDED,
  GET_JOBS_OFFERS_FAILED,
  SET_ACTIVE_OFFER,
  ADD_NEW_OFFER_REQUEST,
  ADD_NEW_OFFER_SUCCEDED,
  ADD_NEW_OFFER_FAILED
} from "../constants/JobsConstants";

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_OFFER:
      return { ...state, activeOffer: action.payload };

    // trzy przypadki: ZAWOŁANIE, SUKCES, PORAŻKA
    case GET_JOBS_OFFERS_REQUEST:
      return { ...state, getBooksErrors: null };
    case GET_JOBS_OFFERS_SUCCEEDED:
      return { ...state, jobOffers: action.jobOffers };
    case GET_JOBS_OFFERS_FAILED:
      return {
        ...state,
        getBooksErrors: action.message
      };

    case ADD_NEW_OFFER_REQUEST:
      return { ...state };
    case ADD_NEW_OFFER_SUCCEDED:
      return { ...state };
    case ADD_NEW_OFFER_FAILED:
      return { ...state };

    default:
      return state;
  }
};

export default offerReducer;

import {
  GET_JOBS_OFFERS_REQUEST,
  GET_JOBS_OFFERS_SUCCEEDED,
  GET_JOBS_OFFERS_FAILED,
  SET_ACTIVE_OFFER,
  ADD_NEW_OFFER_REQUEST,
  ADD_NEW_OFFER_SUCCEDED,
  ADD_NEW_OFFER_FAILED,
  GET_PRIVATE_JOBS_REQUEST,
  GET_PRIVATE_JOBS_SUCCEDED,
  GET_PRIVATE_JOBS_FAILED,
  DELETE_OFFER_REQUEST,
  DELETE_OFFER_SUCCEDED,
  DELETE_OFFER_FAILED
} from "../constants/JobsConstants";

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_OFFER:
      return { ...state, activeOffer: action.payload };

    // trzy przypadki: ZAWOŁANIE, SUKCES, PORAŻKA
    case GET_JOBS_OFFERS_REQUEST:
      return { ...state };
    case GET_JOBS_OFFERS_SUCCEEDED:
      return { ...state, jobOffers: action.jobOffers, getBooksErrors: null };
    case GET_JOBS_OFFERS_FAILED:
      return {
        ...state,
        getBooksErrors: action.message
      };

    case ADD_NEW_OFFER_REQUEST:
      return { ...state, addNewOfferErrors: null };
    case ADD_NEW_OFFER_SUCCEDED:
      return { ...state, addNewOfferErrors: null };
    case ADD_NEW_OFFER_FAILED:
      return { ...state, addNewOfferErrors: action.message };

    case GET_PRIVATE_JOBS_REQUEST:
      return { ...state };
    case GET_PRIVATE_JOBS_SUCCEDED:
      return {
        ...state,
        getPrivateJobsErrors: null,
        privateJobOffers: action.privateJobOffers
      };
    case GET_PRIVATE_JOBS_FAILED:
      return { ...state, getPrivateJobsErrors: action.message };

    case DELETE_OFFER_REQUEST:
      return { ...state };
    case DELETE_OFFER_SUCCEDED:
      return { ...state };
    case DELETE_OFFER_FAILED:
      return { ...state };

    default:
      return state;
  }
};

export default offerReducer;

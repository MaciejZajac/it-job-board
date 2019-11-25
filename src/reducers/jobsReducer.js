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
  DELETE_OFFER_FAILED,
  SET_OFFER_FILTER,
  SET_OFFER_FILTER_SPEC,
  SET_OFFER_FILTER_CITY,
  SET_OFFER_FILTER_TECH
} from "../constants/JobsConstants";

const initialState = {
  //
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_OFFER:
      return { ...state, activeOffer: action.payload };

    case SET_OFFER_FILTER_CITY:
      return {
        ...state,
        cityFilter: action.payload.cityFilter
      };
    case SET_OFFER_FILTER_SPEC:
      return {
        ...state,
        specializationFilter: action.payload.specializationFilter
      };
    case SET_OFFER_FILTER_TECH:
      return {
        ...state,
        techFilter: action.payload.techFilter
      };

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

    // dodawanie nowej oferty
    case ADD_NEW_OFFER_REQUEST:
      return { ...state, addNewOfferErrors: null };
    case ADD_NEW_OFFER_SUCCEDED:
      return { ...state, addNewOfferErrors: null };
    case ADD_NEW_OFFER_FAILED:
      return { ...state, addNewOfferErrors: action.message };

    // pobieranie prywatnej listy ofert
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

    // usuwanie oferty pracy
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

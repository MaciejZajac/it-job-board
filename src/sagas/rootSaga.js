import { takeLatest } from "redux-saga/effects";
import {
  getJobOffersHandler,
  addNewOfferHandler,
  getPrivateJobOffersHandler,
  deleteOneOfferHandler
} from "./jobSaga";
import {
  GET_JOBS_OFFERS_REQUEST,
  ADD_NEW_OFFER_REQUEST,
  GET_PRIVATE_JOBS_REQUEST,
  DELETE_OFFER_REQUEST
} from "../constants/JobsConstants";
import {
  LOGIN_HANDLER_REQUEST,
  REGISTER_HANDLER_REQUEST
} from "../constants/AuthConstants";
import { loginRequestHandler, registerRequestHandler } from "./authSaga";

function* sagas() {
  yield takeLatest(GET_JOBS_OFFERS_REQUEST, getJobOffersHandler);
  yield takeLatest(ADD_NEW_OFFER_REQUEST, addNewOfferHandler);
  yield takeLatest(LOGIN_HANDLER_REQUEST, loginRequestHandler);
  yield takeLatest(GET_PRIVATE_JOBS_REQUEST, getPrivateJobOffersHandler);
  yield takeLatest(DELETE_OFFER_REQUEST, deleteOneOfferHandler);
  yield takeLatest(REGISTER_HANDLER_REQUEST, registerRequestHandler);
  // yield takeLatest(GET_JOBS_OFFERS, getJobOffersHandler);
}

export default sagas;

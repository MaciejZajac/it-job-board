import { takeLatest } from "redux-saga/effects";
import { getJobOffersHandler, addNewOfferHandler } from "./jobSaga";
import {
  GET_JOBS_OFFERS_REQUEST,
  ADD_NEW_OFFER_REQUEST
} from "../constants/JobsConstants";
import { LOGIN_HANDLER_REQUEST } from "../constants/AuthConstants";
import { loginRequestHandler } from "./authSaga";

function* sagas() {
  yield takeLatest(GET_JOBS_OFFERS_REQUEST, getJobOffersHandler);
  yield takeLatest(ADD_NEW_OFFER_REQUEST, addNewOfferHandler);
  yield takeLatest(LOGIN_HANDLER_REQUEST, loginRequestHandler);
  // yield takeLatest(GET_JOBS_OFFERS, getJobOffersHandler);
}

export default sagas;

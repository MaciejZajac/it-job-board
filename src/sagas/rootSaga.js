import { takeLatest } from "redux-saga/effects";
import { getJobOffersHandler, addNewOfferHandler } from "./jobSaga";
import { GET_JOBS_OFFERS, ADD_NEW_OFFER } from "../constants/JobsConstants";
import { LOGIN_HANDLER } from "../constants/AuthConstants";
import { loginRequestHandler } from "./authSaga";

function* sagas() {
  yield takeLatest(GET_JOBS_OFFERS, getJobOffersHandler);
  yield takeLatest(ADD_NEW_OFFER, addNewOfferHandler);
  yield takeLatest(LOGIN_HANDLER, loginRequestHandler);
  // yield takeLatest(GET_JOBS_OFFERS, getJobOffersHandler);
}

export default sagas;

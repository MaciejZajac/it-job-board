import { takeLatest } from "redux-saga/effects";
import { getJobOffersHandler } from "./jobSagas";

function* sagas() {
  yield takeLatest("GET_JOBS_OFFERS", getJobOffersHandler);
}

export default sagas;

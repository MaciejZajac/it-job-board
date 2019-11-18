import { call, put } from "redux-saga/effects";
import { getJobOffers } from "../API/Offer";
// import { getJobOffers }

export function* getJobOffersHandler({ payload }) {
  try {
    const data = yield call(getJobOffers, payload);
    yield put({
      type: "GET_OFFERS_SUCCEEDED",
      jobOffers: data.data.getOfferList.jobOffers
    });
  } catch (e) {
    yield put({ type: "GET_OFFERS_FAILED", message: e });
  }
}

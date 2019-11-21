import { call, put } from "redux-saga/effects";
import {
  getJobOffers,
  addNewOffer,
  getPrivateOfferList,
  deleteOneOffer
} from "../API/Offer";
import {
  GET_JOBS_OFFERS_SUCCEEDED,
  GET_JOBS_OFFERS_FAILED,
  ADD_NEW_OFFER_SUCCEDED,
  ADD_NEW_OFFER_FAILED,
  DELETE_OFFER_SUCCEDED,
  DELETE_OFFER_FAILED,
  GET_PRIVATE_JOBS_SUCCEDED,
  GET_PRIVATE_JOBS_FAILED
} from "../constants/JobsConstants";
// import { getJobOffers }

export function* getJobOffersHandler({ payload }) {
  try {
    const data = yield call(getJobOffers, payload);
    yield put({
      type: GET_JOBS_OFFERS_SUCCEEDED,
      jobOffers: data.data.getOfferList.jobOffers
    });
  } catch (e) {
    yield put({ type: GET_JOBS_OFFERS_FAILED, message: e });
  }
}

export function* addNewOfferHandler({ payload }) {
  try {
    const data = yield call(addNewOffer, payload);
    yield put({
      type: ADD_NEW_OFFER_SUCCEDED,
      jobOffers: data.data.getOfferList.jobOffers
    });
  } catch (e) {
    yield put({ type: ADD_NEW_OFFER_FAILED, message: e });
  }
}

export function* getPrivateJobOffersHandler({ payload }) {
  try {
    const data = yield call(getPrivateOfferList, payload);
    yield put({
      type: GET_PRIVATE_JOBS_SUCCEDED,
      privateJobOffers: data.data.getPrivateOfferList.jobOffers
    });
  } catch (e) {
    yield put({ type: GET_PRIVATE_JOBS_FAILED, message: e });
  }
}

export function* deleteOneOfferHandler({ payload }) {
  try {
    const data = yield call(deleteOneOffer, payload.id, payload.token);
    yield put({
      type: DELETE_OFFER_SUCCEDED
    });
  } catch (e) {
    yield put({ type: DELETE_OFFER_FAILED, message: e });
  }
}

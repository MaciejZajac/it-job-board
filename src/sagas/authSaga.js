import { call, put } from "redux-saga/effects";
import { loginHandler } from "../API/Auth";
import {
  LOGIN_HANDLER_SUCCESS,
  LOGIN_HANDLER_FAILED
} from "../constants/AuthConstants";

export function* loginRequestHandler({ payload }) {
  try {
    console.log("payload", payload);
    const data = yield call(loginHandler, payload);
    console.log("data", data);
    yield put({
      type: LOGIN_HANDLER_SUCCESS,
      jobOffers: data.data.getOfferList.jobOffers
    });
  } catch (e) {
    yield put({ type: LOGIN_HANDLER_FAILED, message: e });
  }
}

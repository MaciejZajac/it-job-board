import { call, put } from "redux-saga/effects";
import { loginHandler } from "../API/Auth";
import history from "../history";
import {
  LOGIN_HANDLER_SUCCESS,
  LOGIN_HANDLER_FAILED,
  REGISTER_HANDLER_SUCCESS,
  REGISTER_HANDLER_FAILED
} from "../constants/AuthConstants";

export function* loginRequestHandler({ payload }) {
  try {
    const data = yield call(loginHandler, payload.login, payload.password);
    yield put({
      type: LOGIN_HANDLER_SUCCESS,
      user: data.data.login
    });
    history.push("/");
  } catch (e) {
    yield put({ type: LOGIN_HANDLER_FAILED, message: e });
  }
}

export function* registerRequestHandler({ payload }) {
  try {
    const data = yield call(loginHandler, payload.login, payload.password);
    yield put({
      type: REGISTER_HANDLER_SUCCESS,
      registed: data.data.register
    });
  } catch (e) {
    yield put({ type: REGISTER_HANDLER_FAILED, message: e });
  }
}
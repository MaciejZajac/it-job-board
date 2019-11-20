import { combineReducers } from "redux";
import offerReducer from "./jobsReducer";
import authReducer from "./authReducer";

export default () => combineReducers({ offerReducer, authReducer });

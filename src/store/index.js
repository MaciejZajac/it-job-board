import { createStore, combineReducers, compose } from "redux";
import reducer from "../reducers/reducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  reducer
});

const store = createStore(rootReducer, storeEnhancers());

export default store;

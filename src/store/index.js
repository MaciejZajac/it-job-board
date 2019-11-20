import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas/rootSaga";
import rootReducer from "../reducers/rootReducer";
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;

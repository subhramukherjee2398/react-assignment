/* import { applyMiddleware, createStore } from "redux"; */
import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./rootReducer";
/* import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store; */

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
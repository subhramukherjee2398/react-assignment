import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk]


export const store = createStore(rootReducer,applyMiddleware(...middleware))
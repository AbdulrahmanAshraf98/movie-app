import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootRuducer";

const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	thunk,
].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

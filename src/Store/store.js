import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootRuducer";
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	thunk,
].filter(Boolean);
const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers,
);
export const persistor = persistStore(store);

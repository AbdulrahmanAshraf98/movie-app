import { createActions } from "../../utilities/createActions";
import {
	addToFavoriteDocument,
	readFavoriteDocument,
	RemoveFavoriteDocument,
} from "../../utilities/firebase/firebase";
import { FAVORITE_ACTIONS_TYPES } from "./favorite.types";

export const fetchFavoriteDataStart = () =>
	createActions(FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_START);
export const fetchFavoriteDataSuccess = (favoriteItems) =>
	createActions(
		FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_SUCCESS,
		favoriteItems,
	);
export const fetchFavoriteDataFailed = (error) =>
	createActions(FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_FAILED, error);

export const fetchFavoriteData = (data) => async (dispatch) => {
	dispatch(fetchFavoriteDataStart());
	try {
		// const data = await readFavoriteDocument(userID);
		dispatch(fetchFavoriteDataSuccess(data));
	} catch (error) {
		dispatch(fetchFavoriteDataFailed(error));
	}
};
export const postFavoriteDataStart = () =>
	createActions(FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEMS_START);
export const postFavoriteDataSuccess = (favoriteItems) =>
	createActions(
		FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEM_SUCCESS,
		favoriteItems,
	);
export const postFavoriteDataFailed = (error) =>
	createActions(FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEM_FAILED, error);

export const postAddFavoriteItem = (userID, item) => async (dispatch) => {
	dispatch(postFavoriteDataStart());
	try {
		const snap = await addToFavoriteDocument(userID, item);
		dispatch(postFavoriteDataSuccess());
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
	}
};
export const postRemoveFavoriteItem = (userID, item) => async (dispatch) => {
	dispatch(postFavoriteDataStart());
	try {
		const snap = RemoveFavoriteDocument(userID, item);
		dispatch(postFavoriteDataSuccess());
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
	}
};

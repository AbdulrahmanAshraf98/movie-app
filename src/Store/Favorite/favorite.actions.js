import { toast } from "react-toastify";
import { createActions } from "../../utilities/createActions";
import {
	addToFavoriteDocument,
	deleteFavoriteDocument,
	readFavoriteDocument,
	removeFavoriteDocument,
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
	toast.dismiss();
	dispatch(postFavoriteDataStart());
	try {
		toast.promise(addToFavoriteDocument(userID, item), {
			pending: "Add Item is pending",
			success: "item Added To Favorite 👌",
			error: "Failed To Add Item To Favorite 🤯",
		});
		dispatch(postFavoriteDataSuccess());
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
	}
};
export const postRemoveFavoriteItem = (userID, item) => async (dispatch) => {
	toast.dismiss();
	dispatch(postFavoriteDataStart());
	try {
		toast.promise(removeFavoriteDocument(userID, item), {
			pending: "Remove Item is pending",
			success: "item Removed To Favorite 👌",
			error: "Failed To Remove Item To Favorite 🤯",
		});
		dispatch(postFavoriteDataSuccess());
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
	}
};
export const postDeleteAllFavoriteItems = (userID) => async (dispatch) => {
	toast.dismiss();
	dispatch(postFavoriteDataStart());
	try {
		toast.promise(deleteFavoriteDocument(userID), {
			pending: "Clear All Favorite Items is pending",
			success: "Favorite Items Deleted 👌",
			error: "Failed To Delete Item To Favorite 🤯",
		});
		dispatch(postFavoriteDataSuccess());
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
	}
};

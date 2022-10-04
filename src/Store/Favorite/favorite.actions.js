import { toast } from "react-hot-toast";
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
	toast.loading("Add Item Start", {
		id: "Add Start",
	});
	dispatch(postFavoriteDataStart());
	try {
		const snap = await addToFavoriteDocument(userID, item);
		dispatch(postFavoriteDataSuccess());
		toast.success("Item Added  To Favorite", {
			id: "Added",
		});
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
		toast.success(error.message, {
			id: "Add Error",
		});
	}
};
export const postRemoveFavoriteItem = (userID, item) => async (dispatch) => {
	toast.dismiss();
	toast.loading("Remove Item Start", {
		id: "Remove Start",
	});
	dispatch(postFavoriteDataStart());
	try {
		const snap = removeFavoriteDocument(userID, item);
		dispatch(postFavoriteDataSuccess());
		toast.success("Item Removed  From Favorite", {
			id: "Removed",
		});
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
		toast.error(error.message, {
			id: "Remove Error",
		});
	}
};
export const postDeleteAllFavoriteItems = (userID) => async (dispatch) => {
	toast.dismiss();
	toast.loading("Delete All Items Start", {
		id: "Delete Start",
	});
	dispatch(postFavoriteDataStart());
	try {
		const snap = deleteFavoriteDocument(userID);
		dispatch(postFavoriteDataSuccess());
		toast.success("ALl  Items Deleted", {
			id: "Deleted",
		});
	} catch (error) {
		dispatch(postFavoriteDataFailed(error));
		toast.error(error.message, {
			id: "Delete Error",
		});
	}
};

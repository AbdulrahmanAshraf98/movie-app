import { FAVORITE_ACTIONS_TYPES } from "./favorite.types";

const initialState = {
	favoriteData: [],
	isLoading: false,
	error: null,
};

export const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_START: {
			return { ...state, isLoading: true };
		}

		case FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_SUCCESS: {
			return { ...state, isLoading: false, favoriteData: action.payload };
		}
		case FAVORITE_ACTIONS_TYPES.FETCH_FAVORITE_ITEMS_FAILED:
			return { ...state, isLoading: false, error: action.payload };
		case FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEMS_START:
			return { ...state, isLoading: true };
		case FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEM_SUCCESS:
			return { ...state, isLoading: false };
		case FAVORITE_ACTIONS_TYPES.POST_FAVORITE_ITEM_FAILED:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
export default favoriteReducer;

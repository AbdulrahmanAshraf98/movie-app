import { SEARCH_FEED_RESULT_ACTIONS_TYPES } from "./searchFeedResult.types";

const initialState = {
	isLoading: false,
	searchResults: [],
	error: null,
};
export const searchFeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_START:
			return { ...state, isLoading: true };
		case SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_SUCCESS: {
			console.log(state, action);
			return { ...state, isLoading: false, searchResults: action.payload };
		}
		case SEARCH_FEED_RESULT_ACTIONS_TYPES.RESET_SEARCH_FEED_RESULT:
			return { ...state, isLoading: false, searchResults: [] };

		case SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

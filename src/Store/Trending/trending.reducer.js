import { TRENDING_ACTIONS_TYPES } from "./trending.types";

const initialState = {
	isLoading: false,
	trendingData: [],
	error: null,
};
export const trendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case TRENDING_ACTIONS_TYPES.FETCH_TRENDING_START:
			return { ...state, isLoading: true };
		case TRENDING_ACTIONS_TYPES.FETCH_TRENDING_SUCCESS: {
			return { ...state, isLoading: false, trendingData: action.payload };
		}
		case TRENDING_ACTIONS_TYPES.FETCH_TRENDING_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

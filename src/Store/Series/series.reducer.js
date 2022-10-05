import { SERIES_ACTIONS_TYPES } from "./series.types";

const initialState = {
	isLoading: false,
	seriesData: [],
	totalPages: 500,
	error: null,
};
export const seriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SERIES_ACTIONS_TYPES.FETCH_SERIES_START:
			return { ...state, isLoading: true };
		case SERIES_ACTIONS_TYPES.FETCH_SERIES_SUCCESS: {
			return { ...state, isLoading: false, seriesData: action.payload };
		}

		case SERIES_ACTIONS_TYPES.FETCH_SERIES_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

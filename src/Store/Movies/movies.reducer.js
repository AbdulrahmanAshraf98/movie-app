import { MOVIES_ACTIONS_TYPES } from "./movies.type";

const initialState = {
	isLoading: false,
	moviesData: [],
	totalPages: 500,
	error: null,
};
export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVIES_ACTIONS_TYPES.FETCH_MOVIES_START:
			return { ...state, isLoading: true };
		case MOVIES_ACTIONS_TYPES.FETCH_MOVIES_SUCCESS: {
			return {
				...state,
				isLoading: false,
				moviesData: action.payload,
			};
		}

		case MOVIES_ACTIONS_TYPES.FETCH_MOVIES_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

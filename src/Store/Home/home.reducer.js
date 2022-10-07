import { HOME_ACTIONS_TYPES } from "./home.types";

const initialState = {
	isLoading: false,
	homeData: {
		trending: [],
		popularMovies: [],
		nowPlayingMovies: [],
		topRatedMovies: [],
		popularSeries: [],
		seriesOnTheAir: [],
		topRatedSeries: [],
	},
	error: null,
};
export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case HOME_ACTIONS_TYPES.FETCH_HomeData_START:
			return { ...state, isLoading: true };
		case HOME_ACTIONS_TYPES.FETCH_HomeData_SUCCESS: {
			return { ...state, isLoading: false, homeData: action.payload };
		}
		case HOME_ACTIONS_TYPES.FETCH_HomeData_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

import { DETAILS_ACTIONS_TYPES } from "./details.types";

const initialState = {
	detailsData: {
		movieDetails: {
			movieInfo: {},
			recommendations: [],
			cast: [],
		},
		seriesDetails: {
			seriesInfo: {},
			recommendations: [],
			cast: [],
		},
	},
	isLoading: false,
	error: null,
};
export const detailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case DETAILS_ACTIONS_TYPES.FETCH_DETAILS_START:
			return { ...state, isLoading: true, error: null };
		case DETAILS_ACTIONS_TYPES.FETCH_MOVIE_DETAILS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				detailsData: {
					seriesDetails: state.detailsData.seriesDetails,
					movieDetails: action.payload,
				},
			};
		}
		case DETAILS_ACTIONS_TYPES.FETCH_SERIES_DETAILS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				detailsData: {
					movieDetails: state.detailsData.movieDetails,
					seriesDetails: action.payload,
				},
			};
		}

		case DETAILS_ACTIONS_TYPES.FETCH_DETAILS_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

import { Videos_ACTIONS_TYPES } from "./videos.types";

const initialState = {
	videosData: [],
	isLoading: false,
	error: null,
};
export const videosReducer = (state = initialState, action) => {
	switch (action.type) {
		case Videos_ACTIONS_TYPES.FETCH_VIDEOS_START:
			return { ...state, isLoading: true, error: null };
		case Videos_ACTIONS_TYPES.FETCH_VIDEOS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				videosData: action.payload,
			};
		}
		case Videos_ACTIONS_TYPES.FETCH_VIDEOS_FAILED:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

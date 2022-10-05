import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { Videos_ACTIONS_TYPES } from "./videos.types";
export const fetchVideosDataStart = () =>
	createActions(Videos_ACTIONS_TYPES.FETCH_VIDEOS_START, null);
export const fetchVideosDataSuccess = (trending) =>
	createActions(Videos_ACTIONS_TYPES.FETCH_VIDEOS_SUCCESS, trending);
export const fetchVideosDataFailed = (error) =>
	createActions(Videos_ACTIONS_TYPES.FETCH_VIDEOS_FAILED, error);
export const fetchVideosData = (type, id) => async (dispatch) => {
	dispatch(fetchVideosDataStart());
	try {
		const responseDate = await fetchFromTmdbApi(
			`${type}/${id}/videos?language=en-US`,
		);
		dispatch(fetchVideosDataSuccess(responseDate.results));
	} catch (error) {
		dispatch(fetchVideosDataFailed(error));
	}
};

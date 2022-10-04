import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { MOVIES_ACTIONS_TYPES } from "./movies.type";

export const fetchMoviesDataStart = () =>
	createActions(MOVIES_ACTIONS_TYPES.FETCH_MOVIES_START, null);
export const fetchMoviesDataSuccess = (Movies) =>
	createActions(MOVIES_ACTIONS_TYPES.FETCH_MOVIES_SUCCESS, Movies);
export const fetchMoviesDataFailed = (error) =>
	createActions(MOVIES_ACTIONS_TYPES.FETCH_MOVIES_FAILED, error);
export const fetchMoviesData = (page, sort, category) => async (dispatch) => {
	dispatch(fetchMoviesDataStart());
	try {
		const responseDate = await fetchFromTmdbApi(
			`discover/movie?language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${category}`,
		);
		dispatch(fetchMoviesDataSuccess(responseDate.results));
	} catch (error) {
		dispatch(fetchMoviesDataFailed(error));
	}
};

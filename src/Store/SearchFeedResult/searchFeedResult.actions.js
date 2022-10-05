import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { SEARCH_FEED_RESULT_ACTIONS_TYPES } from "./searchFeedResult.types";

export const fetchSearchResultDataStart = () =>
	createActions(
		SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_START,
		null,
	);
export const fetchSearchResultDataSuccess = (Movies) =>
	createActions(
		SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_SUCCESS,
		Movies,
	);
export const fetchSearchResultDataFailed = (error) =>
	createActions(
		SEARCH_FEED_RESULT_ACTIONS_TYPES.FETCH_SEARCH_FEED_RESULT_FAILED,
		error,
	);
export const resetSearchResultDataFailed = (error) =>
	createActions(SEARCH_FEED_RESULT_ACTIONS_TYPES.RESET_SEARCH_FEED_RESULT);
export const fetchSearchResultData = (searchTerm) => async (dispatch) => {
	dispatch(fetchSearchResultDataStart());
	try {
		const responseDate = await fetchFromTmdbApi(
			`search/multi?language=en-US&query=${searchTerm}&page=1&include_adult=false}`,
		);

		console.log(responseDate);
		dispatch(fetchSearchResultDataSuccess(responseDate.results));
	} catch (error) {
		dispatch(fetchSearchResultDataFailed(error));
	}
};

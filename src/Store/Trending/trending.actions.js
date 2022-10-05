import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { TRENDING_ACTIONS_TYPES } from "./trending.types";

export const fetchTrendingDataStart = () =>
	createActions(TRENDING_ACTIONS_TYPES.FETCH_TRENDING_START, null);
export const fetchTrendingDataSuccess = (trending) =>
	createActions(TRENDING_ACTIONS_TYPES.FETCH_TRENDING_SUCCESS, trending);
export const fetchTrendingDataFailed = (error) =>
	createActions(TRENDING_ACTIONS_TYPES.FETCH_TRENDING_FAILED, error);
export const fetchTrendingData = () => async (dispatch) => {
	dispatch(fetchTrendingDataStart());
	try {
		const responseDate = await fetchFromTmdbApi(`trending/all/week?page=1`);
		dispatch(fetchTrendingDataSuccess(responseDate.results));
	} catch (error) {
		dispatch(fetchTrendingDataFailed(error));
	}
};

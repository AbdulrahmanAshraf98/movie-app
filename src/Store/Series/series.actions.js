import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { SERIES_ACTIONS_TYPES } from "./series.types";

export const fetchSeriesDataStart = () =>
	createActions(SERIES_ACTIONS_TYPES.FETCH_SERIES_START, null);
export const fetchSeriesDataSuccess = (series) =>
	createActions(SERIES_ACTIONS_TYPES.FETCH_SERIES_SUCCESS, series);
export const fetchSeriesDataFailed = (error) =>
	createActions(SERIES_ACTIONS_TYPES.FETCH_SERIES_FAILED, error);
export const fetchSeriesData = (page, sort, category) => async (dispatch) => {
	dispatch(fetchSeriesDataStart());
	try {
		const responseDate = await fetchFromTmdbApi(
			`discover/tv?sort_by=${sort}&page=${page}&with_genres=${category}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
		);
		dispatch(fetchSeriesDataSuccess(responseDate.results));
	} catch (error) {
		dispatch(fetchSeriesDataFailed(error));
	}
};

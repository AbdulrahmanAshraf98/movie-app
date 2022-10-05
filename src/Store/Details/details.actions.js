import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { DETAILS_ACTIONS_TYPES } from "./details.types";

export const fetchDetailsDataStart = () =>
	createActions(DETAILS_ACTIONS_TYPES.FETCH_DETAILS_START, null);
export const fetchMoviesDetailsDataSuccess = (MoviesDetails) =>
	createActions(
		DETAILS_ACTIONS_TYPES.FETCH_MOVIE_DETAILS_SUCCESS,
		MoviesDetails,
	);
export const fetchSeriesDetailsDataSuccess = (seriesDetails) =>
	createActions(
		DETAILS_ACTIONS_TYPES.FETCH_SERIES_DETAILS_SUCCESS,
		seriesDetails,
	);
export const fetchDetailsDataFailed = (error) =>
	createActions(DETAILS_ACTIONS_TYPES.FETCH_DETAILS_FAILED, error);
export const fetchMoviesDetailsData = (id) => async (dispatch) => {
	dispatch(fetchDetailsDataStart());
	try {
		const responseDate = await Promise.all([
			fetchFromTmdbApi(`movie/${id}?language=en-US`),
			fetchFromTmdbApi(`movie/${id}/recommendations?language=en-US&page=1`),
			fetchFromTmdbApi(`movie/${id}/credits?&language=en-US`),
		]);
		dispatch(
			fetchMoviesDetailsDataSuccess({
				movieInfo: responseDate[0],
				recommendations: responseDate[1].results,
				cast: responseDate[2].cast,
			}),
		);
	} catch (error) {
		dispatch(fetchDetailsDataFailed(error));
	}
};
export const fetchSeriesDetailsData = (id) => async (dispatch) => {
	dispatch(fetchDetailsDataStart());
	try {
		const responseDate = await Promise.all([
			fetchFromTmdbApi(`tv/${id}?language=en-US`),
			fetchFromTmdbApi(`tv/${id}/recommendations?language=en-US&page=1`),
			fetchFromTmdbApi(`tv/${id}/credits?&language=en-US`),
		]);
		dispatch(
			fetchSeriesDetailsDataSuccess({
				seriesInfo: responseDate[0],
				recommendations: responseDate[1].results,
				cast: responseDate[2].cast,
			}),
		);
	} catch (error) {
		dispatch(fetchDetailsDataFailed(error));
	}
};

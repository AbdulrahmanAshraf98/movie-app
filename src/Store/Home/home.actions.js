import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import { createActions } from "../../utilities/createActions";
import { HOME_ACTIONS_TYPES } from "./home.types";

export const fetchHomeDataStart = () =>
	createActions(HOME_ACTIONS_TYPES.FETCH_HomeData_START, null);
export const fetchHomeDataSuccess = (trending) =>
	createActions(HOME_ACTIONS_TYPES.FETCH_HomeData_SUCCESS, trending);
export const fetchHomeDataFailed = (error) =>
	createActions(HOME_ACTIONS_TYPES.FETCH_HomeData_FAILED, error);
export const fetchHomeData = () => async (dispatch) => {
	dispatch(fetchHomeDataStart());
	try {
		const responseDate = await Promise.all([
			fetchFromTmdbApi(`trending/all/week?page=1`),
			fetchFromTmdbApi(`movie/popular?page=1`),
			fetchFromTmdbApi(`movie/now_playing?page=1`),
			fetchFromTmdbApi(`movie/top_rated?`),
			fetchFromTmdbApi(`tv/popular?page=1`),
			fetchFromTmdbApi(`tv/on_the_air?page=1`),
			fetchFromTmdbApi(`tv/top_rated?`),
		]);

		const homeData = responseDate.map(
			(responseDataItem) => responseDataItem.results,
		);
		dispatch(
			fetchHomeDataSuccess({
				trending: homeData[0],
				popularMovies: homeData[1],
				nowPlayingMovies: homeData[2],
				topRatedMovies: homeData[3],
				popularSeries: homeData[4],
				seriesOnTheAir: homeData[5],
				topRatedSeries: homeData[6],
			}),
		);
	} catch (error) {
		dispatch(fetchHomeDataFailed(error));
	}
};

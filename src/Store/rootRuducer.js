import { combineReducers } from "redux";
import { userReducer } from "./Auth/user.reducer";
import { detailsReducer } from "./Details/details.reducer";
import favoriteReducer from "./Favorite/favorite.reducer";
import { homeReducer } from "./Home/home.reducer";
import { moviesReducer } from "./Movies/movies.reducer";
import { searchFeedReducer } from "./SearchFeedResult/searchFeedResult.reducer";
import { seriesReducer } from "./Series/series.reducer";
import { videosReducer } from "./Videos/videos.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	home: homeReducer,
	movies: moviesReducer,
	series: seriesReducer,
	details: detailsReducer,
	search: searchFeedReducer,
	favorite: favoriteReducer,
	videos: videosReducer,
});

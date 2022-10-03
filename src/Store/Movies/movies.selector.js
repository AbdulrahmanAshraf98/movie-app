import { createSelector } from "reselect";

const moviesReducerSelector = (state) => state.movies;
export const selectMoviesData = createSelector(
	[moviesReducerSelector],
	(moviesSliceSelector) => moviesSliceSelector.moviesData,
);
export const selectTotalPages = createSelector(
	[moviesReducerSelector],
	(moviesSliceSelector) => moviesSliceSelector.totalPages,
);
export const selectMoviesIsLoading = createSelector(
	[moviesReducerSelector],
	(moviesSliceSelector) => moviesSliceSelector.isLoading,
);
export const selectMoviesDetailsError = createSelector(
	[moviesReducerSelector],
	(moviesSliceSelector) => moviesSliceSelector.error,
);

import { createSelector } from "reselect";

const favoriteReducerSelector = (state) => state.favorite;
export const selectFavoriteData = createSelector(
	[favoriteReducerSelector],
	(favoriteSliceSelector) => favoriteSliceSelector.favoriteData,
);
export const selectFavoriteIsLoading = createSelector(
	[favoriteReducerSelector],
	(favoriteSliceSelector) => favoriteSliceSelector.isLoading,
);
export const selectFavoriteDetailsError = createSelector(
	[favoriteReducerSelector],
	(favoriteSliceSelector) => favoriteSliceSelector.error,
);

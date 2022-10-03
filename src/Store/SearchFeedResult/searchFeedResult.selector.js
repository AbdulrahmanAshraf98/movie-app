import { createSelector } from "reselect";

const SearchReducerSelector = (state) => state.search;
export const selectSearchResultData = createSelector(
	[SearchReducerSelector],
	(searchSliceSelector) => searchSliceSelector.searchResults,
);
export const selectSearchResultIsLoading = createSelector(
	[SearchReducerSelector],
	(searchSliceSelector) => searchSliceSelector.isLoading,
);
export const selectSearchResultError = createSelector(
	[SearchReducerSelector],
	(searchSliceSelector) => searchSliceSelector.error,
);

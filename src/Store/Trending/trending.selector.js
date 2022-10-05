import { createSelector } from "reselect";

const trendingReducerSelector = (state) => state.trending;
export const selectTrendingData = createSelector(
	[trendingReducerSelector],
	(trendingSliceSelector) => trendingSliceSelector.trendingData,
);

export const selectTrendingIsLoading = createSelector(
	[trendingReducerSelector],
	(trendingSliceSelector) => trendingSliceSelector.isLoading,
);
export const selectTrendingError = createSelector(
	[trendingReducerSelector],
	(trendingSliceSelector) => trendingSliceSelector.error,
);

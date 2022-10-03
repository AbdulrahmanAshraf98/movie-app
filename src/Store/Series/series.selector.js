import { createSelector } from "reselect";

const seriesReducerSelector = (state) => state.series;
export const selectSeriesData = createSelector(
	[seriesReducerSelector],
	(seriesSliceSelector) => seriesSliceSelector.seriesData,
);
export const selectSeriesTotalPages = createSelector(
	[seriesReducerSelector],
	(seriesSliceSelector) => seriesSliceSelector.totalPages,
);
export const selectSeriesIsLoading = createSelector(
	[seriesReducerSelector],
	(seriesSliceSelector) => seriesSliceSelector.isLoading,
);
export const selectSeriesDetailsError = createSelector(
	[seriesReducerSelector],
	(seriesSliceSelector) => seriesSliceSelector.error,
);

import { createSelector } from "reselect";

const detailsReducerSelector = (state) => state.details;
export const selectDetailsData = createSelector(
	[detailsReducerSelector],
	(detailsSliceSelector) => detailsSliceSelector.detailsData,
);
export const selectMoviesDetailsData = createSelector(
	[selectDetailsData],
	(detailsSelector) => detailsSelector.movieDetails,
);
export const selectSeriesDetailsData = createSelector(
	[selectDetailsData],
	(detailsSelector) => detailsSelector.seriesDetails,
);
export const selectDetailsIsLoading = createSelector(
	[detailsReducerSelector],
	(detailsSliceSelector) => detailsSliceSelector.isLoading,
);
export const selectDetailsError = createSelector(
	[detailsReducerSelector],
	(detailsSliceSelector) => detailsSliceSelector.error,
);

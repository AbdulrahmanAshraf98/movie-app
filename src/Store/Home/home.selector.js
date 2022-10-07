import { createSelector } from "reselect";

const homeReducerSelector = (state) => state.home;
export const selectHomeData = createSelector(
	[homeReducerSelector],
	(homeSliceSelector) => homeSliceSelector.homeData,
);

export const selectHomeIsLoading = createSelector(
	[homeReducerSelector],
	(homeSliceSelector) => homeSliceSelector.isLoading,
);
export const selectHomeError = createSelector(
	[homeReducerSelector],
	(homeSliceSelector) => homeSliceSelector.error,
);

import { createSelector } from "reselect";

const videosReducerSelector = (state) => state.videos;
export const selectVideosData = createSelector(
	[videosReducerSelector],
	(videosSliceSelector) => videosSliceSelector.videosData,
);

export const selectVideosIsLoading = createSelector(
	[videosReducerSelector],
	(videosSliceSelector) => videosSliceSelector.isLoading,
);
export const selectVideosError = createSelector(
	[videosReducerSelector],
	(videosSliceSelector) => videosSliceSelector.error,
);

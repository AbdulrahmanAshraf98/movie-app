import React from "react";
import Filter from "../Filter/Filter";

const SeriesFilter = ({ changeGenresHandler, changeSortingHandler }) => {
	return (
		<Filter
			changeGenresHandler={changeGenresHandler}
			changeSortingHandler={changeSortingHandler}
			mediaType="tv"
		/>
	);
};

export default SeriesFilter;

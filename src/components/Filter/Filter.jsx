import React from "react";
import Genres from "../Genres/Genres";
import SortBy from "../SortBy/SortBy";
import styled from "./Filter.module.css";
function Filter({
	changeGenresHandler,
	changeSortingHandler,
	mediaType = "movie",
}) {
	return (
		<div className={styled.filter}>
			<Genres
				onClick={changeGenresHandler}
				className={styled.col}
				mediaType={mediaType}
			/>
			<SortBy
				onClick={changeSortingHandler}
				className={`${styled.col} sortby`}
				mediaType={mediaType}
			/>
		</div>
	);
}

export default Filter;

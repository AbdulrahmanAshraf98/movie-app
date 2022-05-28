import React from "react";
import Genres from "../Genres/Genres";
import SortBy from "../SortBy/SortBy";
import styled from "./Filter.module.css";
function Filter({ changeGenresHandler, changeSortingHandler }) {
	return (
		<div className={styled.filter}>
			<Genres onClick={changeGenresHandler} className={styled.col} />
			<SortBy
				onClick={changeSortingHandler}
				className={`${styled.col} sortby`}
			/>
		</div>
	);
}

export default Filter;

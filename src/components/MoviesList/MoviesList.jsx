import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Filter from "../Filter/Filter";
import MovieItem from "./MovieItem/MovieItem";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function MoviesList({ movies }) {
	return movies.map((movie) => {
		return (
			<div className="col" key={movie.id}>
				<MovieItem key={movie.id} movie={movie} />
			</div>
		);
	});
}

export default MoviesList;

import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Filter from "../Filter/Filter";
import MovieItem from "./MovieItem/MovieItem";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function MoviesList() {
	const DefualtValueGenres = localStorageIsFound("moviegenres")
		? getLocalStorage("moviegenres", "object").id
		: "";
	const DefualtValuesortingBy = localStorageIsFound("moviesSortBy")
		? getLocalStorage("moviesSortBy", "object").name
		: "popularity.desc";
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&region=us&sort_by=${sortingBy}&include_adult=false&include_video=true&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`,
	);
	const [responseData, isLoading, error] = useFetch(url);
	const changeGenresHandler = useCallback((id) => {
		setGenres(id);
	}, []);
	const changeSortingHandler = useCallback((id) => {
		if (id === "1") {
			setSortingBy("popularity.asc");
		} else {
			setSortingBy("popularity.desc");
		}
	}, []);
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&region=us&sort_by=${sortingBy}&include_adult=false&include_video=true&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`,
		);
	}, [url, genres, sortingBy, isLoading, error]);
	let movies = responseData.results;

	return (
		<>
			{isLoading && !movies && <LoadingSpinner />}
			{/* {movies && !isLoading && }  */}
			{movies && !isLoading && (
				<>
					<Filter
						changeGenresHandler={changeGenresHandler}
						changeSortingHandler={changeSortingHandler}
					/>
					{movies.map((movie) => {
						return (
							<div className="col" key={movie.id}>
								<MovieItem key={movie.id} movie={movie} />
							</div>
						);
					})}
				</>
			)}
			{movies && movies.length === 0 && <p>noDataFound</p>}
		</>
	);
}

export default MoviesList;

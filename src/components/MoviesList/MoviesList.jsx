import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Genres from "../Genres/Genres";
import MovieItem from "./MovieItem/MovieItem";

function MoviesList() {
	const DefualtValueGenres = JSON.parse(localStorage.getItem("genres"))
		? JSON.parse(localStorage.getItem("genres")).id
		: "";
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState("popularity.desc");
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&region=us&sort_by=${sortingBy}&include_adult=false&include_video=true&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`,
	);

	const [responseData, isLoading, error] = useFetch(url);
	const changeGenresHandler = useCallback((id) => {
		setGenres(id);
	}, []);
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&region=us&sort_by=${sortingBy}&include_adult=false&include_video=true&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`,
		);
		console.log();
	}, [url, genres, sortingBy, isLoading, error]);
	let movies = responseData.results;

	return (
		<>
			{isLoading && !movies && <p>loading</p>}
			{/* {movies && !isLoading && } */}
			{movies && !isLoading && (
				<>
					<Genres onClick={changeGenresHandler} />
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

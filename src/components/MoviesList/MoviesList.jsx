import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import MovieItem from "./MovieItem/MovieItem";

function MoviesList() {
	const [url, setUrl] = useState(
		"https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=popularity.desc",
	);
	const [responseData, isLoading] = useFetch(url);
	useEffect(() => {}, [url]);
	let movies = responseData.results;
	return (
		<>
			{isLoading && !movies && <p>loading</p>}
			{movies &&
				movies.map((movie) => {
					return <MovieItem key={movie.id} movie={movie} />;
				})}
		</>
	);
}

export default MoviesList;

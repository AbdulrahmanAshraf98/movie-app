import React from "react";
import MovieItem from "./MovieItem/MovieItem";

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

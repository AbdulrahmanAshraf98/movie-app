import React, { useCallback, useContext, useEffect, useState } from "react";
import FavoriteContext from "../../Store/Context/FavoriteContext/FavoriteContext";
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

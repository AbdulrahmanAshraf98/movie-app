import React, { useEffect, useState } from "react";
import Card from "../../components/UI/Card/Card";
import Container from "../../components/UI/Container/Container";
import "./Movies.css";
function Movies() {
	const [movies, SetMovies] = useState([]);
	const fetchMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=popularity.desc",
		);
		const data = await response.json();
		return data.results;
	};
	useEffect(() => {
		const data = fetchMovies();
		data.then((data) => SetMovies((prevState) => data));
	}, []);

	return (
		<div className="movies">
			<Container>
				<div className="row">
					{movies.length > 0 &&
						movies.map((movie) => {
							return (
								<div className="col" key={movie.id}>
									<Card data={movie} />
								</div>
							);
						})}
				</div>
			</Container>
		</div>
	);
}

export default Movies;

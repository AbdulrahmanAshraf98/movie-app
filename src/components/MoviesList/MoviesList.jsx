import useFetch from "../../Hooks/useFetch";
import MovieItem from "./MovieItem/MovieItem";

function MoviesList() {
	// const [movies, SetMovies] = useState([]);
	const [responseData, ,] = useFetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=popularity.desc",
	);
	let movies = responseData.results;
	// const fetchMovies = async () => {
	// 	const response = await fetch(
	// 		"https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=popularity.desc",
	// 	);
	// 	const data = await response.json();
	// 	return data.results;
	// };
	// useEffect(() => {
	// 	SetMovies((prevState) => responseData.results);
	// }, [responseData]);
	return (
		movies &&
		movies.map((movie) => {
			return <MovieItem key={movie.id} movie={movie} />;
		})
	);
}

export default MoviesList;

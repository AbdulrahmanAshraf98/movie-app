import Genres from "../../components/Genres/Genres";
import MoviesList from "../../components/MoviesList/MoviesList";
import Container from "../../components/UI/Container/Container";
import "./Movies.css";
function Movies() {
	return (
		<section className="movies">
			<Container>
				<div className="row">
					<MoviesList />
				</div>
			</Container>
		</section>
	);
}

export default Movies;

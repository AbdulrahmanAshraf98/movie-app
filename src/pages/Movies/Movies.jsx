import { useContext } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchModal from "../../components/SearchModal/SearchModal";
import Container from "../../components/UI/Container/Container";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import "./Movies.css";
function Movies() {
	const context = useContext(ModalContext);

	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type="movie" />}
			{!context.SearchModuleIsOpen && (
				<section className="movies">
					<Container>
						<div className="row">
							<MoviesList />
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Movies;

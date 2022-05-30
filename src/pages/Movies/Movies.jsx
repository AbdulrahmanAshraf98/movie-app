import { useCallback, useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchModal from "../../components/SearchModal/SearchModal";
import Container from "../../components/UI/Container/Container";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import "./Movies.css";
function Movies() {
	const context = useContext(ModalContext);
	let DefualtValueGenres = localStorageIsFound("moviegenres")
		? getLocalStorage("moviegenres", "object").id
		: "";
	let DefualtValuesortingBy = localStorageIsFound("moviesSortBy")
		? getLocalStorage("moviesSortBy", "object").name
		: "popularity.desc";
	const [page, setPage] = useState(1);
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=${sortingBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`,
	);
	const [responseData, isLoading, error] = useFetch(url);
	let movies = responseData.results;
	const totalpage = responseData.total_pages;
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
	const changePageNumberHandler = (pageNumber) => {
		setPage(pageNumber);
	};
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&sort_by=${sortingBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`,
		);
	}, [url, page, genres, sortingBy, isLoading, error]);
	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type={"movie"} />}
			{!context.SearchModuleIsOpen && (
				<section className="movies">
					<Container>
						<div className="row">
							<Filter
								changeGenresHandler={changeGenresHandler}
								changeSortingHandler={changeSortingHandler}
							/>
							{isLoading && !movies && <LoadingSpinner />}
							{error && !isLoading && !movies && <p>{error}</p>}
							{movies && !isLoading && <MoviesList movies={movies} />}
							{movies && movies.length === 0 && <p>noDataFound</p>}
							{movies && !isLoading && (
								<Pagination
									currentPage={page}
									itemsPerPage={10}
									SetPageNumber={changePageNumberHandler}
									totalPages={totalpage}
								/>
							)}
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Movies;

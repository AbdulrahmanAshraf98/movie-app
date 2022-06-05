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
	setLocalStorage,
} from "../../utilities/Localstorage";
import { scrollTop } from "../../utilities/ScrollTop";
import "./Movies.css";

function Movies() {
	const context = useContext(ModalContext);
	const DefualtValueGenres = localStorageIsFound("moviegenres")
		? getLocalStorage("moviegenres", "object").id
		: "";
	const DefualtValuesortingBy = localStorageIsFound("movieSortBy")
		? getLocalStorage("movieSortBy", "object").name
		: "popularity.desc";
	const [page, setPage] = useState(1);
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=${sortingBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`,
	);
	const [responseData, isLoading, error] = useFetch(url);
	let movies = responseData.results;
	const totalpage = responseData.total_pages;
	const changeGenresHandler = useCallback((id) => {
		setGenres(id);
		setPage(1);
	}, []);
	const changeSortingHandler = useCallback((id) => {
		if (id === "1") {
			setSortingBy("popularity.asc");
		} else {
			setSortingBy("popularity.desc");
		}
		setPage(1);
	}, []);
	const changePageNumberHandler = (pageNumber) => {
		setPage(pageNumber);
	};
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=${sortingBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`,
		);
	}, [url, page, genres, sortingBy, isLoading, error]);
	useEffect(() => {
		scrollTop();
	}, []);
	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type={"movie"} />}
			{!context.SearchModuleIsOpen && (
				<section className="movies">
					<Container>
						<div className="row">
							{isLoading && !movies && <LoadingSpinner />}
							{error && !isLoading && !movies && <p>{error}</p>}
							{movies && !isLoading && (
								<>
									<Filter
										changeGenresHandler={changeGenresHandler}
										changeSortingHandler={changeSortingHandler}
									/>
									<MoviesList movies={movies} />
									{movies && movies.length === 0 && <p>noDataFound</p>}
									<Pagination
										currentPage={page}
										itemsPerPage={10}
										SetPageNumber={changePageNumberHandler}
										totalPages={totalpage}
									/>
								</>
							)}
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Movies;

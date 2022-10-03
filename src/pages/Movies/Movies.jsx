import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import Container from "../../components/UI/Container/Container";
import List from "../../components/UI/List/List";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import { fetchMoviesData } from "../../Store/Movies/movies.actions";
import {
	selectMoviesData,
	selectMoviesDetailsError,
	selectMoviesIsLoading,
	selectTotalPages,
} from "../../Store/Movies/movies.selector";
import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import { scrollTop } from "../../utilities/ScrollTop";
import "./Movies.css";
const DefualtValueGenres = localStorageIsFound("moviegenres")
	? getLocalStorage("moviegenres", "object").id
	: "";
const DefualtValuesortingBy = localStorageIsFound("movieSortBy")
	? getLocalStorage("movieSortBy", "object").name
	: "popularity.desc";
function Movies() {
	const dispatch = useDispatch();
	const movies = useSelector(selectMoviesData);
	const isLoading = useSelector(selectMoviesIsLoading);
	const error = useSelector(selectMoviesDetailsError);
	const [page, setPage] = useState(1);
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const totalPages = useSelector(selectTotalPages);
	const changeGenresHandler = useCallback((id) => {
		setGenres(id);
		setPage(1);
	}, []);
	const changeSortingHandler = useCallback((id) => {
		let sortBy = "popularity.desc";
		if (id === "1") {
			sortBy = "popularity.asc";
		}
		setSortingBy(sortBy);
		setPage(1);
	}, []);
	const changePageNumberHandler = (clickButton) => {
		setPage(clickButton.selected + 1);
	};
	useEffect(() => {
		dispatch(fetchMoviesData(page, sortingBy, genres));
	}, [page, sortingBy, genres]);
	useEffect(() => {}, [page, sortingBy, genres]);

	return (
		<section className="movies ">
			<Container>
				<div className="row">
					{isLoading && <LoadingSpinner />}
					{error && <p>{error}</p>}
					{movies.length > 0 && (
						<Filter
							changeGenresHandler={changeGenresHandler}
							changeSortingHandler={changeSortingHandler}
						/>
					)}
					{movies && !isLoading && (
						<>
							{<List data={movies} mediaType="Movies" />}
							{movies && movies.length === 0 && <p>noDataFound</p>}
						</>
					)}

					{movies.length > 0 && (
						<Pagination
							changePageNumberHandler={changePageNumberHandler}
							totalPages={totalPages}
						/>
					)}
				</div>
			</Container>
		</section>
	);
}

export default Movies;

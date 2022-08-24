import { useCallback, useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import SearchModal from "../../components/SearchModal/SearchModal";
import SeriesList from "../../components/SeriesList/SeriesList";
import Container from "../../components/UI/Container/Container";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import { scrollTop } from "../../utilities/ScrollTop";
import "./Series.css";

function Series() {
	const context = useContext(ModalContext);
	const DefualtValueGenres = localStorageIsFound("tvgenres")
		? getLocalStorage("tvgenres", "object").id
		: "";
	const DefualtValuesortingBy = localStorageIsFound("tvSortBy")
		? getLocalStorage("tvSortBy", "object").name
		: "popularity.desc";
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [seriesPage, setSeriesPage] = useState(1);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=${sortingBy}&page=${seriesPage}&with_genres=${genres}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
	);
	const [responseData, isLoading, error] = useFetch(url);
	let series = responseData.results;
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
	const changePageForSeriesNumberHandler = (pageNumber) => {
		setSeriesPage(pageNumber);
	};
	useEffect(() => {
		scrollTop();
	}, []);
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=${sortingBy}&page=${seriesPage}&with_genres=${genres}&with_keywords=anime &with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
		);
	}, [url, seriesPage, responseData, genres, sortingBy, isLoading, error]);
	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type="tv" />}
			{!context.SearchModuleIsOpen && (
				<section className="Series">
					<Container>
						<div className="row">
							{isLoading && <LoadingSpinner />}
							{error && !isLoading && !series && <p>{error}</p>}
							{series && !isLoading && (
								<>
									<Filter
										changeGenresHandler={changeGenresHandler}
										changeSortingHandler={changeSortingHandler}
										mediaType="tv"
									/>
									<SeriesList series={series} />
									{series && series.length === 0 && <p>noDataFound</p>}
								</>
							)}
							{series && (
								<Pagination
									currentPage={seriesPage}
									itemsPerPage={10}
									SetPageNumber={changePageForSeriesNumberHandler}
									totalPages={1}
								/>
							)}
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Series;

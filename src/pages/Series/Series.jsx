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
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/tv?api_key=d948c5c0ea05d8b074392d5c6641f56c&sort_by=${sortingBy}&page=${page}&with_genres=${genres}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
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
	const changePageNumberHandler = (pageNumber) => {
		setPage(pageNumber);
	};
	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/tv?api_key=d948c5c0ea05d8b074392d5c6641f56c&sort_by=${sortingBy}&page=${page}&with_genres=${genres}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
		);
	}, [url, page, responseData, genres, sortingBy, isLoading, error]);
	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type="tv" />}
			{!context.SearchModuleIsOpen && (
				<section className="Series">
					<Container>
						<div className="row">
							<Filter
								changeGenresHandler={changeGenresHandler}
								changeSortingHandler={changeSortingHandler}
								mediaType="tv"
							/>
							{isLoading && <LoadingSpinner />}
							{series && !isLoading && <SeriesList series={series} />}
							{series && !isLoading && (
								<Pagination
									currentPage={page}
									itemsPerPage={10}
									SetPageNumber={changePageNumberHandler}
									totalPages={1}
								/>
							)}
							{series && series.length === 0 && <p>noDataFound</p>}
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Series;

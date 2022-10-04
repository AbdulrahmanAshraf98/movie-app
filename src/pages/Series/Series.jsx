import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SeriesFilter from "../../components/SeriesfFilter/SeriesFilter";
import ListSkeleton from "../../components/Skeleton/ListSkeleton/ListSkeleton";

import Container from "../../components/UI/Container/Container";
import List from "../../components/UI/List/List";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/UI/Pagination/Pagination";

import { fetchSeriesData } from "../../Store/Series/series.actions";
import {
	selectSeriesData,
	selectSeriesDetailsError,
	selectSeriesIsLoading,
	selectSeriesTotalPages,
} from "../../Store/Series/series.selector";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import { scrollTop } from "../../utilities/ScrollTop";
import "./Series.css";
const DefualtValueGenres = localStorageIsFound("tvgenres")
	? getLocalStorage("tvgenres", "object").id
	: "";
const DefualtValuesortingBy = localStorageIsFound("tvSortBy")
	? getLocalStorage("tvSortBy", "object").name
	: "popularity.desc";
function Series() {
	const dispatch = useDispatch();
	const series = useSelector(selectSeriesData);
	const isLoading = useSelector(selectSeriesIsLoading);
	const error = useSelector(selectSeriesDetailsError);
	const totalPages = useSelector(selectSeriesTotalPages);

	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [page, setPage] = useState(1);
	const changeGenresHandler = useCallback((id) => {
		setGenres(id);
	}, []);
	const changeSortingHandler = useCallback((id) => {
		let sortBy = "popularity.desc";
		if (id === "1") {
			sortBy = "popularity.asc";
		}
		setSortingBy(sortBy);
	}, []);
	const changePageNumberHandler = (pageNumber) => {
		setPage(pageNumber);
	};
	useEffect(() => {
		scrollTop();
	}, []);
	useEffect(() => {
		dispatch(fetchSeriesData(page, sortingBy, genres));
	}, [page, genres, sortingBy]);
	return (
		<section className="Series">
			<Container>
				<div className="row">
					<SeriesFilter
						changeGenresHandler={changeGenresHandler}
						changeSortingHandler={changeSortingHandler}
					/>
					{isLoading && <ListSkeleton cards={20} />}
					{error && <p>{error}</p>}
					{series && !isLoading && <List data={series} mediaType="tv" />}

					<Pagination
						totalPages={totalPages}
						changePageNumberHandler={changePageNumberHandler}
					/>
				</div>
			</Container>
		</section>
	);
}

export default Series;

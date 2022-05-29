import { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import Filter from "../Filter/Filter";
import Genres from "../Genres/Genres";
import SeriesListItem from "./SeriesListItem/SeriesListItem";

function SeriesList() {
	const DefualtValueGenres = localStorageIsFound("tvgenres")
		? getLocalStorage("tvgenres", "object").id
		: "";
	const DefualtValuesortingBy = localStorageIsFound("tvSortBy")
		? getLocalStorage("tvSortBy", "object").name
		: "popularity.desc";
	const [genres, setGenres] = useState(DefualtValueGenres);
	const [sortingBy, setSortingBy] = useState(DefualtValuesortingBy);
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/discover/tv?api_key=d948c5c0ea05d8b074392d5c6641f56c&sort_by=${sortingBy}&page=1&&with_genres=${genres}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
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

	useEffect(() => {
		setUrl(
			`https://api.themoviedb.org/3/discover/tv?api_key=d948c5c0ea05d8b074392d5c6641f56c&sort_by=${sortingBy}&page=1&&with_genres=${genres}&with_watch_monetization_types=flatrate&with_status=0&with_type=0&include_video=true`,
		);
		console.log(url);
	}, [url, genres, sortingBy, isLoading, error]);

	return (
		<>
			{isLoading && <p>loading</p>}
			{series && !isLoading && (
				<>
					<Filter
						changeGenresHandler={changeGenresHandler}
						changeSortingHandler={changeSortingHandler}
						mediaType="tv"
					/>
					{series.map((element) => {
						return <SeriesListItem key={element.id} series={element} />;
					})}
				</>
			)}
			{series && series.length === 0 && <p>noDataFound</p>}
		</>
	);
}

export default SeriesList;

import { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../utilities/Localstorage";
import Filter from "../Filter/Filter";
import Genres from "../Genres/Genres";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import SeriesListItem from "./SeriesListItem/SeriesListItem";

function SeriesList({ series }) {
	return series.map((element) => {
		return <SeriesListItem key={element.id} series={element} />;
	});
}

export default SeriesList;

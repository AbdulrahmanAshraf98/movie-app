import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import SeriesListItem from "./SeriesListItem/SeriesListItem";

function SeriesList() {
	const [url, setUrl] = useState(
		"https://api.themoviedb.org/3/discover/tv?api_key=d948c5c0ea05d8b074392d5c6641f56c&&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0",
	);
	const [responseData, isLoading] = useFetch(url);
	useEffect(() => {}, [url]);
	let series = responseData.results;
	return (
		<>
			{isLoading && !series && <p>loading</p>}
			{series &&
				series.map((element) => {
					return <SeriesListItem key={element.id} series={element} />;
				})}
		</>
	);
}

export default SeriesList;

import React from "react";
import { useParams } from "react-router-dom";
import Cast from "../../../components/Cast/Cast";
import DetailsOverview from "../../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../../components/Recommendations/Recommendations";
import Seasons from "../../../components/Seasons/Seasons";
import useFetch from "../../../Hooks/useFetch";

function SeriesDetails() {
	const { id } = useParams();
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let SeriesDetailsData = null;
	SeriesDetailsData = responseData;
	return (
		SeriesDetailsData && (
			<>
				<DetailsOverview item={SeriesDetailsData} />
				<Recommendations Id={id} mediaType="tv" />
				{/* {SeriesDetailsData.seasons && <Seasons />} */}
			</>
		)
	);
}

export default SeriesDetails;

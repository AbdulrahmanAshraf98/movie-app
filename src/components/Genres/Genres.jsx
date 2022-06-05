import React from "react";
import useFetch from "../../Hooks/useFetch";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import DropDown from "../UI/SelectBox/DropDown/DropDown";
import "./Genres.css";
function Genres({ onClick, mediaType = "movie", className }) {
	let url =
		"https://api.themoviedb.org/3/genre/movie/list?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US";
	if (mediaType === "tv") {
		url =
			"https://api.themoviedb.org/3/genre/tv/list?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US";
	}
	const [responseData, isLoading] = useFetch(url);
	let genres = responseData.genres;
	return (
		<>
			{genres && !isLoading && (
				<div className={className}>
					<DropDown
						values={genres}
						defaultValue="All"
						onClick={onClick}
						localStorageItemName={`${mediaType}genres`}
					/>
				</div>
			)}
		</>
	);
}

export default React.memo(Genres);

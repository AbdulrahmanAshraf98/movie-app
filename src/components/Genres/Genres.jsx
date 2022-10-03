import { async } from "@firebase/util";
import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { fetchFromTmdbApi } from "../../utilities/Api/FetchApiTmdb";
import DropDown from "../UI/SelectBox/DropDown/DropDown";
import "./Genres.css";
function Genres({ onClick, mediaType = "movie", className }) {
	const [category, setCategory] = useState([]);

	const getCategory = useCallback(async () => {
		let url = "genre/movie/list?language=en-US";
		if (mediaType === "tv") {
			url = "genre/tv/list?&language=en-US";
		}
		try {
			const responseData = await fetchFromTmdbApi(url);
			setCategory(responseData.genres);
		} catch (error) {}
	}, []);
	useEffect(() => {
		getCategory();
	}, []);
	return (
		<>
			{category && (
				<div className={className}>
					<DropDown
						values={category}
						defaultValue="All"
						onClick={onClick}
						localStorageItemName={`${mediaType}genres`}
					/>
				</div>
			)}
			{!category && (
				<div className={className}>
					<DropDown
						values={[]}
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

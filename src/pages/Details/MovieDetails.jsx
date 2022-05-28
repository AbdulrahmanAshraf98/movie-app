import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import VideoModal from "../../components/VideoModal/VideoModal";

import useFetch from "../../Hooks/useFetch";
import "./MovieDetails.css";
function MovieDetails() {
	const [isOpen, setIsOpen] = useState(false);
	const { id } = useParams();
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let MovieDetailsData = null;
	MovieDetailsData = responseData;
	const openModalToggleHandler = (e) => {
		e.preventDefault();
		setIsOpen((prevState) => !prevState);
	};
	useEffect(() => {}, [MovieDetailsData, isLoading, error]);
	return (
		<>
			{isOpen && MovieDetailsData && !isLoading && (
				<VideoModal id={id} openModalHandler={openModalToggleHandler} />
			)}
			{isLoading && <p>Loading</p>}
			{MovieDetailsData && !isLoading && (
				<>
					<DetailsOverview
						item={MovieDetailsData}
						openModalHandler={openModalToggleHandler}
					/>
					<Cast Id={id} mediaType={"movie"} />
					<Recommendations Id={id} mediaType={"movie"} />
				</>
			)}
		</>
	);
}

export default MovieDetails;

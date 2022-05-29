import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../components/VideoModal/VideoModal";

import useFetch from "../../Hooks/useFetch";
import "./MovieDetails.css";
function MovieDetails() {
	const [isOpen, setIsOpen] = useState(false);
	const { id } = useParams();
	let [searchParams, setSearchParams] = useSearchParams();
	let videoId = searchParams.get("videoId");
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let MovieDetailsData = null;
	MovieDetailsData = responseData;
	const openModalHandler = (e) => {
		e.preventDefault();
		setSearchParams({ videoId: id });
	};
	const closeModalHandler = () => {
		setSearchParams();
		setIsOpen((prevState) => false);
	};
	useEffect(() => {
		if (videoId) {
			setIsOpen((prevState) => true);
		}
	}, [isOpen, videoId, searchParams, MovieDetailsData, isLoading, error]);
	return (
		<>
			{videoId && isOpen && (
				<VideoModal
					id={+videoId}
					openModalHandler={openModalHandler}
					closeModalHandler={closeModalHandler}
				/>
			)}
			{isLoading && <LoadingSpinner />}
			{MovieDetailsData && !isLoading && !isOpen && (
				<>
					<DetailsOverview
						item={MovieDetailsData}
						openModalHandler={openModalHandler}
					/>
					<Cast Id={id} mediaType={"movie"} />
					<Recommendations Id={id} mediaType={"movie"} />
				</>
			)}
		</>
	);
}

export default MovieDetails;

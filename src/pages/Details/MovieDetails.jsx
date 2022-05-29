import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../components/VideoModal/VideoModal";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import "./MovieDetails.css";
function MovieDetails() {
	const modalContext = useContext(ModalContext);
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let MovieDetailsData = null;
	MovieDetailsData = responseData;
	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({ videoId: id });
	};
	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
	}, [id, videoId, searchParams, MovieDetailsData, isLoading, error]);
	return (
		<>
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} openModalHandler={openModalHandler} />
			)}
			{isLoading && <LoadingSpinner />}
			{MovieDetailsData && !isLoading && !modalContext.videoModuleIsOpen && (
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

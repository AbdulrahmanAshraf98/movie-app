import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../components/VideoModal/VideoModal";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import { scrollTop } from "../../utilities/ScrollTop";
import "./MovieDetails.css";
function MovieDetails() {
	const modalContext = useContext(ModalContext);
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	
	const [
		recommendationsResponse,
		recommendationsIsLoading,
		recommendationsError,
	] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
	);
	const [costResponse, costIsLoading, costError] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
	);
	let MovieDetailsData = null;
	MovieDetailsData = responseData;
	let recommendations = recommendationsResponse.results;
	let topCast = costResponse.cast;

	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({ videoId: id });
	};

	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
		modalContext.getSearchParamsHandler();
	}, [id, videoId, useParams, MovieDetailsData, isLoading, error]);

	useEffect(() => {
		if (id) {
			scrollTop();
		}
	}, [id]);
	return (
		<>
			{videoId && searchParams && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} openModalHandler={openModalHandler} />
			)}
			{isLoading && recommendationsIsLoading && costIsLoading && (
				<LoadingSpinner />
			)}
			{MovieDetailsData &&
				!isLoading &&
				!recommendationsIsLoading &&
				!costIsLoading && (
					<>
						<DetailsOverview
							item={MovieDetailsData}
							openModalHandler={openModalHandler}
						/>
						<Cast castData={topCast} />
						<Recommendations
							mediaType={"movie"}
							recommendationsData={recommendations}
						/>
					</>
				)}
		</>
	);
}

export default MovieDetails;

import React, { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../../components/Cast/Cast";
import DetailsOverview from "../../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../../components/Recommendations/Recommendations";
import Seasons from "../../../components/Seasons/Seasons";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../../components/VideoModal/VideoModal";
import useFetch from "../../../Hooks/useFetch";
import ModalContext from "../../../Store/Context/ModalContext/ModalContext";
import { scrollTop } from "../../../utilities/ScrollTop";

function SeriesDetails() {
	const modalContext = useContext(ModalContext);
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	const [
		recommendationsResponse,
		recommendationsIsLoading,
		recommendationsError,
	] = useFetch(
		`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&page=1`,
	);
	const [costResponse, costIsLoading, costError] = useFetch(
		`https://api.themoviedb.org/3/tv/${id}/credits?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let SeriesDetailsData = null;
	SeriesDetailsData = responseData;
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
	}, [id, videoId, searchParams, SeriesDetailsData, isLoading, error]);
	useEffect(() => {
		if (id) {
			scrollTop();
		}
	}, [id]);

	return (
		<>
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal
					id={+videoId}
					openModalHandler={openModalHandler}
					type="tv"
				/>
			)}
			{isLoading && recommendationsIsLoading && costIsLoading && (
				<LoadingSpinner />
			)}
			{SeriesDetailsData &&
				!isLoading &&
				!recommendationsIsLoading &&
				!costIsLoading && (
					<>
						<DetailsOverview
							item={SeriesDetailsData}
							openModalHandler={openModalHandler}
						/>
						<Cast castData={topCast} />
						<Recommendations
							recommendationsData={recommendations}
							mediaType="tv"
						/>
					</>
				)}
			{/* {SeriesDetailsData.seasons && <Seasons />} */}
		</>
	);
}

export default SeriesDetails;

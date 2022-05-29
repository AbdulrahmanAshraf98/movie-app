import React, { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../../components/Cast/Cast";
import DetailsOverview from "../../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../../components/Recommendations/Recommendations";
import Seasons from "../../../components/Seasons/Seasons";
import VideoModal from "../../../components/VideoModal/VideoModal";
import useFetch from "../../../Hooks/useFetch";
import ModalContext from "../../../Store/Context/ModalContext/ModalContext";

function SeriesDetails() {
	const modalContext = useContext(ModalContext);
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({ videoId: id });
	};
	let SeriesDetailsData = null;
	SeriesDetailsData = responseData;

	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
	}, [id, videoId, searchParams, SeriesDetailsData, isLoading, error]);
	return (
		SeriesDetailsData && (
			<>
				{videoId && modalContext.videoModuleIsOpen && (
					<VideoModal
						id={+videoId}
						openModalHandler={openModalHandler}
						type="tv"
					/>
				)}
				<DetailsOverview
					item={SeriesDetailsData}
					openModalHandler={openModalHandler}
				/>
				<Recommendations Id={id} mediaType="tv" />
				{/* {SeriesDetailsData.seasons && <Seasons />} */}
			</>
		)
	);
}

export default SeriesDetails;

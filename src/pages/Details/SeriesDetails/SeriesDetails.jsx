import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../../components/Cast/Cast";
import DetailsOverview from "../../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../../components/Recommendations/Recommendations";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../../components/VideoModal/VideoModal";
import useFetch from "../../../Hooks/useFetch";
import ModalContext from "../../../Store/Context/ModalContext/ModalContext";
import { fetchSeriesDetailsData } from "../../../Store/Details/details.actions";
import {
	selectDetailsError,
	selectDetailsIsLoading,
	selectSeriesDetailsData,
} from "../../../Store/Details/details.selector";
import { scrollTop } from "../../../utilities/ScrollTop";

function SeriesDetails() {
	const dispatch = useDispatch();
	const modalContext = useContext(ModalContext);
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const seriesDetailsData = useSelector(selectSeriesDetailsData);
	const isLoading = useSelector(selectDetailsIsLoading);
	const error = useSelector(selectDetailsError);
	const seriesDetails = seriesDetailsData.seriesInfo;
	const recommendations = seriesDetailsData.recommendations;
	const topCast = seriesDetailsData.cast;

	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({ videoId: id });
	};

	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
	}, [id, searchParams]);
	useEffect(() => {
		if (id) {
			dispatch(fetchSeriesDetailsData(id));
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
			{isLoading && <LoadingSpinner />}
			{seriesDetailsData && !isLoading && (
				<>
					<DetailsOverview
						item={{ ...seriesDetails, mediaType: "tv" }}
						openModalHandler={openModalHandler}
					/>
					{topCast && topCast.length > 0 && <Cast castData={topCast} />}
					{recommendations && recommendations.length > 0 && (
						<Recommendations
							recommendationsData={recommendations}
							mediaType="tv"
						/>
					)}
				</>
			)}
		</>
	);
}

export default SeriesDetails;

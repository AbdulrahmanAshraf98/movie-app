import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../components/VideoModal/VideoModal";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import { fetchMoviesDetailsData } from "../../Store/Details/details.actions";
import {
	selectDetailsError,
	selectDetailsIsLoading,
	selectMoviesDetailsData,
} from "../../Store/Details/details.selector";
import { scrollTop } from "../../utilities/ScrollTop";
import "./MovieDetails.css";
function MovieDetails() {
	const modalContext = useContext(ModalContext);
	const dispatch = useDispatch();
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let videoId = modalContext.getSearchParamsHandler("videoId");
	const movieDetailsData = useSelector(selectMoviesDetailsData);
	const isLoading = useSelector(selectDetailsIsLoading);
	const error = useSelector(selectDetailsError);
	const movieDetails = movieDetailsData.movieInfo;
	const recommendations = movieDetailsData.recommendations;
	const topCast = movieDetailsData.cast;
	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({ videoId: id });
	};

	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
		modalContext.getSearchParamsHandler();
	}, [id, videoId, useParams, isLoading]);

	useEffect(() => {
		if (id) {
			dispatch(fetchMoviesDetailsData(id));
		}
	}, [id]);
	useEffect(() => {
		scrollTop();
	}, []);
	return (
		<>
			{videoId && searchParams && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} openModalHandler={openModalHandler} />
			)}
			{isLoading && <LoadingSpinner />}
			{movieDetailsData && !isLoading && (
				<>
					<DetailsOverview
						item={{ ...movieDetails, mediaType: "Movies" }}
						openModalHandler={openModalHandler}
					/>
					{topCast && topCast.length > 0 && (
						<Cast castData={topCast.slice(0, 7)} />
					)}
					{recommendations && recommendations.length > 0 && (
						<Recommendations
							mediaType={"movie"}
							recommendationsData={recommendations.slice(0, 7)}
						/>
					)}
				</>
			)}
			{error && <p>{error.message}</p>}
		</>
	);
}

export default MovieDetails;

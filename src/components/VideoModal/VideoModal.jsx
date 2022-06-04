import React, { useContext } from "react";
import { Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "../UI/Carousel/Carousel";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Modal from "../UI/Modal/Modal";
import VideoElement from "./VideoElement/VideoElement";
import "./VideoModal.css";
import youtubeVideoNotFound from "../../assets/youtube-video-unavailable.jpg";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
function VideoModal({ id, openModalHandler, type = "movie" }) {
	const modalContext = useContext(ModalContext);
	const [response, loading, error] = useFetch(
		`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
	);
	let responseData = response.results;
	const closeModalHandler = () => {
		modalContext.resetSearchParamsHandler();
		modalContext.videoModuleCloseHandler();
	};
	return (
		<Modal
			className="video-modal-overlay"
			openModalHandler={openModalHandler}
			closeModalHandler={closeModalHandler}>
			{loading && !error && <LoadingSpinner />}
			{!loading && error && <p>{error}</p>}
			{responseData && !loading && responseData.length > 0 && (
				<Carousel data={responseData} modules={[Navigation]}>
					<VideoElement />
				</Carousel>
			)}
			{responseData && !loading && responseData.length === 0 && (
				<img src={youtubeVideoNotFound} />
			)}
		</Modal>
	);
}

export default VideoModal;

import React, { useCallback, useContext, useEffect } from "react";
import { Navigation } from "swiper";
import Carousel from "../UI/Carousel/Carousel";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Modal from "../UI/Modal/Modal";
import VideoElement from "./VideoElement/VideoElement";
import youtubeVideoNotFound from "../../assets/youtube-video-unavailable.jpg";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import {
	selectVideosData,
	selectVideosError,
	selectVideosIsLoading,
} from "../../Store/Videos/videos.selector";
import { fetchVideosData } from "../../Store/Videos/videos.actions";
import "./VideoModal.css";
function VideoModal({ id, openModalHandler, type = "movie" }) {
	const dispatch = useDispatch();
	const videosData = useSelector(selectVideosData);
	const isLoading = useSelector(selectVideosIsLoading);
	const error = useSelector(selectVideosError);
	const modalContext = useContext(ModalContext);
	useEffect(() => {
		dispatch(fetchVideosData(type, id));
	}, [id]);
	const closeModalHandler = useCallback(() => {
		modalContext.resetSearchParamsHandler();
		modalContext.videoModuleCloseHandler();
	}, []);
	return (
		<Modal
			className="video-modal-overlay"
			openModalHandler={openModalHandler}
			closeModalHandler={closeModalHandler}>
			{isLoading && !error && <LoadingSpinner />}

			{videosData && !isLoading && videosData.length > 0 && (
				<Carousel data={videosData} modules={[Navigation]}>
					<VideoElement />
				</Carousel>
			)}
			{videosData && videosData.length === 0 && (
				<img src={youtubeVideoNotFound} alt="video NotFound" />
			)}
			{error && <p>{error}</p>}
		</Modal>
	);
}

export default VideoModal;

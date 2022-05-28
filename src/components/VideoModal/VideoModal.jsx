import React from "react";
import { Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "../UI/Carousel/Carousel";
import Modal from "../UI/Modal/Modal";
import VideoElement from "./VideoElement/VideoElement";
import "./VideoModal.css";
function VideoModal({ id, openModalHandler }) {
	const [response, loading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let responseData = response.results;

	console.log(responseData);
	return (
		<Modal className="video-modal-overlay" openModalHandler={openModalHandler}>
			{responseData && !loading && responseData.length > 0 && (
				<Carousel data={responseData} modules={[Navigation]}>
					<VideoElement />
				</Carousel>
			)}
		</Modal>
	);
}

export default VideoModal;
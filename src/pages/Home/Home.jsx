import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection/HeroSection";
import Preloader from "../../components/preloader/Preloader";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import VideoModal from "../../components/VideoModal/VideoModal";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import { fetchTrendingData } from "../../Store/Trending/trending.actions";
import {
	selectTrendingData,
	selectTrendingError,
	selectTrendingIsLoading,
} from "../../Store/Trending/trending.selector";

import { scrollTop } from "../../utilities/ScrollTop";

function Home() {
	const dispatch = useDispatch();
	const trending = useSelector(selectTrendingData);
	const isLoading = useSelector(selectTrendingIsLoading);
	const error = useSelector(selectTrendingError);
	const modalContext = useContext(ModalContext);
	let mediaType = modalContext.getSearchParamsHandler("mediaType");
	let videoId = modalContext.getSearchParamsHandler("videoId");

	useEffect(() => {
		if (videoId && mediaType) {
			modalContext.videoModuleOpenHandler();
		}
	}, [videoId, mediaType, modalContext]);
	useEffect(() => {
		dispatch(fetchTrendingData());
		scrollTop();
	}, []);

	return (
		<>
			{isLoading && <Preloader className={``} />}
			{/* {isLoading && <LoadingSpinner />} */}
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} type={mediaType} />
			)}
			<HeroSection data={trending}></HeroSection>
		</>
	);
}

export default Home;

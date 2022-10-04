import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection/HeroSection";
import Preloader from "../../components/preloader/Preloader";
import Error from "../../components/UI/Error/Error";
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
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} type={mediaType} />
			)}
			{trending && !isLoading && !error && (
				<HeroSection data={trending}></HeroSection>
			)}
			{error && <Error error={error} />}
		</>
	);
}

export default Home;

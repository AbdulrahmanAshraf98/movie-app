import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeRowPreview from "../../components/HomeRowPreview/HomeRowPreview";
import Preloader from "../../components/preloader/Preloader";
import Container from "../../components/UI/Container/Container";
import Error from "../../components/UI/Error/Error";
import VideoModal from "../../components/VideoModal/VideoModal";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import { fetchHomeData } from "../../Store/Home/home.actions";
import {
	selectHomeData,
	selectHomeError,
	selectHomeIsLoading,
} from "../../Store/Home/home.selector";
import { scrollTop } from "../../utilities/ScrollTop";

function Home() {
	const dispatch = useDispatch();
	const homeData = useSelector(selectHomeData);
	const {
		trending,
		popularMovies,
		nowPlayingMovies,
		topRatedMovies,
		popularSeries,
		seriesOnTheAir,
		topRatedSeries,
	} = homeData;
	const isLoading = useSelector(selectHomeIsLoading);
	const error = useSelector(selectHomeError);
	const modalContext = useContext(ModalContext);
	let mediaType = modalContext.getSearchParamsHandler("mediaType");
	let videoId = modalContext.getSearchParamsHandler("videoId");

	useEffect(() => {
		if (videoId && mediaType) {
			modalContext.videoModuleOpenHandler();
		}
	}, [videoId, mediaType, modalContext]);
	useEffect(() => {
		dispatch(fetchHomeData());
		scrollTop();
	}, []);

	return (
		<>
			{isLoading && <Preloader className={``} />}
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} type={mediaType} />
			)}
			{homeData && !isLoading && !error && (
				<>
					<HeroSection data={trending} />
					<HomeRowPreview data={trending} title="Trending" />
					<HomeRowPreview
						data={popularMovies}
						title="Popular Movies"
						mediaType={"Movies"}
					/>
					<HomeRowPreview
						data={nowPlayingMovies}
						title="Now Playing Movies"
						mediaType={"Movies"}
					/>
					<HomeRowPreview
						data={topRatedMovies}
						title="Top Rated Movies"
						mediaType={"Movies"}
					/>
					<HomeRowPreview
						data={popularSeries}
						title="Popular Tv"
						mediaType={"tv"}
					/>
					<HomeRowPreview
						data={seriesOnTheAir}
						title="Tv On Air"
						mediaType={"tv"}
					/>
					<HomeRowPreview
						data={topRatedSeries}
						title="Top Rated Tv"
						mediaType={"tv"}
					/>
				</>
			)}
			{error && <Error error={error} />}
		</>
	);
}

export default Home;

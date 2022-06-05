import { useContext, useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Preloader from "../../components/preloader/Preloader";
import VideoModal from "../../components/VideoModal/VideoModal";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";

import { scrollTop } from "../../utilities/ScrollTop";

function Home() {
	const modalContext = useContext(ModalContext);
	let mediaType = modalContext.getSearchParamsHandler("mediaType");
	let videoId = modalContext.getSearchParamsHandler("videoId");
	useEffect(() => {
		if (videoId && mediaType) {
			modalContext.videoModuleOpenHandler();
		}
	}, [videoId, mediaType, modalContext]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 800);
	}, [loading]);

	useEffect(() => {
		scrollTop();
	}, []);

	return (
		<>
			{loading && <Preloader className={``} />}
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} type={mediaType} />
			)}
			<HeroSection></HeroSection>
		</>
	);
}

export default Home;

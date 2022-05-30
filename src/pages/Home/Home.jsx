import { useContext, useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import VideoModal from "../../components/VideoModal/VideoModal";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";

function Home() {
	const modalContext = useContext(ModalContext);
	let videoId = modalContext.getSearchParamsHandler("videoId");

	useEffect(() => {
		if (videoId) {
			modalContext.videoModuleOpenHandler();
		}
	}, [videoId]);
	return (
		<>
			{videoId && modalContext.videoModuleIsOpen && (
				<VideoModal id={+videoId} />
			)}
			<HeroSection></HeroSection>
		</>
	);
}

export default Home;

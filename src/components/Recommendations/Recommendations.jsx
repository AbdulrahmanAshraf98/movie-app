import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import RecommendationsItem from "./RecommendationsItem/RecommendationsItem";
import "./Recommendations.css";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function Recommendations({ mediaType, recommendationsData }) {
	return (
		<>
			{recommendationsData && recommendationsData.length > 0 && (
				<section className="recommendations">
					<Container>
						<SectionTitle>
							<h3>Recommendations</h3>
						</SectionTitle>
						<Carousel
							data={recommendationsData}
							slidesCount={1}
							breakpoints={{
								520: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
							}}
							spaceBetween={30}
							centeredSlides={false}
							modules={[Navigation, Autoplay]}>
							<RecommendationsItem mediaType={mediaType} />
						</Carousel>
					</Container>
				</section>
			)}
		</>
	);
}

export default React.memo(Recommendations);

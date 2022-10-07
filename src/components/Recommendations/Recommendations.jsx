import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import RecommendationsItem from "./RecommendationsItem/RecommendationsItem";
import "./Recommendations.css";
function Recommendations({ mediaType, recommendationsData }) {
	recommendationsData.sort((a, b) => b.vote_average - a.vote_average);
	return (
		<>
			{recommendationsData && (
				<section className="recommendations">
					<Container>
						<SectionTitle>
							<h3>Recommendations</h3>
						</SectionTitle>
						<Carousel
							data={recommendationsData}
							slidesCount={1}
							breakpoints={{
								350: {
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

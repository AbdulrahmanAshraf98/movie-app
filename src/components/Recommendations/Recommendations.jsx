import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import RecommendationsItem from "./RecommendationsItem/RecommendationsItem";
import "./Recommendations.css";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function Recommendations({ Id, mediaType }) {
	const [response, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/${mediaType}/${Id}/recommendations?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&page=1`,
	);
	let recommendations = response.results;
	return (
		<>
			{isLoading && <LoadingSpinner />}
			{recommendations && !isLoading && recommendations.length > 0 && (
				<section className="recommendations">
					<Container>
						<SectionTitle>
							<h3>Recommendations</h3>
						</SectionTitle>
						<Carousel
							data={recommendations}
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

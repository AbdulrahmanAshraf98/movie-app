import React from "react";
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import RecommendationsItem from "./RecommendationsItem/RecommendationsItem";
import "./Recommendations.css";
function Recommendations() {
	const response = useFetch(
		"https://api.themoviedb.org/3/movie/294793/recommendations?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&page=1",
	);
	let recommendations = response[0].results;
	return (
		<section className="recommendations">
			{recommendations && (
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
						<RecommendationsItem />
					</Carousel>
				</Container>
			)}
		</section>
	);
}

export default Recommendations;

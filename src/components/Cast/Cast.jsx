import React from "react";
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";
import Container from "../UI/Container/Container";
import Carousel from "../UI/Carousel/Carousel";
import CastItem from "./CastItem/CastList";
import "./Cast.css";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function Cast({ Id, mediaType, SortingByPopularity }) {
	let [response, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/${mediaType}/${Id}/credits?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let topCast = response.cast;
	if (topCast) {
		topCast = topCast.filter((element) => element.popularity >= 2).sort();
	}
	return (
		<>
			{isLoading && <LoadingSpinner />}
			{topCast && !isLoading && topCast.length > 0 && (
				<section className="CastList">
					<Container>
						<SectionTitle>
							<h3>Top Billed Cast</h3>
						</SectionTitle>
						<Carousel
							data={topCast}
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
							<CastItem></CastItem>
						</Carousel>
					</Container>
				</section>
			)}
		</>
	);
}

export default Cast;

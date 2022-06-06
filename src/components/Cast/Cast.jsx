import React from "react";
import { Autoplay, Navigation } from "swiper";
import Container from "../UI/Container/Container";
import Carousel from "../UI/Carousel/Carousel";
import CastItem from "./CastItem/CastItem";
import "./Cast.css";
import SectionTitle from "../UI/sectionTitle/SectionTitle";

function Cast({ castData }) {
	let topCast = castData;
	if (topCast) {
		topCast = topCast.filter((element) => element.popularity >= 2).sort();
	}
	return (
		<>
			{topCast && topCast.length > 1 && (
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

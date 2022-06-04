import React, { useState } from "react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";

import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import "./Herosection.css";
import Banner from "./Banner/Banner";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function HeroSection({ openModalHandler }) {
	const [responseData, isLoading, error] =
		useFetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&&page=1
	`);
	// const trending = response[0].results;
	let trending = responseData.results;
	const [background, setBackground] = useState("");
	const setBackgroundHandler = (url) => {
		setBackground(url);
	};

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{trending && !isLoading && (
				<div
					className="HeroSection"
					style={{
						backgroundImage: `url(${background})`,
					}}>
					{trending && (
						<Container>
							<Carousel
								data={trending}
								slidesCount={1}
								spaceBetween={0}
								centeredSlides={true}
								fn={setBackgroundHandler}
								modules={[Autoplay, Navigation]}
								delay={7000}>
								<Banner />
							</Carousel>
						</Container>
					)}
				</div>
			)}
		</>
	);
}

export default HeroSection;

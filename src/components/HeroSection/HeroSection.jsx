import React, { useState } from "react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import useFetch from "../../Hooks/useFetch";

import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import "./Herosection.css";
import Banner from "./Banner/Banner";
function HeroSection({ openModalHandler }) {
	const response =
		useFetch(`https://api.themoviedb.org/3/trending/all/week?api_key=d948c5c0ea05d8b074392d5c6641f56c&&page=3
	`);
	const trending = response[0].results;
	const [background, setBackground] = useState("");
	const setBackgroundHandler = (url) => {
		setBackground(url);
	};

	return (
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
						delay={5000}>
						<Banner />
					</Carousel>
				</Container>
			)}
		</div>
	);
}

export default HeroSection;

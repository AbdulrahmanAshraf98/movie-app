import React, { useCallback, useState } from "react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import "./Herosection.css";
import Banner from "./Banner/Banner";
function HeroSection({ openModalHandler, data }) {
	const [background, setBackground] = useState("");
	const setBackgroundHandler = useCallback((url) => {
		setBackground(url);
	}, []);

	return (
		<>
			{data && (
				<section
					className="HeroSection"
					style={{
						backgroundImage: `url(${background})`,
					}}>
					<Container>
						<Carousel
							data={data}
							slidesCount={1}
							spaceBetween={0}
							centeredSlides={true}
							fn={setBackgroundHandler}
							modules={[Autoplay, Navigation]}
							delay={5000}>
							<Banner />
						</Carousel>
					</Container>
				</section>
			)}
		</>
	);
}

export default HeroSection;

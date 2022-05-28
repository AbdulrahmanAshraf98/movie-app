import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
const Carousel = ({
	data,
	fn = null,
	children,
	slidesCount = 1,
	spaceBetween = 20,
	modules,
	centeredSlides,
	breakpoints = {},
}) => {
	const slideItem = data.map((item, index) => (
		<SwiperSlide key={index} id={index}>
			{({ isActive }) => React.cloneElement(children, { item, fn, isActive })}
		</SwiperSlide>
	));

	return (
		<>
			<Swiper
				slidesPerView={slidesCount}
				spaceBetween={spaceBetween}
				centeredSlides={centeredSlides}
				breakpoints={breakpoints}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={modules}
				className="mySwiper">
				{slideItem}
			</Swiper>
		</>
	);
};
export default React.memo(Carousel);

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = ({ data, setBackgroundHandler, children }) => {
	const slideItem = data.map((item, index) => (
		<SwiperSlide key={index} id={index}>
			{({ isActive }) =>
				React.cloneElement(children, { item, setBackgroundHandler, isActive })
			}
		</SwiperSlide>
	));

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}
				className="mySwiper">
				{slideItem}
			</Swiper>
		</>
	);
};
export default Carousel;

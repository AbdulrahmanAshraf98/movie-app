import React from "react";
import { useSelector } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { selectFavoriteData } from "../../Store/Favorite/favorite.selector";
import Carousel from "../UI/Carousel/Carousel";
import Container from "../UI/Container/Container";
import ListItem from "../UI/List/ListItem/ListItem";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import "./HomeRowPreview.css";
const HomeRowPreview = ({ title, data, mediaType }) => {
	const newData = data.map((item) => {
		let newItem = {
			...item,
			mediaType: item.media_type ? item.media_type : mediaType,
		};
		if (newItem.mediaType === "movie") {
			newItem = { ...item, mediaType: "Movies" };
		}
		return newItem;
	});
	return (
		<section className={`section ${title} `}>
			<Container>
				<SectionTitle>
					<h3>{title}</h3>
				</SectionTitle>
				<div className={`row-preview ${title}-list`}>
					<Carousel
						data={newData}
						slidesCount={1}
						breakpoints={{
							350: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							520: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							767: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							991: {
								slidesPerView: 6,
								spaceBetween: 20,
							},
						}}
						spaceBetween={5}
						centeredSlides={false}
						modules={[Autoplay, Navigation]}
						delay={5000}>
						<ListItem
							options={{ withoutCardFooter: true, favoriteItemsHandler: false }}
						/>
					</Carousel>
				</div>
			</Container>
		</section>
	);
};

export default HomeRowPreview;

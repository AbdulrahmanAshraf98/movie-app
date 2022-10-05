import React from "react";
import { Link } from "react-router-dom";
import Img from "../../UI/Img/Img";
import classes from "./SearchResultsCard.module.css";
const SearchResultItem = ({ item }) => {
	const link =
		item.media_type === "movie" ? (
			<Link to={`/Movies/${item.id}`}>
				<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
			</Link>
		) : item.media_type === "tv" ? (
			<Link to={`/tv/${item.id}`}>
				<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
			</Link>
		) : (
			""
		);
	return (
		<div className={`card card__item ${classes.card__item}`}>
			<div className="card-top-box">
				<Img
					src={
						item.poster_path
							? `https://image.tmdb.org/t/p/w300${item.poster_path}`
							: item.backdrop_path
							? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
							: item.profile_path
							? `https://image.tmdb.org/t/p/w300${item.profile_path}`
							: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
					}
					className={`card__item__image ${classes.card__item__image}`}>
					<div className="play">{link}</div>
				</Img>
			</div>

			<div className={`card__Item__content ${classes.card__Item__content}`}>
				<h3 className="card__item__title">
					{(item.name ? item.name : item.original_title).slice(0, 10)}
				</h3>
			</div>
		</div>
	);
};

export default SearchResultItem;

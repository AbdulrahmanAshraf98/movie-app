import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalContext from "../../../Store/Context/ModalContext/ModalContext";
import Img from "../../UI/Img/Img";
import "./Banner.css";
function Banner({ item, fn, isActive }) {
	const modalContext = useContext(ModalContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (isActive) {
			fn(`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`);
		}
	});
	const navigateHandler = (e) => {
		e.preventDefault();
		const itemId = item.id;
		const mediaType = item.media_type;
		if (mediaType === "tv") {
			navigate(`/series/${itemId}`);
			return;
		}
		navigate(`/${mediaType}s/${itemId}`);
	};
	const openModalHandler = (e) => {
		e.preventDefault();
		modalContext.setSearchParams({
			mediaType: item.media_type,
			videoId: item.id,
		});
	};
	return (
		isActive && (
			<div className={`item `}>
				<div className="row">
					<div className="col poster">
						{isActive && (
							<Img
								className={`img-box ${isActive ? "fadeInRight" : ""}`}
								onClick={navigateHandler}
								src={
									item.backdrop_path
										? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
										: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
								}>
								<div className="overlay">
									<a className="playTrailer" onClick={openModalHandler}>
										<i className="fa-solid fa-play"></i>
									</a>
								</div>
							</Img>
						)}
					</div>
					<div className="col info">
						{isActive && (
							<h3
								className={`hero-section-title ${
									isActive ? "fadeInLeft" : ""
								}`}>
								{item.title ? item.title : item.name}
							</h3>
						)}

						<ul>
							<li className="original_language">{item.original_language}</li>
							<li className="vote_average">{item.vote_average}</li>
							<li className="media_type">{item.media_type}</li>
						</ul>
						{item.first_air_date && (
							<ul className="first_air_date row">
								<li>first air date</li>
								<li>{item.first_air_date}</li>
							</ul>
						)}
						{item.release_date && (
							<ul className="release_date">
								<li>release date</li>
								<li>{item.release_date}</li>
							</ul>
						)}
						<Link
							className="forMoreDetails"
							to={
								item.media_type === "tv"
									? `/tv/${item.id}`
									: `/movies/movie/${item.id}`
							}>
							For More Details
						</Link>
					</div>
				</div>
			</div>
		)
	);
}

export default Banner;

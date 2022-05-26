import React, { useEffect } from "react";
import "./Banner.css";
function Banner({ item, setBackgroundHandler, isActive }) {
	const overviewLength = item.overview.length;
	useEffect(() => {
		if (isActive) {
			setBackgroundHandler(
				`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
			);
		}
	});
	return (
		<div className={`item ${overviewLength < 400 ? "sm" : "mid"}`}>
			<div className="row">
				<div className="col poster">
					<div className="img-box">
						<img
							src={
								item.backdrop_path
									? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
									: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
							}
						/>
					</div>
				</div>
				<div className="col info">
					<h3 className="hero-section-title">
						{item.title ? item.title : item.name}
					</h3>

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
					<p className={`overview ${overviewLength > 300 ? "small" : ""}`}>
						{item.overview}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Banner;

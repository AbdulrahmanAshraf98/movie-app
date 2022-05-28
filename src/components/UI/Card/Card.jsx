import React from "react";
import { Link } from "react-router-dom";
import Img from "../Img/Img";
import ImagNotFound from "../../../assets/broken-1.png";
import "./Card.css";
function Card({ data }) {
	return (
		<div className="card">
			<div className="card-top">
				<div className="card-top-box">
					<Img
						className="card-image"
						src={`${
							data.poster_path
								? `https://image.tmdb.org/t/p/w300${data.poster_path}`
								: data.backdrop_path
								? `https://image.tmdb.org/t/p/w300${data.backdrop_path}`
								: ImagNotFound
						}`}
					/>
					<div className="card-options">
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
					<div className="play">
						<Link to="/">
							<i className="fa-solid fa-magnifying-glass"></i>
						</Link>
					</div>
				</div>
			</div>
			<div className="card-footer">
				<div className="card-desc">
					<h3 className="card-title">{data.title ? data.title : data.name}</h3>

					<div className="card-details">
						<ul>
							<li
								className="vote-average"
								style={{
									backgroundColor:
										data.vote_average > 6
											? data.vote_average < 7
												? "green"
												: "#2080e0"
											: "red",
								}}>
								<span>{data.vote_average}</span>
							</li>
							<li>
								{data.release_date ? data.release_date : data.first_air_date}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;

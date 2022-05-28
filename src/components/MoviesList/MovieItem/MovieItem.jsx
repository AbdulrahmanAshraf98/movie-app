import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
import Img from "../../UI/Img/Img";
import ImagNotFound from "../../../assets/broken-1.png";
import "./MovieItem.css";
function MovieItem({ movie }) {
	return (
		<div className="Movie-item">
			<Card>
				<div className="card-top">
					<div className="card-top-box">
						<Img
							className="card-image"
							// onClick={onClick}
							src={`${
								movie.poster_path
									? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
									: movie.backdrop_path
									? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
									: ImagNotFound
							}`}
						/>

						<div className="card-options">
							<i className="fa-solid fa-magnifying-glass"></i>
						</div>
						<div className="play">
							<Link to={`/Movies/Movie/${movie.id}`}>
								<i className="fa-solid fa-magnifying-glass"></i>
							</Link>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="card-desc">
						<h3 className="card-title">
							{movie.title ? movie.title : movie.name}
						</h3>

						<div className="card-details">
							<ul>
								<li
									className="vote-average"
									style={{
										backgroundColor:
											movie.vote_average > 6
												? movie.vote_average < 7
													? "green"
													: "#2080e0"
												: "red",
									}}>
									<span>{movie.vote_average}</span>
								</li>
								<li>
									{movie.release_date
										? movie.release_date
										: movie.first_air_date}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default MovieItem;

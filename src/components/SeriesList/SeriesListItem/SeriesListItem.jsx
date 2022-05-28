import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import Img from "../../UI/Img/Img";
import ImagNotFound from "../../../assets/broken-1.png";
import "./SeriesListItem.css";
function SeriesListItem({ series }) {
	return (
		<>
			<div className="col">
				<div className="Series-item">
					<Card>
						<div className="card-top">
							<div className="card-top-box">
								<Img
									className="card-image"
									// onClick={onClick}
									src={`${
										series.poster_path
											? `https://image.tmdb.org/t/p/w300${series.poster_path}`
											: series.backdrop_path
											? `https://image.tmdb.org/t/p/w300${series.backdrop_path}`
											: ImagNotFound
									}`}
								/>

								<div className="card-options">
									<i className="fa-solid fa-magnifying-glass"></i>
								</div>
								<div className="play">
									<Link to={`/Tv/${series.id}`}>
										<i className="fa-solid fa-magnifying-glass"></i>
									</Link>
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="card-desc">
								<h3 className="card-title">
									{series.title ? series.title : series.name}
								</h3>

								<div className="card-details">
									<ul>
										<li
											className="vote-average"
											style={{
												backgroundColor:
													series.vote_average > 6
														? series.vote_average < 7
															? "green"
															: "#2080e0"
														: "red",
											}}>
											<span>{series.vote_average}</span>
										</li>
										<li>
											{series.release_date
												? series.release_date
												: series.first_air_date}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
}

export default SeriesListItem;

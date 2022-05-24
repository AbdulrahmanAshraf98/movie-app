import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ data }) {
	return (
		<div className={"card"}>
			<div className="card-top">
				<div className="card-top-box">
					<img
						src={`${
							data.poster_path
								? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
								: "http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-5.jpeg"
						}`}
					/>
					<div className="card-options">
						<i class="fa-solid fa-magnifying-glass"></i>
						<i class="fa-solid fa-magnifying-glass"></i>
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
					<div className="play">
						<Link to="/">
							<i class="fa-solid fa-magnifying-glass"></i>
						</Link>
					</div>
				</div>
			</div>
			<div className="card-footer">
				<div className="card-desc">
					<h3 className="card-title">{data.title}</h3>

					<div className="card-details">
						<ul>
							<li
								className="vote-average"
								style={{
									backgroundColor:
										data.vote_average > 6
											? data.vote_average < 7
												? "green"
												: "yellow"
											: "red",
								}}>
								<span>{data.vote_average}</span>
							</li>
							<li>{data.release_date}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Card/Card";
import Img from "../../UI/Img/Img";

function FavouriteItem({ item, favoriteRemoveItem }) {
	return (
		<div className="col">
			<Card>
				<div className="card-top">
					<div className="card-top-box">
						<Img
							className="card-image"
							// onClick={onClick}
							src={`${
								item.poster_path
									? `https://image.tmdb.org/t/p/w300${item.poster_path}`
									: item.backdrop_path
									? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
									: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
							}`}>
							<div
								className="card-options"
								onClick={() => {
									favoriteRemoveItem(item.id);
								}}>
								<i className="fa-solid fa-heart"></i>
							</div>
							<div className="play">
								<Link to={`/Movies/Movie/${item.id}`}>
									<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
								</Link>
							</div>
						</Img>
					</div>
				</div>
				<div className="card-footer">
					<div className="card-desc">
						<h3 className="card-title">
							{item.title ? item.title : item.name}
						</h3>

						<div className="card-details">
							<ul>
								<li
									className="vote-average"
									style={{
										backgroundColor:
											item.vote_average > 6
												? item.vote_average < 7
													? "green"
													: "#2080e0"
												: "red",
									}}>
									<span>{item.vote_average}</span>
								</li>
								<li>
									{item.release_date ? item.release_date : item.first_air_date}
								</li>
							</ul>
							{item.production_companies && (
								<ul className="production-compony">
									{item.production_companies.map((item) => (
										<li key={item.id}>
											<span>{item.name}</span>{" "}
											<span>{item.origin_country}</span>
										</li>
									))}
								</ul>
							)}

							<div className="overview">
								<p>{item.overview}</p>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default FavouriteItem;

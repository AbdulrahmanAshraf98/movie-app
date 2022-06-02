import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Store/Context/Auth/AuthContext";
import FavoriteContext from "../../../Store/Context/FavoriteContext/FavoriteContext";
import Card from "../../UI/Card/Card";
import Img from "../../UI/Img/Img";
import "./SeriesListItem.css";
function SeriesListItem({ series }) {
	const favoriteContext = useContext(FavoriteContext);
	const authContext = useContext(AuthContext);
	const favoriteAdd = () => {
		favoriteContext.addToFavoriteHandler(series);
	};
	const favoriteRemoveItem = () => {
		favoriteContext.removeFromFavoriteHandler(series.id);
	};
	const foundFavItem = favoriteContext.foundItem(series.id);
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
											: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
									}`}
								/>
								{authContext.isLogin && (
									<>
										<div
											className={`card-options ${
												foundFavItem ? "d-none" : "add"
											}`}
											onClick={favoriteAdd}>
											<i className="fa-solid fa-heart"></i>
										</div>
										<div
											className={`card-options ${foundFavItem ? "" : "d-none"}`}
											onClick={favoriteRemoveItem}>
											<i className="fa-solid fa-heart"></i>
										</div>
									</>
								)}
								<div className="play">
									<Link to={`/Tv/${series.id}`}>
										<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
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

import React, { useCallback, useContext } from "react";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
import Img from "../../UI/Img/Img";
import "./MovieItem.css";
import FavoriteContext from "../../../Store/Context/FavoriteContext/FavoriteContext";
import AuthContext from "../../../Store/Context/Auth/AuthContext";
import ModalContext from "../../../Store/Context/ModalContext/ModalContext";
function MovieItem({ movie }) {
	const authContext = useContext(AuthContext);
	const favoriteContext = useContext(FavoriteContext);
	const modalContext = useContext(ModalContext);
	const favoriteAdd = () => {
		favoriteContext.addToFavoriteHandler(movie);
	};
	const favoriteRemoveItem = () => {
		favoriteContext.removeFromFavoriteHandler(movie.id);
	};
	const closeModalHandler = useCallback(() => {
		modalContext.SearchModuleCloseHandler();
	}, []);

	const foundFavItem = favoriteContext.foundItem(movie.id);
	return (
		<div className="Movie-item">
			<Card>
				<div className="card-top">
					<div className="card-top-box">
						<Img
							className="card-image"
							alt={movie.title ? movie.title : movie.name}
							src={`${
								movie.poster_path
									? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
									: movie.backdrop_path
									? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
									: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
							}`}>
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
								<Link
									to={`/Movies/Movie/${movie.id}`}
									onClick={closeModalHandler}>
									<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
								</Link>
							</div>
						</Img>
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

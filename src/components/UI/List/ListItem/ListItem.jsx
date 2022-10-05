import React, { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../../../Store/Auth/user.selector";
import ModalContext from "../../../../Store/Context/ModalContext/ModalContext";
import {
	postAddFavoriteItem,
	postRemoveFavoriteItem,
} from "../../../../Store/Favorite/favorite.actions";
import { selectFavoriteData } from "../../../../Store/Favorite/favorite.selector";
import Card from "../../Card/Card";
import Img from "../../Img/Img";

function ListItem({ className, item }) {
	const newItem = {
		backdrop_path: item.backdrop_path,
		id: item.id,
		poster_path: item.poster_path,
		title: item.title ? item.title : item.name,
		mediaType: item.mediaType,
		vote_average: item.vote_average,
		release_date: item.release_date ? item.release_date : item.first_air_date,
		isFavorite: true,
	};
	const title = (item.title ? item.title : item.name).slice(0, 10);
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const modalContext = useContext(ModalContext);
	const addFavoriteItem = useCallback(() => {
		dispatch(postAddFavoriteItem(currentUser.uid, newItem));
	}, [item]);
	const removeFavoriteItem = useCallback(() => {
		dispatch(postRemoveFavoriteItem(currentUser.uid, newItem));
	}, [item]);
	const closeModalHandler = useCallback(() => {
		modalContext.SearchModuleCloseHandler();
	}, []);
	return (
		<div className="card list-item">
			<Card>
				<div className="card-top">
					<div className="card-top-box">
						<Img
							className="card-image"
							alt={item.title ? item.title : item.name}
							src={`${
								item.poster_path
									? `https://image.tmdb.org/t/p/w300${item.poster_path}`
									: item.backdrop_path
									? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
									: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
							}`}
						/>
						{currentUser && (
							<>
								{!item.isFavorite && (
									<div className={`card-options add`} onClick={addFavoriteItem}>
										<i className="fa-solid fa-heart"></i>
									</div>
								)}
								{item.isFavorite && (
									<div className={`card-options`} onClick={removeFavoriteItem}>
										<i className="fa-solid fa-heart"></i>
									</div>
								)}
							</>
						)}
						<div className="play">
							<Link
								to={`/${item.mediaType}/${item.id}`}
								onClick={closeModalHandler}>
								<i className="fa-solid fa-down-left-and-up-right-to-center"></i>
							</Link>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="card-desc">
						<h3 className="card-title">{title}</h3>

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
									{item.vote_average && (
										<span>{item.vote_average.toFixed(1)}</span>
									)}
								</li>
								<li>
									{item.release_date ? item.release_date : item.first_air_date}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default ListItem;

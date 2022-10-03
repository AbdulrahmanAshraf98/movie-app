import React, { useCallback, useContext } from "react";
import Container from "../UI/Container/Container";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
import DetailsOverViewPoster from "./DetailsOverViewPoster/DetailsOverViewPoster";
import "./DetailsOverview.css";
import { setLocalStorage } from "../../utilities/Localstorage";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../Store/Auth/user.selector";
import { useDispatch, useSelector } from "react-redux";
import {
	postAddFavoriteItem,
	postRemoveFavoriteItem,
} from "../../Store/Favorite/favorite.actions";
import { selectFavoriteData } from "../../Store/Favorite/favorite.selector";
function DetailsOverview({ item, openModalHandler }) {
	console.log(item);
	const vote_average = parseFloat(item.vote_average.toFixed(1));

	const newItem = item && {
		backdrop_path: item.backdrop_path,
		id: item.id,
		poster_path: item.poster_path,
		title: item.title ? item.title : item.name,
		mediaType: item.mediaType,
		vote_average,
		release_date: item.release_date ? item.release_date : item.first_air_date,
		isFavorite: true,
	};
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const favoriteItems = useSelector(selectFavoriteData);
	let updatedItem = item;
	if (favoriteItems) {
		favoriteItems.forEach((favoriteItem) => {
			if (favoriteItem.id === item.id) {
				updatedItem = { ...item, isFavorite: true };
			} else {
				updatedItem = { ...item, isFavorite: false };
			}
		});
	}
	let location = useLocation();
	const navigate = useNavigate();
	const detailsOverviewPoster = item.poster_path
		? item.poster_path
		: item.backdrop_path;
	const addFavoriteItem = useCallback(() => {
		if (!currentUser) {
			setLocalStorage("prevPath", location.pathname, "");
			navigate("/Auth");
		}

		dispatch(postAddFavoriteItem(currentUser.uid, newItem));
		return;
	}, [currentUser]);
	const removeFavoriteItem = useCallback(() => {
		dispatch(postRemoveFavoriteItem(currentUser.uid, newItem));
	}, [currentUser]);

	return (
		<section
			className="Details "
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path})`,
			}}>
			<div className="details-overview">
				<Container>
					<div className="row">
						<DetailsOverViewPoster
							src={detailsOverviewPoster}
							openModalHandler={openModalHandler}
							favoriteAdd={addFavoriteItem}
							favoriteRemoveItem={removeFavoriteItem}
							isFavorite={updatedItem.isFavorite}
							alt={item.title ? item.title : item.name}
							currentUser={currentUser}
						/>
						<DetailsInfo
							title={item.title ? item.title : item.name}
							status={item.status}
							release_date={item.release_date}
							genres={item.genres}
							tagline={item.tagline}
							overview={item.overview}
							seasons={item.seasons}
						/>
					</div>
				</Container>
			</div>
		</section>
	);
}

export default React.memo(DetailsOverview);

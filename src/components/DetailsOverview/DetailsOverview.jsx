import React, { useCallback } from "react";
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
	const currentUser = useSelector(selectCurrentUser);
	let location = useLocation();
	const navigate = useNavigate();
	const detailsOverviewPoster = item.poster_path
		? item.poster_path
		: item.backdrop_path;
	const addFavoriteItem = useCallback(() => {
		if (!currentUser) {
			setLocalStorage("prevPath", location.pathname, "");
			navigate("/Auth");
			return;
		}
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

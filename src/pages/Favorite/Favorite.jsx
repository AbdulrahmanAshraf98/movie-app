import React, { useEffect } from "react";
import "./Favoutite.css";
import Container from "../../components/UI/Container/Container";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import List from "../../components/UI/List/List";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFavoriteData,
	selectFavoriteIsLoading,
} from "../../Store/Favorite/favorite.selector";
import { fetchFavoriteData } from "../../Store/Favorite/favorite.actions";
import { selectCurrentUser } from "../../Store/Auth/user.selector";

function Favorite() {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const favoriteItems = useSelector(selectFavoriteData);
	const loading = useSelector(selectFavoriteIsLoading);
	useEffect(() => {}, []);
	return (
		<section className="Favorite">
			<Container>
				<div className="row">
					{loading && <LoadingSpinner />}
					{favoriteItems && !loading && <List data={favoriteItems} />}
					{favoriteItems && favoriteItems.length === 0 && <p>no data found</p>}
				</div>
			</Container>
		</section>
	);
}

export default Favorite;

import React, { useEffect } from "react";
import "./Favoutite.css";
import Container from "../../components/UI/Container/Container";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import List from "../../components/UI/List/List";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFavoriteData,
	selectFavoriteDetailsError,
	selectFavoriteIsLoading,
} from "../../Store/Favorite/favorite.selector";
import { selectCurrentUser } from "../../Store/Auth/user.selector";

function Favorite() {
	const favoriteItems = useSelector(selectFavoriteData);
	const isLoading = useSelector(selectFavoriteIsLoading);
	const error = useSelector(selectFavoriteDetailsError);
	useEffect(() => {}, []);
	return (
		<section className="Favorite">
			<Container>
				<div className="row">
					{isLoading && <LoadingSpinner />}
					{favoriteItems && !isLoading && <List data={favoriteItems} />}
					{favoriteItems && favoriteItems.length === 0 && <p>no data found</p>}
				</div>
			</Container>
		</section>
	);
}

export default Favorite;

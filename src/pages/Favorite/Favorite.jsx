import React, { useEffect, useState } from "react";
import "./Favoutite.css";
import Container from "../../components/UI/Container/Container";
import List from "../../components/UI/List/List";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFavoriteData,
	selectFavoriteDetailsError,
	selectFavoriteIsLoading,
} from "../../Store/Favorite/favorite.selector";
import { selectCurrentUser } from "../../Store/Auth/user.selector";
import Error from "../../components/UI/Error/Error";
import ListSkeleton from "../../components/Skeleton/ListSkeleton/ListSkeleton";
import { postDeleteAllFavoriteItems } from "../../Store/Favorite/favorite.actions";

function Favorite() {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const favoriteItems = useSelector(selectFavoriteData);
	const [filterFavoriteItems, setFilterFavoriteItems] = useState([]);
	const isLoading = useSelector(selectFavoriteIsLoading);
	const error = useSelector(selectFavoriteDetailsError);
	const filterFavItemsHandler = (event) => {
		const filterValue = event.target.value;
		let filterItems = favoriteItems;
		if (!favoriteItems) return;
		if (filterValue !== "All") {
			filterItems = filterItems.filter(
				(item) => item.mediaType === filterValue,
			);
		}
		setFilterFavoriteItems(filterItems);
	};
	const deleteAllFavItemsHandler = () => {
		if (favoriteItems) dispatch(postDeleteAllFavoriteItems(currentUser.uid));
	};
	useEffect(() => {
		setFilterFavoriteItems(favoriteItems);
	}, [favoriteItems]);
	return (
		<section className="favorite">
			<Container>
				<div class="favorite__title">
					<h3>Favorite List</h3>
				</div>
				{favoriteItems.length > 0 && (
					<div className="favorite__buttons">
						<div className="favorite__buttons_filter">
							<div className="All">
								<button
									className="btn btn-filter"
									value="All"
									onClick={filterFavItemsHandler}>
									all
								</button>
							</div>
							<div className="Movies">
								<button
									className="btn btn-filter"
									value="Movies"
									onClick={filterFavItemsHandler}>
									Movies
								</button>
							</div>
							<div className="Tv">
								<button
									className="btn btn-filter"
									value="tv"
									onClick={filterFavItemsHandler}>
									Tv
								</button>
							</div>
						</div>
						<div className="favorite__buttons__Clear__All " value="DeleteAll">
							<button
								className="btn btn-clear-all"
								value="DeleteAll"
								onClick={deleteAllFavItemsHandler}>
								Clear ALL
							</button>
						</div>
					</div>
				)}

				<div className="row">
					{isLoading && !error && <ListSkeleton cards={10} />}
					{favoriteItems && !isLoading && !error && (
						<List data={filterFavoriteItems} />
					)}
					{(!filterFavoriteItems || filterFavoriteItems.length === 0) && (
						<p>Empty</p>
					)}
					{error && <Error error={error} />}
				</div>
			</Container>
		</section>
	);
}

export default Favorite;

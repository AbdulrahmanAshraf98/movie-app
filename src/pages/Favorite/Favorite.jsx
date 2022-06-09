import React, { useContext, useEffect } from "react";
import FavoutieList from "../../components/FavouriteList/FavoutieList";
import Container from "../../components/UI/Container/Container";
import FavoriteContext from "../../Store/Context/FavoriteContext/FavoriteContext";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
function Favorite() {
	const favoriteContext = useContext(FavoriteContext);
	let loading = favoriteContext.isLoading;
	let FavoriteItems = favoriteContext.getFavoriteItems() || [];
	const favoriteRemoveItem = (id) => {
		favoriteContext.removeFromFavoriteHandler(id);
	};
	useEffect(() => {}, [FavoriteItems]);
	return (
		<>
			{loading && !FavoriteItems && <LoadingSpinner></LoadingSpinner>}
			{FavoriteItems.length === 0 && !loading && <p>Favorite Items is empty</p>}
			{FavoriteItems && !loading && (
				<section className="Favourite">
					<Container>
						<div className="row">
							{
								<FavoutieList
									data={FavoriteItems}
									favoriteRemoveItem={favoriteRemoveItem}
								/>
							}
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Favorite;

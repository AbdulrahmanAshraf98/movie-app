import React, { useContext, useEffect } from "react";
import FavoutieList from "../../components/FavouriteList/FavoutieList";
import Container from "../../components/UI/Container/Container";
import FavoriteContext from "../../Store/Context/FavoriteContext/FavoriteContext";

function Favorite() {
	const favoriteContext = useContext(FavoriteContext);
	let FavoriteItems = favoriteContext.getFavoriteItems();
	const favoriteRemoveItem = (id) => {
		favoriteContext.removeFromFavoriteHandler(id);
	};
	useEffect(() => {}, [FavoriteItems]);
	return (
		FavoriteItems && (
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
		)
	);
}

export default Favorite;

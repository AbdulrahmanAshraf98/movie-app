import React, { useContext, useEffect, useState } from "react";
import FavoutieList from "../../components/FavouriteList/FavoutieList";
import MoviesList from "../../components/MoviesList/MoviesList";
import Container from "../../components/UI/Container/Container";
import List from "../../components/UI/List/List";
import FavoriteContext from "../../Store/Context/FavoriteContext/FavoriteContext";
import {
	getLocalStorage,
	localStorageIsFound,
	setLocalStorage,
} from "../../utilities/Localstorage";

function Favorite() {
	const favoriteContext = useContext(FavoriteContext);
	let FavoriteItems = getLocalStorage("favorite", "object") || [];
	// let defualtvalue =   ;
	// console.log(newx);
	// const [FavoriteItems, setFavoriteItems] = useState(defualtvalue);
	const favoriteRemoveItem = (id) => {
		favoriteContext.removeFromFavoriteHandler(id);
		// setFavoriteItems((prev) => favoriteContext.favoriteItems);
	};

	// FavoriteItems = getLocalStorage("favorite", "object");
	useEffect(() => {
		if (FavoriteItems && FavoriteItems.length === 0) {
			console.log(1);
			FavoriteItems = favoriteContext.favoriteItems;
		}
	}, [favoriteContext.favoriteItems, favoriteRemoveItem]);
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

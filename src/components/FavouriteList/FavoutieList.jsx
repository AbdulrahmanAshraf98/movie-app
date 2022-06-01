import React, { useContext } from "react";
import FavoriteContext from "../../Store/Context/FavoriteContext/FavoriteContext";
import FavouriteItem from "./FavouriteItem/FavouriteItem";
import "./Favoutite.css";
function FavoutieList({ data, favoriteRemoveItem }) {
	return (
		<>
			{data.length > 0 &&
				data.map((item) => (
					<FavouriteItem
						key={item.id}
						item={item}
						favoriteRemoveItem={favoriteRemoveItem}
					/>
				))}
			{data.length === 0 && <p>Favorite Items is empty</p>}
		</>
	);
}

export default FavoutieList;

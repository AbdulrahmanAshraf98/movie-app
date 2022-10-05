import React from "react";
import FavouriteItem from "./FavouriteItem/FavouriteItem";

function FavoutieList({ data, favoriteRemoveItem }) {
	return data.map((item) => (
		<FavouriteItem
			key={item.id}
			item={item}
			favoriteRemoveItem={favoriteRemoveItem}
		/>
	));
}

export default FavoutieList;

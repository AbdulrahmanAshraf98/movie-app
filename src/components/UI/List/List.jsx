import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteData } from "../../../Store/Favorite/favorite.selector";
import ListItem from "./ListItem/ListItem";

function List({ data, mediaType, options }) {
	const favoriteItems = useSelector(selectFavoriteData);
	let newData = data;
	newData = data.map((item) => {
		let updatedItem = { ...item, isFavorite: false };
		if (favoriteItems)
			favoriteItems.forEach((favoriteItem) => {
				if (favoriteItem.id === item.id) {
					updatedItem = { ...item, isFavorite: true };
				}
			});

		return updatedItem;
	});

	return newData.map((element) => {
		return (
			<div className="col" key={element.id}>
				<ListItem
					item={!!mediaType ? { ...element, mediaType } : element}
					mediaType={mediaType}
					options={options}
				/>
			</div>
		);
	});
}

export default List;

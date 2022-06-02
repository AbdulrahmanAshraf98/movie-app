import React, { useEffect, useReducer, useState } from "react";
import {
	getLocalStorage,
	localStorageIsFound,
} from "../../../utilities/Localstorage";

import favoriteReducer from "../../Reducer/favoriteReducer";
import FavoriteContext from "./FavoriteContext";

let initialState = [];
if (localStorageIsFound("favorite")) {
	initialState = getLocalStorage("favorite", "object");
}
function FavoriteContextProvider({ children }) {
	const [favoriteItems, dispatchFavoriteItems] = useReducer(
		favoriteReducer,
		initialState,
	);
	const [buttonTraguer, setButtonTraguer] = useState(false);

	const addToFavoriteHandler = (item) => {
		dispatchFavoriteItems({ type: "ADD-ITEM", payload: item });
	};
	const removeFromFavoriteHandler = (id) => {
		dispatchFavoriteItems({ type: "REMOVE-ITEM", payload: id });
	};
	const foundItem = (id) => {
		const Fav = getLocalStorage("favorite", "object");
		if (Fav) {
			const foundItem = Fav.find((favoriteItem) => id === favoriteItem.id);
			if (foundItem) {
				return true;
			}
		}
		return false;
	};

	useEffect(() => {}, [favoriteItems]);
	const favoriteContext = {
		favoriteItems,
		addToFavoriteHandler,
		removeFromFavoriteHandler,
		foundItem,
	};
	return (
		<FavoriteContext.Provider value={favoriteContext}>
			{children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContextProvider;

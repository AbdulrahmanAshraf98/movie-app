import {
	getLocalStorage,
	localStorageIsFound,
	removeItemFromLocalStorage,
	setLocalStorage,
} from "../../utilities/Localstorage";

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case "ADD-ITEM": {
			if (!localStorageIsFound("favorite")) {
				setLocalStorage("favorite", [action.payload], "Array");
				return [action.payload];
			}

			const favorite = getLocalStorage("favorite", "object");
			const found = favorite.find(
				(favoriteItem) => action.payload.id === favoriteItem.id,
			);
			if (found) {
				return [...state];
			}
			setLocalStorage("favorite", [...favorite, action.payload], "Array");
			return [...favorite, action.payload];
		}

		case "REMOVE-ITEM": {
			const favorite = getLocalStorage("favorite", "object");
			if (favorite.length === 0) {
				removeItemFromLocalStorage("favorite");
				return [];
			}

			let newArray = favorite.filter(
				(element) => element.id !== action.payload,
			);
			setLocalStorage("favorite", newArray, "Array");
			return newArray;
		}
		default:
	}
};
export default favoriteReducer;

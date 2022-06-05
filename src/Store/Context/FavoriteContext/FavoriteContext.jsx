import { createContext } from "react";

const FavoriteContext = createContext({
	FavoriteItems: [],
	isAdded: false,
	addToFavoriteHandler: () => {},
	removeFromFavoriteHandler: () => {},
	foundItem: () => {},
	getFavoriteItems: () => {},
});
export default FavoriteContext;

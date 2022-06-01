import { createContext } from "react";

const FavoriteContext = createContext({
	FavoriteItems: [],
	isAdded: false,
	addToFavoriteHandler: () => {},
	removeFromFavoriteHandler: () => {},
});
export default FavoriteContext;

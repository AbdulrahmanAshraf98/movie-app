const favoriteReducer = (state = [], action) => {
	if (action.type === "SET-ITEMS") {
		return action.payload;
	}
	if (action.type === "ADD-ITEM") {
		if (state.length === 0) {
			return [action.payload];
		} else {
			return [...state, action.payload];
		}
	}
	return state;
};
export default favoriteReducer;

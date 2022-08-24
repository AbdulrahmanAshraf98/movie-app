const favoriteReducer = (state = [], action) => {
	if (action.type === "SET-ITEMS") {
		return action.payload.items;
	}
	if (action.type === "ADD-ITEM") {
		if (state.length === 0) {
			return [action.payload.item];
		} else {
			return [...state, action.payload.item];
		}
	}
	return state;
};
export default favoriteReducer;

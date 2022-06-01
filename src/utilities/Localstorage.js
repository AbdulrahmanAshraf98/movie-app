export const localStorageIsFound = (localStorageItemName) => {
	if (localStorage.getItem(localStorageItemName)) {
		return true;
	}
	return false;
};
export const setLocalStorage = (localStorageItemName, value, type) => {
	let newValue = value;
	if (type === "object" || type === "Array") {
		newValue = JSON.stringify(value);
	}
	localStorage.setItem(localStorageItemName, newValue);
};

export const getLocalStorage = (localStorageItemName, type) => {
	if (type === "object") {
		return JSON.parse(localStorage.getItem(localStorageItemName));
	}
	return localStorage.getItem(localStorageItemName);
};

export const removeItemFromLocalStorage = (localStorageItemName) =>
	localStorage.removeItem(localStorageItemName);

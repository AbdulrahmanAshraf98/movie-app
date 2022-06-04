import React, { useState } from "react";
import {
	getLocalStorage,
	localStorageIsFound,
	setLocalStorage,
} from "../../../utilities/Localstorage";
import ThemeContext from "./ThemeContext";
const defaultTheme = localStorageIsFound("Theme")
	? getLocalStorage("Theme", "")
	: "blue";
function ThemeContextProvider({ children }) {
	const [Theme, setTheme] = useState(defaultTheme);
	const changeThemeHandler = (Theme) => {
		setTheme(Theme);
		setLocalStorage("Theme", Theme, "");
	};
	const themeContext = {
		Theme: Theme,
		changeThemeHandler: changeThemeHandler,
	};

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;

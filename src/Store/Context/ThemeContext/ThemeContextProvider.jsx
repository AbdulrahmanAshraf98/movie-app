import React, { useEffect, useState } from "react";
import {
	getLocalStorage,
	localStorageIsFound,
	setLocalStorage,
} from "../../../utilities/Localstorage";
import ThemeContext from "./ThemeContext";
const wrapper = document.querySelector("#root");
function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("");
	const changeThemeHandler = (themeValue) => {
		setTheme(themeValue);
		setLocalStorage("theme", themeValue);
		wrapper.setAttribute("class", themeValue);
	};
	useEffect(() => {
		const defaultTheme = localStorageIsFound("theme")
			? getLocalStorage("theme", "")
			: "blue";
		wrapper.setAttribute("class", defaultTheme);
		setTheme(defaultTheme);
	}, []);
	const themeContext = {
		theme: theme,
		changeThemeHandler: changeThemeHandler,
	};

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
